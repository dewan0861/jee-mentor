'use client';

import React, { useState } from 'react';
import { Question, MistakeCategory } from '@/types';
import { MathRenderer } from './MathRenderer';
import { CheckCircle, XCircle, Flag, Sparkles, BookOpen, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: string | string[];
  isMarkedForReview?: boolean;
  onSelectAnswer: (answer: string) => void;
  onToggleReview?: () => void;
  isTestMode?: boolean;
  showSolutionImmediately?: boolean;
  onLogMistake?: (mistake: MistakeCategory) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isMarkedForReview = false,
  onSelectAnswer,
  onToggleReview,
  isTestMode = false,
  showSolutionImmediately = false,
  onLogMistake,
}) => {
  const [showSolution, setShowSolution] = useState(false);
  const [selectedMistake, setSelectedMistake] = useState<MistakeCategory | null>(null);

  const isAnswered = selectedAnswer !== undefined && selectedAnswer !== '';
  const isCorrect =
    isAnswered &&
    (Array.isArray(question.correctAnswer)
      ? Array.isArray(selectedAnswer) &&
        question.correctAnswer.sort().join(',') === selectedAnswer.sort().join(',')
      : question.correctAnswer.toString().trim() === (selectedAnswer as string).trim());

  const handleMistakeSelect = (cat: MistakeCategory) => {
    setSelectedMistake(cat);
    if (onLogMistake) onLogMistake(cat);
  };

  const subjectBadgeColors = {
    physics: 'bg-sky-100 text-sky-800 border-sky-200',
    chemistry: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    mathematics: 'bg-violet-100 text-violet-800 border-violet-200',
  };

  const qText = question.questionText || question.text || '';
  const qExplanation = question.explanation || question.solution || '';
  const qConcepts = question.concepts || question.hints || [];
  const qType = question.type || 'single_mcq';
  const qMarks = question.marks ?? 4;
  const qNegMarks = question.negativeMarks ?? 1;
  const qEstTime = question.estimatedTimeSec ?? 90;
  const qYear = question.pyqYear || question.year;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm transition-all">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
            Q{questionNumber}
          </span>
          <span className="text-xs font-medium text-slate-500">of {totalQuestions}</span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider border ${
              subjectBadgeColors[question.subject]
            }`}
          >
            {question.subject}
          </span>
          {qYear && (
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 border border-amber-200">
              PYQ {qYear}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock className="h-3.5 w-3.5" />
            <span>~{qEstTime}s</span>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            +{qMarks} / -{qNegMarks}
          </span>
          {onToggleReview && (
            <button
              onClick={onToggleReview}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                isMarkedForReview
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Flag className={`h-3.5 w-3.5 ${isMarkedForReview ? 'fill-purple-600' : ''}`} />
              <span>{isMarkedForReview ? 'Marked' : 'Review'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Question Text */}
      <div className="my-5 text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
        <MathRenderer content={qText} />
      </div>

      {/* Options for MCQ */}
      {qType === 'single_mcq' && question.options && (
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            const optLetter = String.fromCharCode(65 + idx); // A, B, C, D
            const isSelected = selectedAnswer === idx.toString();
            const showCorrectness = !isTestMode && showSolution && isAnswered;
            const isThisOptionCorrect = question.correctAnswer.toString() === idx.toString();

            let borderStyle = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30';
            if (isSelected) {
              borderStyle = 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-500/20';
            }
            if (showCorrectness) {
              if (isThisOptionCorrect) {
                borderStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/30';
              } else if (isSelected && !isThisOptionCorrect) {
                borderStyle = 'border-rose-500 bg-rose-50/80 ring-2 ring-rose-500/30';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectAnswer(idx.toString())}
                className={`flex w-full items-start gap-3.5 rounded-xl border p-3.5 text-left transition-all ${borderStyle}`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {optLetter}
                </span>
                <div className="flex-1 pt-0.5 text-sm sm:text-base font-normal text-slate-800">
                  <MathRenderer content={opt} inline />
                </div>
                {showCorrectness && isThisOptionCorrect && (
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />
                )}
                {showCorrectness && isSelected && !isThisOptionCorrect && (
                  <XCircle className="h-5 w-5 shrink-0 text-rose-600" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Numerical Answer Input */}
      {question.type === 'numerical' && (
        <div className="my-4 max-w-sm rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Numerical Value Input (e.g. integer or decimal)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={typeof selectedAnswer === 'string' ? selectedAnswer : ''}
              onChange={(e) => onSelectAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-base font-semibold text-slate-800 shadow-xs focus:border-indigo-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          {!isTestMode && showSolution && isAnswered && (
            <p className="mt-2 text-xs font-semibold text-slate-600">
              Official Key: <span className="font-mono text-emerald-700">{question.correctAnswer.toString()}</span>
            </p>
          )}
        </div>
      )}

      {/* Practice Mode: Instant Check & Solution Drawer */}
      {!isTestMode && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
          >
            <BookOpen className="h-4 w-4" />
            <span>{showSolution ? 'Hide Solution' : 'View Step-by-Step Solution'}</span>
            {showSolution ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          {/* Ask AI Tutor shortcut */}
          <Link
            href={`/tutor?q=${encodeURIComponent(qText)}&sub=${question.subject}`}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-50 to-violet-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200 hover:bg-indigo-100/70 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Ask Socratic Hint from AI</span>
          </Link>
        </div>
      )}

      {/* Solution & Error Logging Drawer */}
      {!isTestMode && showSolution && (
        <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/40 p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-indigo-100/80 pb-2 mb-3">
            <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Detailed Explanation
            </h4>
            <div className="flex flex-wrap gap-1">
              {qConcepts.map((concept, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-indigo-700 border border-indigo-200"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm font-normal text-slate-800 leading-relaxed">
            <MathRenderer content={qExplanation} />
          </div>

          {/* Common JEE Trap Alert */}
          {question.trap && (
            <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50/90 p-3 text-xs text-amber-900 shadow-xs">
              <span className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                ⚠️ Common JEE Trap & Warning:
              </span>
              <p className="leading-relaxed">{question.trap}</p>
            </div>
          )}

          {/* Top Ranker Shortcut */}
          {question.shortcut && (
            <div className="mt-3 rounded-lg border border-emerald-300 bg-emerald-50/90 p-3 text-xs text-emerald-900 shadow-xs">
              <span className="font-bold flex items-center gap-1.5 mb-1 text-emerald-950">
                ⚡ Top Ranker Shortcut / Speed Technique:
              </span>
              <p className="leading-relaxed font-mono text-[11.5px]">{question.shortcut}</p>
            </div>
          )}

          {/* Mistake Tagging if student got it wrong or wants to classify */}
          {isAnswered && !isCorrect && (
            <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50/70 p-3.5">
              <p className="text-xs font-bold text-rose-900 mb-2">
                Why was this missed? Tag to personalize your Error Book:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'calculation_error', label: 'Calculation Error' },
                  { id: 'formula_forgotten', label: 'Forgot Formula' },
                  { id: 'conceptual_gap', label: 'Conceptual Gap' },
                  { id: 'misread_question', label: 'Misread Question' },
                  { id: 'time_pressure', label: 'Rushed / Time Pressure' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMistakeSelect(item.id as MistakeCategory)}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                      selectedMistake === item.id
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-100/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {selectedMistake && (
                <p className="mt-2 text-[11px] font-semibold text-rose-800">
                  Logged in your Error Book for targeted spaced repetition review.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
