'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { StorageService } from '@/lib/storage';
import { ErrorBookEntry, MistakeCategory, Subject } from '@/types';
import { MathRenderer } from '@/components/MathRenderer';
import { 
  AlertTriangle, 
  CheckCircle, 
  RotateCcw, 
  Filter, 
  BookOpen, 
  Sparkles, 
  Clock, 
  ChevronRight,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Zap,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function ErrorBookPage() {
  const [entries, setEntries] = useState<ErrorBookEntry[]>([]);
  const [subjectFilter, setSubjectFilter] = useState<Subject | 'all'>('all');
  const [mistakeFilter, setMistakeFilter] = useState<MistakeCategory | 'all'>('all');
  const [srsFilter, setSrsFilter] = useState<'all' | 'due' | 'unresolved' | 'mastered'>('all');
  const [activeEntry, setActiveEntry] = useState<ErrorBookEntry | null>(null);
  const [retryAnswer, setRetryAnswer] = useState('');
  const [retryResult, setRetryResult] = useState<'correct' | 'incorrect' | null>(null);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const list = StorageService.getErrorBook();
    setEntries(list);
    if (list.length > 0 && !activeEntry) {
      setActiveEntry(list[0]);
    }
  }, []);

  const mistakeLabels: Record<MistakeCategory, { label: string; color: string }> = {
    calculation_error: { label: 'Calculation Error', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    formula_forgotten: { label: 'Forgot Formula', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    conceptual_gap: { label: 'Conceptual Gap', color: 'bg-rose-100 text-rose-800 border-rose-200' },
    misread_question: { label: 'Misread Question', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    time_pressure: { label: 'Time Pressure', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    unattempted: { label: 'Unattempted', color: 'bg-slate-100 text-slate-800 border-slate-200' },
  };

  const now = Date.now();

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      if (subjectFilter !== 'all' && e.question.subject !== subjectFilter) return false;
      if (mistakeFilter !== 'all' && e.mistakeCategory !== mistakeFilter) return false;

      if (srsFilter === 'due') {
        if (e.resolved) return false;
        return !e.nextReviewDue || e.nextReviewDue <= now;
      }
      if (srsFilter === 'unresolved') {
        if (e.resolved) return false;
      }
      if (srsFilter === 'mastered') {
        if (!e.resolved) return false;
      }

      return true;
    });
  }, [entries, subjectFilter, mistakeFilter, srsFilter, now]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
    if (filtered.length > 0) {
      setActiveEntry(filtered[0]);
    } else {
      setActiveEntry(null);
    }
  }, [subjectFilter, mistakeFilter, srsFilter, filtered.length]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginatedEntries = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const activeIndexInFiltered = activeEntry
    ? filtered.findIndex((e) => e.questionId === activeEntry.questionId)
    : -1;

  const handlePrevEntry = () => {
    if (activeIndexInFiltered > 0) {
      const prev = filtered[activeIndexInFiltered - 1];
      setActiveEntry(prev);
      setRetryAnswer('');
      setRetryResult(null);
    }
  };

  const handleNextEntry = () => {
    if (activeIndexInFiltered >= 0 && activeIndexInFiltered < filtered.length - 1) {
      const next = filtered[activeIndexInFiltered + 1];
      setActiveEntry(next);
      setRetryAnswer('');
      setRetryResult(null);
    }
  };

  const handleRetrySubmit = (entry: ErrorBookEntry) => {
    const isAnsCorrect =
      retryAnswer.trim().toLowerCase() === entry.question.correctAnswer.toString().trim().toLowerCase();

    if (isAnsCorrect) {
      setRetryResult('correct');
      StorageService.advanceErrorSRS(entry.questionId);
      const updatedList = StorageService.getErrorBook();
      setEntries(updatedList);
      const updatedCurrent = updatedList.find((e) => e.questionId === entry.questionId);
      if (updatedCurrent) setActiveEntry(updatedCurrent);
    } else {
      setRetryResult('incorrect');
      StorageService.logError(entry.question, entry.mistakeCategory);
      setEntries(StorageService.getErrorBook());
    }
  };

  const dueCount = entries.filter((e) => !e.resolved && (!e.nextReviewDue || e.nextReviewDue <= now)).length;

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
            <AlertTriangle className="h-4 w-4" />
            <span>Spaced Repetition Mistake Notebook (Leitner 3-Stage SRS)</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Smart Error Book & Concept Mastery Engine
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl">
            Never lose marks to the same mistake again. Our spaced repetition engine schedules reattempts 
            at 24 hours, 7 days, and 21 days until concepts are 100% graduated and mastered.
          </p>
        </div>

        {/* Due Today Badge */}
        {dueCount > 0 && (
          <button
            onClick={() => setSrsFilter('due')}
            className="flex items-center gap-2 rounded-2xl border border-rose-300 bg-rose-50 px-4 py-2 text-xs font-extrabold text-rose-700 shadow-xs hover:bg-rose-100 transition-colors"
          >
            <Clock className="h-4 w-4 animate-spin text-rose-600" />
            <span>{dueCount} Due for Review Today!</span>
          </button>
        )}
      </div>

      {/* Filter Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs">
        {/* Subject Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-400 mr-1">Subject:</span>
          {(['all', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => setSubjectFilter(sub)}
              className={`rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-bold capitalize transition-all ${
                subjectFilter === sub
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* SRS Stage / Status Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', label: 'All Errors' },
            { id: 'due', label: `Due Today (${dueCount})` },
            { id: 'unresolved', label: 'Unresolved' },
            { id: 'mastered', label: 'Mastered' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSrsFilter(tab.id as any)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                srsFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Error Items List */}
        <div className="space-y-3 lg:col-span-5">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Recorded Errors ({filtered.length})
            </h2>
            {totalPages > 1 && (
              <span className="text-[11px] font-semibold text-slate-400">
                Page {page} of {totalPages}
              </span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs">
              <CheckCircle className="mx-auto h-8 w-8 text-emerald-500 mb-2" />
              <h3 className="text-sm font-bold text-slate-800">No errors match this filter!</h3>
              <p className="mt-1 text-xs text-slate-500">
                {srsFilter === 'due'
                  ? 'Great job! You have cleared all reviews scheduled for today.'
                  : 'Any questions missed during practice or tests automatically appear here.'}
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {paginatedEntries.map((entry) => {
                const isSelected = activeEntry?.questionId === entry.questionId;
                const badge = mistakeLabels[entry.mistakeCategory] || mistakeLabels.conceptual_gap;
                const isDue = !entry.resolved && (!entry.nextReviewDue || entry.nextReviewDue <= now);

                return (
                  <div
                    key={entry.questionId}
                    onClick={() => {
                      setActiveEntry(entry);
                      setRetryAnswer('');
                      setRetryResult(null);
                    }}
                    className={`cursor-pointer rounded-2xl border p-3.5 transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/40 shadow-sm ring-1 ring-indigo-500'
                        : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                          <span className="rounded bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-700 uppercase">
                            {entry.question.subject}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.2 text-[9px] font-bold border ${badge.color}`}
                          >
                            {badge.label}
                          </span>

                          {/* SRS Status Badge */}
                          {entry.resolved ? (
                            <span className="rounded-full bg-emerald-100 px-2 py-0.2 text-[9px] font-bold text-emerald-700">
                              ✓ Mastered
                            </span>
                          ) : isDue ? (
                            <span className="rounded-full bg-rose-100 text-rose-700 border border-rose-200 px-2 py-0.2 text-[9px] font-bold animate-pulse">
                              Due for Review
                            </span>
                          ) : (
                            <span className="rounded-full bg-slate-100 text-slate-600 px-2 py-0.2 text-[9px] font-semibold">
                              Stage {entry.srsStage || 1}/3
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-medium text-slate-800 line-clamp-2">
                          <MathRenderer content={entry.question.questionText || entry.question.text || ''} inline />
                        </div>

                        <p className="mt-1 text-[11px] text-slate-400">
                          Missed {entry.failureCount}x • Mastery: {entry.masteryScore || 20}%
                        </p>
                      </div>

                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isSelected ? 'rotate-90 text-indigo-600' : 'text-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Page-wise Pagination Controls for Errors */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
                  >
                    Previous Page
                  </button>
                  <span className="text-xs font-bold text-slate-700">
                    {page} / {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
                  >
                    Next Page
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Reattempt & Solution Detail Panel */}
        <div className="lg:col-span-7">
          {activeEntry ? (
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs">
              {/* Stepper bar across entries */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-slate-900 px-2 py-0.5 text-xs font-bold text-white uppercase">
                    {activeEntry.question.subject}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold border ${
                      mistakeLabels[activeEntry.mistakeCategory]?.color
                    }`}
                  >
                    {mistakeLabels[activeEntry.mistakeCategory]?.label}
                  </span>
                </div>

                {/* Next / Prev Error Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevEntry}
                    disabled={activeIndexInFiltered <= 0}
                    className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
                    title="Previous Error"
                  >
                    ← Prev
                  </button>
                  <span className="text-xs font-bold text-slate-500">
                    {activeIndexInFiltered + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={handleNextEntry}
                    disabled={activeIndexInFiltered >= filtered.length - 1}
                    className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
                    title="Next Error"
                  >
                    Next →
                  </button>
                </div>
              </div>

              {/* SRS Mastery Progress Meter */}
              <div className="mb-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-indigo-600" />
                    <span>SRS Mastery Level: {activeEntry.masteryScore || 20}%</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {activeEntry.resolved
                      ? '✓ Fully Mastered'
                      : `Stage ${activeEntry.srsStage || 1} of 3`}
                  </span>
                </div>

                {/* Visual Stages Bar */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                  <div
                    className={`rounded-lg py-1.5 border transition-all ${
                      (activeEntry.srsStage || 1) >= 1
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-400 border-slate-200'
                    }`}
                  >
                    Stage 1 (24h)
                  </div>
                  <div
                    className={`rounded-lg py-1.5 border transition-all ${
                      (activeEntry.srsStage || 1) >= 2
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-400 border-slate-200'
                    }`}
                  >
                    Stage 2 (7d)
                  </div>
                  <div
                    className={`rounded-lg py-1.5 border transition-all ${
                      activeEntry.resolved
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white text-slate-400 border-slate-200'
                    }`}
                  >
                    Stage 3 (Mastered)
                  </div>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed mb-6">
                <MathRenderer content={activeEntry.question.questionText} />
              </div>

              {/* Options for MCQ */}
              {activeEntry.question.type === 'single_mcq' && activeEntry.question.options && (
                <div className="space-y-2.5 mb-6">
                  {activeEntry.question.options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRetryAnswer(i.toString())}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                        retryAnswer === i.toString()
                          ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                          retryAnswer === i.toString()
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <div className="pt-0.5 text-xs sm:text-sm font-normal text-slate-800">
                        <MathRenderer content={opt} inline />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Numerical Input */}
              {activeEntry.question.type === 'numerical' && (
                <div className="mb-6 max-w-xs">
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Your Reattempt Answer
                  </label>
                  <input
                    type="text"
                    value={retryAnswer}
                    onChange={(e) => setRetryAnswer(e.target.value)}
                    placeholder="Enter value"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 font-mono text-sm font-semibold text-slate-800 focus:border-indigo-600 focus:outline-hidden"
                  />
                </div>
              )}

              {/* Retry Action Button */}
              <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                <button
                  onClick={() => handleRetrySubmit(activeEntry)}
                  disabled={!retryAnswer}
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-slate-800 disabled:opacity-40 transition-colors"
                >
                  Verify Reattempt
                </button>

                <Link
                  href={`/tutor?q=${encodeURIComponent(activeEntry.question.questionText || activeEntry.question.text || '')}&sub=${activeEntry.question.subject}`}
                  className="flex items-center gap-1.5 rounded-xl bg-indigo-50 px-4 py-2.5 text-xs font-bold text-indigo-700 border border-indigo-200 hover:bg-indigo-100/70 transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Ask AI for a Hint</span>
                </Link>
              </div>

              {/* Retry feedback */}
              {retryResult === 'correct' && (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-bold text-emerald-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>
                    {activeEntry.resolved
                      ? '🎉 Fantastic! You have passed all 3 spaced repetition review cycles. This concept is graduated to Mastered!'
                      : `✓ Correct! Advanced to next review stage. Next interval scheduled automatically.`}
                  </span>
                </div>
              )}

              {retryResult === 'incorrect' && (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-bold text-rose-800 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0" />
                  <span>Not quite right. SRS review reset to Stage 1 to guarantee you master this concept before JEE Mains!</span>
                </div>
              )}

              {/* Explanation drawer */}
              <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Solution Walkthrough
                </h4>
                <div className="text-xs sm:text-sm font-normal text-slate-800 leading-relaxed overflow-x-auto">
                  <MathRenderer content={activeEntry.question.explanation} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-96 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center">
              <HelpCircle className="h-10 w-10 text-slate-300 mb-2" />
              <h3 className="text-base font-bold text-slate-800">Select a Question to Reattempt</h3>
              <p className="mt-1 text-xs text-slate-500 max-w-sm">
                Work through your previous errors until every concept is graduated and mastered.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
