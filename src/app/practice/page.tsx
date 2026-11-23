'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { SEED_QUESTIONS } from '@/lib/questions/seed';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { Question, Subject, Difficulty, QuestionType, MistakeCategory } from '@/types';
import { QuestionCard } from '@/components/QuestionCard';
import { StorageService } from '@/lib/storage';
import { 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Filter, 
  Sparkles, 
  Loader2,
  Award,
  Layers,
  BarChart2,
  Compass,
  ChevronsLeft,
  ChevronsRight,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

function PracticeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const chapterParam = searchParams.get('chapter');
  const subParam = searchParams.get('sub') as Subject | null;

  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>(subParam || 'all');
  const [selectedChapter, setSelectedChapter] = useState<string>(chapterParam || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>('all');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});

  // Sync state if URL searchParams change
  useEffect(() => {
    if (chapterParam) {
      setSelectedChapter(chapterParam);
      const ch = JEE_CURRICULUM.find((c) => c.id === chapterParam);
      if (ch) setSelectedSubject(ch.subject);
      setCurrentQIndex(0);
    }
  }, [chapterParam]);

  // Available chapters for the selected subject (or all)
  const availableChapters = useMemo(() => {
    if (selectedSubject === 'all') return JEE_CURRICULUM;
    return JEE_CURRICULUM.filter((c) => c.subject === selectedSubject);
  }, [selectedSubject]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return SEED_QUESTIONS.filter((q) => {
      if (selectedChapter !== 'all' && q.chapterId !== selectedChapter) return false;
      if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      return true;
    });
  }, [selectedChapter, selectedSubject, selectedDifficulty, selectedType]);

  const activeQuestions = filteredQuestions.length > 0 ? filteredQuestions : [];
  const currentQ = activeQuestions[currentQIndex] || activeQuestions[0];

  const handleSelectAnswer = (ans: string) => {
    if (!currentQ) return;
    const newAnswers = { ...answers, [currentQ.id]: ans };
    setAnswers(newAnswers);

    // Record attempt in local storage
    const isCorrect =
      ans.trim().toLowerCase() === currentQ.correctAnswer.toString().trim().toLowerCase();

    StorageService.recordAttempt(
      {
        id: `att_${Date.now()}`,
        questionId: currentQ.id,
        subject: currentQ.subject,
        chapterId: currentQ.chapterId,
        topicId: currentQ.topicId,
        selectedAnswer: ans,
        isCorrect,
        timeSpentSec: 60,
        timestamp: Date.now(),
      },
      currentQ
    );
  };

  const handleToggleReview = () => {
    if (!currentQ) return;
    setMarkedForReview((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
  };

  const handleLogMistake = (cat: MistakeCategory) => {
    if (!currentQ) return;
    StorageService.logError(currentQ, cat);
  };

  // Score calculation
  let correctCount = 0;
  let wrongCount = 0;
  activeQuestions.forEach((q) => {
    if (answers[q.id] !== undefined) {
      if (answers[q.id].trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase()) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const totalAttempted = correctCount + wrongCount;
  const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

  // Active chapter details
  const activeChapterInfo = JEE_CURRICULUM.find((c) => c.id === selectedChapter);

  return (
    <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Top Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
            {activeChapterInfo
              ? `${activeChapterInfo.name} • Class ${activeChapterInfo.classLevel}`
              : 'Adaptive PYQ Problem Solving'}
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 tracking-tight">
            JEE Main & Advanced Practice Sets
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Verified NTA Questions • Detailed KaTeX Solutions • Error Book Tracking
          </p>
        </div>

        {/* Subject Filter Bar */}
        <div className="flex items-center gap-1 rounded-xl bg-slate-200/80 p-1 text-xs font-semibold">
          {(['all', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => {
                setSelectedSubject(sub);
                setSelectedChapter('all');
                setCurrentQIndex(0);
              }}
              className={`rounded-lg px-2.5 sm:px-3 py-1.5 capitalize transition-all ${
                selectedSubject === sub
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Chapter & Filter Bar */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-12 gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
        {/* Chapter Selector Dropdown */}
        <div className="sm:col-span-5">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Focus Chapter (71 Total):
          </label>
          <select
            value={selectedChapter}
            onChange={(e) => {
              setSelectedChapter(e.target.value);
              setCurrentQIndex(0);
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-slate-800 focus:border-indigo-600 focus:outline-hidden focus:bg-white"
          >
            <option value="all">All Available Chapters ({availableChapters.length})</option>
            {availableChapters.map((chap) => (
              <option key={chap.id} value={chap.id}>
                Class {chap.classLevel} • {chap.name}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Level */}
        <div className="sm:col-span-4">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Difficulty Tier:
          </label>
          <div className="flex items-center gap-1">
            {[
              { id: 'all', label: 'All' },
              { id: 'easy', label: 'Mains Direct' },
              { id: 'medium', label: 'Standard' },
              { id: 'hard', label: 'Advanced' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDifficulty(d.id as any);
                  setCurrentQIndex(0);
                }}
                className={`flex-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors ${
                  selectedDifficulty === d.id
                    ? 'bg-slate-900 text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question Type */}
        <div className="sm:col-span-3">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Question Format:
          </label>
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value as any);
              setCurrentQIndex(0);
            }}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-slate-800 focus:border-indigo-600 focus:outline-hidden focus:bg-white"
          >
            <option value="all">MCQ & Numericals</option>
            <option value="single_mcq">Single Correct MCQ</option>
            <option value="numerical">Numerical Value</option>
          </select>
        </div>
      </div>

      {/* Progress & Live Score Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <div>
            <span className="text-slate-400">Question: </span>
            <span className="text-slate-900 font-bold">
              {activeQuestions.length > 0 ? currentQIndex + 1 : 0} of {activeQuestions.length}
            </span>
          </div>
          <div>
            <span className="text-slate-400">Attempted: </span>
            <span className="text-slate-900 font-bold">{totalAttempted}</span>
          </div>
          <div>
            <span className="text-slate-400">Accuracy: </span>
            <span className={`font-bold ${accuracy >= 75 ? 'text-emerald-600' : 'text-slate-900'}`}>
              {accuracy}%
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="text-slate-400">Score: </span>
            <span className="font-bold text-indigo-600">+{correctCount * 4 - wrongCount * 1}</span>
          </div>
        </div>

        {/* Page / Question Jump Dropdown */}
        {activeQuestions.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Jump To:</span>
            <select
              value={currentQIndex}
              onChange={(e) => setCurrentQIndex(Number(e.target.value))}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-hidden"
            >
              {activeQuestions.map((_, i) => (
                <option key={i} value={i}>
                  Q{i + 1} {answers[activeQuestions[i].id] ? '✓' : ''}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Active Question Card */}
      {currentQ ? (
        <QuestionCard
          question={currentQ}
          questionNumber={currentQIndex + 1}
          totalQuestions={activeQuestions.length}
          selectedAnswer={answers[currentQ.id]}
          isMarkedForReview={markedForReview[currentQ.id]}
          onSelectAnswer={handleSelectAnswer}
          onToggleReview={handleToggleReview}
          isTestMode={false}
          onLogMistake={handleLogMistake}
        />
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-slate-300 mb-2" />
          <p className="text-sm font-bold text-slate-700">No questions match the current filter.</p>
          <button
            onClick={() => {
              setSelectedDifficulty('all');
              setSelectedType('all');
              setSelectedSubject('all');
              setSelectedChapter('all');
            }}
            className="mt-3 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Page-wise Navigation Controls */}
      {activeQuestions.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          {/* Previous & Skip 10 */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 10))}
              disabled={currentQIndex < 10}
              className="hidden sm:flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 shadow-2xs hover:bg-slate-50 disabled:opacity-30 transition-colors"
              title="Jump back 10 questions"
            >
              <ChevronsLeft className="h-4 w-4" />
              <span>-10 Qs</span>
            </button>
            <button
              onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQIndex === 0}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 disabled:opacity-40 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>
          </div>

          {/* Quick Clear Answer */}
          <div className="flex items-center gap-2">
            {currentQ && answers[currentQ.id] && (
              <button
                onClick={() => {
                  const newAnswers = { ...answers };
                  delete newAnswers[currentQ.id];
                  setAnswers(newAnswers);
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
              >
                Clear Answer
              </button>
            )}
          </div>

          {/* Next & Skip 10 */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentQIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
              disabled={currentQIndex === activeQuestions.length - 1}
              className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-slate-800 disabled:opacity-40 transition-colors"
            >
              <span>Next Question</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentQIndex((prev) => Math.min(activeQuestions.length - 1, prev + 10))}
              disabled={currentQIndex + 10 >= activeQuestions.length}
              className="hidden sm:flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 shadow-2xs hover:bg-slate-50 disabled:opacity-30 transition-colors"
              title="Jump forward 10 questions"
            >
              <span>+10 Qs</span>
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Error Book Notification Banner */}
      {wrongCount > 0 && (
        <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-rose-950">
              {wrongCount} question{wrongCount > 1 ? 's' : ''} recorded in your Error Book
            </h3>
            <p className="text-xs text-rose-800 mt-0.5">
              Top rankers review their error logs regularly. Reattempt these questions to ensure concept mastery.
            </p>
          </div>
          <Link
            href="/error-book"
            className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-rose-700 transition-colors"
          >
            Open Error Book
          </Link>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}
