'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { StorageService } from '@/lib/storage';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { SEED_QUESTIONS } from '@/lib/questions/seed';
import { ErrorBookEntry, Attempt, TestSession, Subject } from '@/types';
import { 
  Flame, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Timer, 
  BookOpen, 
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Clock,
  Compass,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [streak, setStreak] = useState(3);
  const [unresolvedErrors, setUnresolvedErrors] = useState<ErrorBookEntry[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [completedTests, setCompletedTests] = useState<TestSession[]>([]);
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<Subject>('physics');
  const [selectedClassTab, setSelectedClassTab] = useState<11 | 12 | 'all'>('all');
  const [matrixPage, setMatrixPage] = useState(1);

  const CHAPTERS_PER_PAGE = 6;

  useEffect(() => {
    setStreak(StorageService.getStreak());
    setUnresolvedErrors(StorageService.getErrorBook().filter((e) => !e.resolved));
    setAttempts(StorageService.getAttempts());
    setCompletedTests(StorageService.getCompletedTests());
  }, []);

  // Compute subject accuracy stats
  const computeSubjectStats = (sub: 'physics' | 'chemistry' | 'mathematics') => {
    const subAttempts = attempts.filter((a) => a.subject === sub);
    const correct = subAttempts.filter((a) => a.isCorrect).length;
    const accuracy = subAttempts.length > 0 ? Math.round((correct / subAttempts.length) * 100) : 78;
    return {
      total: subAttempts.length,
      correct,
      accuracy,
    };
  };

  const phyStats = computeSubjectStats('physics');
  const chemStats = computeSubjectStats('chemistry');
  const mathStats = computeSubjectStats('mathematics');

  // Filtered chapters for matrix
  const filteredChapters = useMemo(() => {
    return JEE_CURRICULUM.filter((c) => {
      if (c.subject !== selectedSubjectTab) return false;
      if (selectedClassTab !== 'all' && c.classLevel !== selectedClassTab) return false;
      return true;
    });
  }, [selectedSubjectTab, selectedClassTab]);

  // Reset page when subject or class changes
  useEffect(() => {
    setMatrixPage(1);
  }, [selectedSubjectTab, selectedClassTab]);

  const totalMatrixPages = Math.max(1, Math.ceil(filteredChapters.length / CHAPTERS_PER_PAGE));
  const paginatedChapters = filteredChapters.slice(
    (matrixPage - 1) * CHAPTERS_PER_PAGE,
    matrixPage * CHAPTERS_PER_PAGE
  );

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Hero Banner */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-9 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/10 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Target: JEE Main & Advanced 2027</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Consistency Beats Intensity.
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Welcome to your daily JEE command center. Work through targeted PYQs, resolve concepts in your Error Book, and build deep problem-solving intuition with your Socratic AI Tutor.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/practice"
              className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 sm:px-5 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-indigo-600 transition-colors"
            >
              <Target className="h-4 w-4" />
              <span>Daily Practice Sprint</span>
            </Link>
            <Link
              href="/test"
              className="flex items-center gap-2 rounded-xl bg-white/10 px-4 sm:px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Timer className="h-4 w-4 text-amber-300" />
              <span>Mock Exam</span>
            </Link>
            <Link
              href="/tutor"
              className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 sm:px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-indigo-300" />
              <span>Ask AI Mentor</span>
            </Link>
          </div>
        </div>

        {/* Streak Floating Card */}
        <div className="mt-6 sm:mt-0 sm:absolute sm:top-8 sm:right-8 rounded-2xl bg-white/10 p-4 sm:p-5 backdrop-blur-lg border border-white/15 text-center sm:w-44">
          <Flame className="mx-auto h-7 w-7 text-amber-400 fill-amber-400 mb-1" />
          <span className="text-2xl sm:text-3xl font-black">{streak} Days</span>
          <p className="text-[11px] font-semibold text-slate-300 mt-0.5">Study Consistency</p>
        </div>
      </div>

      {/* Recommended 3-Phase Daily Routine */}
      <div className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
          <Compass className="h-4 w-4 text-indigo-600" />
          <span>Recommended Daily 3-Phase Routine</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Phase 1 */}
          <div className="rounded-2xl border border-indigo-100 bg-white p-4 sm:p-5 shadow-2xs hover:border-indigo-200 transition-all">
            <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-extrabold text-indigo-700 uppercase">
              Phase 1 • Morning
            </span>
            <h3 className="mt-2 text-sm font-bold text-slate-900">15-Min Rapid-Fire Sprint</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Warm up with 5 curated previous year questions to build speed and eliminate early morning inertia.
            </p>
            <Link
              href="/practice"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              <span>Start 5-Q Sprint</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Phase 2 */}
          <div className="rounded-2xl border border-amber-100 bg-white p-4 sm:p-5 shadow-2xs hover:border-amber-200 transition-all">
            <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-amber-700 uppercase">
              Phase 2 • Core Study
            </span>
            <h3 className="mt-2 text-sm font-bold text-slate-900">Theory & Socratic Doubt Solving</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Study chapter micro-topics, review formula vaults, and ask your AI tutor for guided hints when stuck.
            </p>
            <Link
              href="/curriculum"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Phase 3 */}
          <div className="rounded-2xl border border-rose-100 bg-white p-4 sm:p-5 shadow-2xs hover:border-rose-200 transition-all">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-extrabold text-rose-700 uppercase">
                Phase 3 • Evening
              </span>
              <span className="rounded-full bg-rose-600 px-2 py-0.2 text-[10px] font-bold text-white">
                {unresolvedErrors.length} Pending
              </span>
            </div>
            <h3 className="mt-2 text-sm font-bold text-slate-900">Error Book Clearing</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Reattempt questions you missed in tests. Top rankers never let an unresolved mistake sit longer than 48 hours.
            </p>
            <Link
              href="/error-book"
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-800"
            >
              <span>Resolve Errors</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* High-Yield Subject Analytics Grid */}
      <div className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
          <span>Subject Readiness & Accuracy</span>
          <span className="text-[11px] font-semibold text-slate-400">Class 11 & 12 Weightage</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Physics Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700 border border-sky-200 uppercase">
                Physics
              </span>
              <span className="text-xs font-bold text-slate-900">{phyStats.accuracy}% Accuracy</span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">Mechanics & Electrodynamics</h3>
            <p className="text-xs text-slate-500 mt-0.5">Heavy focus on Rotational Motion & Capacitors</p>
            <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-full rounded-full" style={{ width: `${phyStats.accuracy}%` }} />
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-400">
              <span>{phyStats.total} Solved</span>
              <Link href="/practice?sub=physics" className="text-sky-600 hover:underline">
                Practice Physics →
              </Link>
            </div>
          </div>

          {/* Chemistry Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 uppercase">
                Chemistry
              </span>
              <span className="text-xs font-bold text-slate-900">{chemStats.accuracy}% Accuracy</span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">Organic & Physical Core</h3>
            <p className="text-xs text-slate-500 mt-0.5">NCERT Organic & Coordination Chemistry</p>
            <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${chemStats.accuracy}%` }} />
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-400">
              <span>{chemStats.total} Solved</span>
              <Link href="/practice?sub=chemistry" className="text-emerald-600 hover:underline">
                Practice Chemistry →
              </Link>
            </div>
          </div>

          {/* Mathematics Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700 border border-violet-200 uppercase">
                Mathematics
              </span>
              <span className="text-xs font-bold text-slate-900">{mathStats.accuracy}% Accuracy</span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">Calculus & 3D Geometry</h3>
            <p className="text-xs text-slate-500 mt-0.5">Definite Integrals & Vector Skew Lines</p>
            <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-violet-500 h-full rounded-full" style={{ width: `${mathStats.accuracy}%` }} />
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-400">
              <span>{mathStats.total} Solved</span>
              <Link href="/practice?sub=mathematics" className="text-violet-600 hover:underline">
                Practice Math →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Chapter Syllabus Matrix with Page-wise Navigation */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
          <div>
            <h2 className="text-base font-extrabold text-slate-900">
              JEE 2027 Chapter Syllabus Matrix
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Explore chapters page by page or filter by Class 11 & Class 12
            </p>
          </div>

          {/* Subject & Class Switchers */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Subject Selector */}
            <div className="flex rounded-xl bg-slate-100 p-1">
              {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubjectTab(sub)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize transition-all ${
                    selectedSubjectTab === sub
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Class Level Selector */}
            <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-700">
              {(['all', 11, 12] as const).map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClassTab(cls)}
                  className={`rounded-lg px-2.5 py-1 transition-all ${
                    selectedClassTab === cls
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {cls === 'all' ? 'All' : `Class ${cls}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Paginated Chapters Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedChapters.map((chap) => (
            <div
              key={chap.id}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-200">
                    Class {chap.classLevel}
                  </span>
                  {chap.weightage === 'high' && (
                    <span className="flex items-center gap-1 text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.2 rounded-full border border-amber-200">
                      <Zap className="h-3 w-3 fill-amber-500 text-amber-500" /> High Yield
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{chap.name}</h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  {chap.topics.length} Micro-Topics • {chap.formulaList.length} Key Formulas
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200/60 pt-3 text-xs">
                <Link
                  href={`/curriculum?chapter=${chap.id}`}
                  className="font-bold text-slate-600 hover:text-slate-900"
                >
                  Theory Notes
                </Link>
                <Link
                  href={`/practice?chapter=${chap.id}`}
                  className="font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Practice</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Matrix Pagination Stepper Footer */}
        {totalMatrixPages > 1 && (
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
            <button
              onClick={() => setMatrixPage((p) => Math.max(1, p - 1))}
              disabled={matrixPage === 1}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalMatrixPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMatrixPage(i + 1)}
                  className={`h-7 w-7 rounded-lg text-xs font-bold transition-all ${
                    matrixPage === i + 1
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMatrixPage((p) => Math.min(totalMatrixPages, p + 1))}
              disabled={matrixPage === totalMatrixPages}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
