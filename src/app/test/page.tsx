'use client';

import React, { useState, useEffect } from 'react';
import { SEED_QUESTIONS } from '@/lib/questions/seed';
import { Question, Subject, TestSession } from '@/types';
import { QuestionCard } from '@/components/QuestionCard';
import { QuestionPalette } from '@/components/QuestionPalette';
import { StorageService } from '@/lib/storage';
import { formatTime } from '@/lib/utils';
import { 
  Timer, 
  AlertCircle, 
  Award, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  LayoutGrid,
  X,
  Layers,
  ChevronRight,
  TrendingUp,
  Zap,
  Sparkles,
  Target
} from 'lucide-react';
import Link from 'next/link';
import { predictJeeRank } from '@/lib/rankPredictor';

export default function TestSimulationPage() {
  const [testState, setTestState] = useState<'config' | 'running' | 'completed'>('config');
  const [testType, setTestType] = useState<'mini_sprint' | 'subject_sprint' | 'full_mock'>('mini_sprint');
  const [testSubject, setTestSubject] = useState<Subject>('physics');
  const [activeSubject, setActiveSubject] = useState<Subject>('physics');

  // Test session state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [visited, setVisited] = useState<Record<string, boolean>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeRemainingSec, setTimeRemainingSec] = useState(1800); // 30 mins
  const [sessionResults, setSessionResults] = useState<any>(null);
  const [mobilePaletteOpen, setMobilePaletteOpen] = useState(false);

  // Setup test session
  const handleStartTest = () => {
    let selected: Question[] = [];

    if (testType === 'mini_sprint') {
      // 15 curated high-yield questions (5 Phy, 5 Chem, 5 Math)
      const phy = SEED_QUESTIONS.filter((q) => q.subject === 'physics').slice(0, 5);
      const chem = SEED_QUESTIONS.filter((q) => q.subject === 'chemistry').slice(0, 5);
      const math = SEED_QUESTIONS.filter((q) => q.subject === 'mathematics').slice(0, 5);
      selected = [...phy, ...chem, ...math];
      setTimeRemainingSec(30 * 60); // 30 minutes
    } else if (testType === 'subject_sprint') {
      selected = SEED_QUESTIONS.filter((q) => q.subject === testSubject).slice(0, 25);
      setTimeRemainingSec(45 * 60); // 45 minutes
    } else {
      // Full Mock: 75 Questions (25 Phy + 25 Chem + 25 Math)
      const phy = SEED_QUESTIONS.filter((q) => q.subject === 'physics').slice(0, 25);
      const chem = SEED_QUESTIONS.filter((q) => q.subject === 'chemistry').slice(0, 25);
      const math = SEED_QUESTIONS.filter((q) => q.subject === 'mathematics').slice(0, 25);
      selected = [...phy, ...chem, ...math];
      setTimeRemainingSec(180 * 60); // 180 minutes (3 hours)
    }

    if (selected.length === 0) selected = [...SEED_QUESTIONS];

    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setVisited({ [selected[0].id]: true });
    setMarkedForReview({});
    setTestState('running');
    setMobilePaletteOpen(false);
  };

  // Timer countdown
  useEffect(() => {
    if (testState !== 'running') return;

    const timer = setInterval(() => {
      setTimeRemainingSec((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testState]);

  // Handle question navigation & marking
  const handleSelectQuestion = (idx: number) => {
    setCurrentIndex(idx);
    if (questions[idx]) {
      setVisited((prev) => ({ ...prev, [questions[idx].id]: true }));
      // Also update active subject if full mock
      if (questions[idx].subject) {
        setActiveSubject(questions[idx].subject);
      }
    }
    setMobilePaletteOpen(false);
  };

  const handleSelectAnswer = (ans: string) => {
    const q = questions[currentIndex];
    if (!q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: ans }));
    setVisited((prev) => ({ ...prev, [q.id]: true }));
  };

  const handleToggleReview = () => {
    const q = questions[currentIndex];
    if (!q) return;
    setMarkedForReview((prev) => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  // Submit & evaluate test
  const handleSubmitTest = () => {
    let totalScore = 0;
    let maxScore = questions.length * 4;
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    let subjectScores: Record<Subject, { correct: number; wrong: number; score: number }> = {
      physics: { correct: 0, wrong: 0, score: 0 },
      chemistry: { correct: 0, wrong: 0, score: 0 },
      mathematics: { correct: 0, wrong: 0, score: 0 },
    };

    questions.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns !== undefined && userAns.trim() !== '') {
        const isCorrect =
          userAns.trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase();

        if (isCorrect) {
          totalScore += 4;
          correctCount++;
          subjectScores[q.subject].correct++;
          subjectScores[q.subject].score += 4;
        } else {
          totalScore -= 1; // Negative marking
          wrongCount++;
          subjectScores[q.subject].wrong++;
          subjectScores[q.subject].score -= 1;
          // Auto log to error book!
          StorageService.logError(q, 'conceptual_gap');
        }
      } else {
        unattemptedCount++;
      }
    });

    const attempted = correctCount + wrongCount;
    const accuracy = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0;

    const results = {
      totalScore,
      maxScore,
      correctCount,
      wrongCount,
      unattemptedCount,
      accuracy,
      subjectScores,
    };

    setSessionResults(results);
    setTestState('completed');
    setMobilePaletteOpen(false);

    // Save test session in storage
    StorageService.saveTestSession({
      id: `test_${Date.now()}`,
      title: testType === 'full_mock' ? 'JEE Main Full Mock (75Q)' : 'Timed Sprint Test',
      type: testType === 'full_mock' ? 'full_mock' : 'chapter_test',
      durationMinutes: Math.round((questions.length * 2.4)),
      totalQuestions: questions.length,
      questions,
      answers,
      markedForReview,
      timeSpentPerQuestion: {},
      startedAt: Date.now() - (1800 - timeRemainingSec) * 1000,
      completedAt: Date.now(),
      score: totalScore,
      maxScore,
      accuracy,
      isSubmitted: true,
    });
  };

  const currentQ = questions[currentIndex];

  // Section offsets for full mock
  const sectionOffsets =
    testType === 'full_mock'
      ? {
          physics: { start: 0, end: 25 },
          chemistry: { start: 25, end: 50 },
          mathematics: { start: 50, end: 75 },
        }
      : undefined;

  // Answered count for badge
  const answeredCount = Object.keys(answers).filter((k) => answers[k] !== '').length;

  // -------------------------------------------------------------
  // VIEW: Test Configuration & Instructions
  // -------------------------------------------------------------
  if (testState === 'config') {
    return (
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 border border-indigo-200 mb-3">
            <Timer className="h-4 w-4" />
            <span>NTA Official Exam Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            JEE Main & Advanced Test Engine
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Experience real exam conditions with strict $+4 / -1$ negative marking, question palettes, section switching, and time management analytics.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          {[
            {
              id: 'mini_sprint',
              title: '30-Min Mixed Sprint',
              desc: '15 High-yield PCM questions for daily speed & accuracy training.',
              duration: '30 Mins (15 Qs)',
              badge: 'Daily Recommended',
            },
            {
              id: 'subject_sprint',
              title: 'Subject Deep Dive',
              desc: '25 intensive questions focused exclusively on one chosen subject.',
              duration: '45 Mins (25 Qs)',
              badge: 'Focus Drill',
            },
            {
              id: 'full_mock',
              title: 'Full Length JEE Mock',
              desc: 'Authentic 75Q NTA pattern across Physics, Chemistry, and Mathematics.',
              duration: '180 Mins (75 Qs)',
              badge: 'Real Simulation',
            },
          ].map((t) => (
            <div
              key={t.id}
              onClick={() => setTestType(t.id as any)}
              className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                testType === t.id
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-md ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                {t.badge}
              </span>
              <h3 className="mt-2 text-base font-bold text-slate-900">{t.title}</h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-indigo-700">
                <Timer className="h-3.5 w-3.5" />
                <span>{t.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subject selector for subject sprint */}
        {testType === 'subject_sprint' && (
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 text-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Choose Subject for the Sprint
            </h3>
            <div className="flex justify-center gap-3">
              {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setTestSubject(sub)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-bold capitalize transition-all ${
                    testSubject === sub
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Exam Rules Card */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 mb-8 text-xs text-amber-950">
          <h4 className="font-bold flex items-center gap-1.5 text-amber-900 mb-2">
            <AlertCircle className="h-4 w-4" />
            Standard NTA Examination Guidelines:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-amber-900/90 font-medium">
            <li>$+4$ marks for each correct response.</li>
            <li>$-1$ mark for each incorrect response (negative marking applies to both MCQs and Numericals).</li>
            <li>$0$ marks for unattempted questions.</li>
            <li>Use the Question Palette to jump to any question or mark it for later review.</li>
            <li>The test auto-submits when the timer reaches 00:00.</li>
          </ul>
        </div>

        {/* Launch Button */}
        <div className="text-center">
          <button
            onClick={handleStartTest}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-sm font-extrabold text-white shadow-md hover:from-indigo-700 hover:to-violet-700 transition-all cursor-pointer"
          >
            Start Test Now
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: Completed Test Scorecard
  // -------------------------------------------------------------
  if (testState === 'completed' && sessionResults) {
    const prediction = predictJeeRank(
      sessionResults.totalScore,
      sessionResults.maxScore,
      sessionResults.subjectScores
    );

    return (
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-9 shadow-sm text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 mb-3">
            <Award className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Test Scorecard & Diagnostic</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Official NTA score calibration & projected IIT/NIT ranking
          </p>

          {/* Primary Score Counter */}
          <div className="my-6 flex justify-center items-baseline gap-2">
            <span className="text-5xl font-black text-indigo-600">{sessionResults.totalScore}</span>
            <span className="text-xl font-bold text-slate-400">/ {sessionResults.maxScore}</span>
          </div>

          {/* IIT JEE Rank & Percentile Prediction Card */}
          <div className="mb-6 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50/80 via-white to-violet-50/80 p-5 text-left shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <h3 className="text-sm font-extrabold text-slate-900">
                  NTA 2024 Calibrated Rank Prediction
                </h3>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold border ${prediction.tierBadgeColor}`}>
                {prediction.tierLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projected NTA Percentile</span>
                <p className="text-2xl font-black text-indigo-600 mt-0.5">{prediction.percentile}%ile</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated All India Rank</span>
                <p className="text-base sm:text-lg font-black text-slate-900 mt-1">{prediction.rankRange}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-3.5 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">JEE Advanced Cutoff</span>
                <p className={`text-base font-extrabold mt-1 ${prediction.qualifiesForAdvanced ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {prediction.qualifiesForAdvanced ? '✓ Safe Qualified' : 'Borderline Cutoff'}
                </p>
              </div>
            </div>

            {/* Tactical Actions */}
            {prediction.recommendations.length > 0 && (
              <div className="rounded-xl border border-indigo-100 bg-white p-3.5">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                  Top Ranker Next Action:
                </span>
                <ul className="space-y-1.5">
                  {prediction.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Subject Scores Breakdown */}
          {sessionResults.subjectScores && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { name: 'Physics', data: sessionResults.subjectScores.physics, bg: 'border-sky-200 bg-sky-50/50 text-sky-900' },
                { name: 'Chemistry', data: sessionResults.subjectScores.chemistry, bg: 'border-emerald-200 bg-emerald-50/50 text-emerald-900' },
                { name: 'Mathematics', data: sessionResults.subjectScores.mathematics, bg: 'border-violet-200 bg-violet-50/50 text-violet-900' },
              ].map((sub) => (
                <div key={sub.name} className={`rounded-2xl border p-3.5 text-center ${sub.bg}`}>
                  <span className="text-[10px] font-extrabold uppercase">{sub.name}</span>
                  <p className="text-lg font-black mt-0.5">{sub.data.score} M</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {sub.data.correct} Correct • {sub.data.wrong} Wrong
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Correct</span>
              <p className="text-lg font-extrabold text-emerald-600 mt-0.5">
                {sessionResults.correctCount} (+{sessionResults.correctCount * 4})
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Incorrect</span>
              <p className="text-lg font-extrabold text-rose-600 mt-0.5">
                {sessionResults.wrongCount} (-{sessionResults.wrongCount})
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Unattempted</span>
              <p className="text-lg font-extrabold text-slate-700 mt-0.5">
                {sessionResults.unattemptedCount}
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Accuracy</span>
              <p className="text-lg font-extrabold text-indigo-600 mt-0.5">
                {sessionResults.accuracy}%
              </p>
            </div>
          </div>

          {/* Negative Marking Warning */}
          {sessionResults.wrongCount > 0 && (
            <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs text-rose-900 text-left flex items-start gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
              <div>
                <span className="font-bold">Negative Marking Warning:</span> You lost{' '}
                <span className="font-extrabold text-rose-700">{sessionResults.wrongCount} marks</span> due
                to incorrect attempts! These questions have been automatically logged to your{' '}
                <Link href="/error-book" className="font-bold underline text-rose-800">
                  Error Book
                </Link>{' '}
                for spaced repetition review.
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setTestState('config')}
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Take Another Test</span>
            </button>
            <Link
              href="/error-book"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Review Error Book
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: Active Test Screen
  // -------------------------------------------------------------
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Top Test Bar: Timer, Subject Sections & Mobile Palette Trigger */}
      <div className="sticky top-16 z-40 mb-4 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-3 sm:p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
              {testType === 'full_mock' ? '75Q Full Simulation' : 'Timed Sprint'}
            </span>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
              Q{currentIndex + 1} of {questions.length} •{' '}
              <span className="capitalize text-slate-600 font-semibold">{currentQ?.subject}</span>
            </h2>
          </div>
        </div>

        {/* Section Tabs for Full Mock */}
        {testType === 'full_mock' && (
          <div className="hidden sm:flex rounded-xl bg-slate-100 p-1">
            {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => {
              const isActive = activeSubject === sub;
              return (
                <button
                  key={sub}
                  onClick={() => {
                    setActiveSubject(sub);
                    if (sectionOffsets) {
                      handleSelectQuestion(sectionOffsets[sub].start);
                    }
                  }}
                  className={`rounded-lg px-3 py-1 text-xs font-bold capitalize transition-all ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Mobile Palette Button */}
          <button
            onClick={() => setMobilePaletteOpen(true)}
            className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700 lg:hidden shadow-xs hover:bg-indigo-100"
          >
            <LayoutGrid className="h-4 w-4" />
            <span>Palette ({answeredCount}/{questions.length})</span>
          </button>

          {/* Timer Badge */}
          <div
            className={`flex items-center gap-1.5 rounded-xl px-3 sm:px-4 py-1.5 font-mono text-sm sm:text-base font-bold shadow-xs ${
              timeRemainingSec < 300
                ? 'bg-rose-100 text-rose-700 border border-rose-300 animate-pulse'
                : 'bg-slate-900 text-white'
            }`}
          >
            <Timer className="h-4 w-4" />
            <span>{formatTime(timeRemainingSec)}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Active Question & Question Palette */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Active Question Card */}
        <div className="lg:col-span-8">
          {currentQ && (
            <QuestionCard
              question={currentQ}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={answers[currentQ.id]}
              isMarkedForReview={markedForReview[currentQ.id]}
              onSelectAnswer={handleSelectAnswer}
              onToggleReview={handleToggleReview}
              isTestMode={true}
            />
          )}

          {/* Navigation Controls */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => handleSelectQuestion(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 disabled:opacity-40 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => {
                if (!currentQ) return;
                const newAnswers = { ...answers };
                delete newAnswers[currentQ.id];
                setAnswers(newAnswers);
              }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
            >
              Clear Response
            </button>

            <button
              onClick={() => handleSelectQuestion(Math.min(questions.length - 1, currentIndex + 1))}
              disabled={currentIndex === questions.length - 1}
              className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-slate-800 disabled:opacity-40 transition-colors"
            >
              <span>Save & Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Desktop: Question Palette */}
        <div className="hidden lg:block lg:col-span-4">
          <QuestionPalette
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            answers={answers}
            visited={visited}
            markedForReview={markedForReview}
            questionIds={questions.map((q) => q.id)}
            activeSubject={activeSubject}
            onSelectSubject={setActiveSubject}
            onSelectQuestion={handleSelectQuestion}
            onSubmitTest={handleSubmitTest}
            sectionOffsets={sectionOffsets}
          />
        </div>

        {/* Mobile / Tablet Question Palette Bottom Sheet */}
        {mobilePaletteOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-xs lg:hidden p-3 sm:p-4">
            <div className="mt-auto max-h-[85vh] w-full rounded-3xl bg-white p-4 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4 text-indigo-600" />
                  <h3 className="text-sm font-bold text-slate-900">Question Palette</h3>
                </div>
                <button
                  onClick={() => setMobilePaletteOpen(false)}
                  className="rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1">
                <QuestionPalette
                  totalQuestions={questions.length}
                  currentIndex={currentIndex}
                  answers={answers}
                  visited={visited}
                  markedForReview={markedForReview}
                  questionIds={questions.map((q) => q.id)}
                  activeSubject={activeSubject}
                  onSelectSubject={setActiveSubject}
                  onSelectQuestion={handleSelectQuestion}
                  onSubmitTest={handleSubmitTest}
                  sectionOffsets={sectionOffsets}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
