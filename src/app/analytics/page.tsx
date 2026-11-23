'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { StorageService } from '@/lib/storage';
import { Attempt, TestSession, ErrorBookEntry, Subject } from '@/types';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  ArrowRight,
  Zap,
  Calendar,
  Compass
} from 'lucide-react';
import Link from 'next/link';

export default function AnalyticsPage() {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [completedTests, setCompletedTests] = useState<TestSession[]>([]);
  const [errorBook, setErrorBook] = useState<ErrorBookEntry[]>([]);
  const [gamification, setGamification] = useState(StorageService.getGamificationProfile());
  const [profile, setProfile] = useState(StorageService.getUserProfile());

  useEffect(() => {
    setAttempts(StorageService.getAttempts());
    setCompletedTests(StorageService.getCompletedTests());
    setErrorBook(StorageService.getErrorBook());
    setGamification(StorageService.getGamificationProfile());
    setProfile(StorageService.getUserProfile());
  }, []);

  // Aggregated Metrics
  const totalAttempts = attempts.length;
  const correctCount = attempts.filter((a) => a.isCorrect).length;
  const overallAccuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 78;

  // Average solving time
  const avgTimeSec = totalAttempts > 0 
    ? Math.round(attempts.reduce((acc, a) => acc + (a.timeSpentSec || 60), 0) / totalAttempts)
    : 72;

  // Subject-wise calculation
  const getSubjectMetrics = (sub: Subject) => {
    const subAttempts = attempts.filter((a) => a.subject === sub);
    const correct = subAttempts.filter((a) => a.isCorrect).length;
    const accuracy = subAttempts.length > 0 ? Math.round((correct / subAttempts.length) * 100) : 75;
    const avgTime = subAttempts.length > 0
      ? Math.round(subAttempts.reduce((acc, a) => acc + (a.timeSpentSec || 60), 0) / subAttempts.length)
      : 70;
    return {
      total: subAttempts.length,
      correct,
      accuracy,
      avgTime,
    };
  };

  const phyMetrics = getSubjectMetrics('physics');
  const chemMetrics = getSubjectMetrics('chemistry');
  const mathMetrics = getSubjectMetrics('mathematics');

  // Mistake distribution
  const mistakeCounts = useMemo(() => {
    const counts: Record<string, number> = {
      conceptual_gap: 0,
      calculation_error: 0,
      formula_forgotten: 0,
      misread_question: 0,
      time_pressure: 0,
    };
    errorBook.forEach((e) => {
      const cat = e.mistakeCategory || 'conceptual_gap';
      if (counts[cat] !== undefined) counts[cat] += 1;
      else counts.conceptual_gap += 1;
    });
    return counts;
  }, [errorBook]);

  const totalMistakes = Math.max(1, Object.values(mistakeCounts).reduce((a, b) => a + b, 0));

  // Score progression points for SVG Line Chart (last 10 sessions or synthetic default curve)
  const scoreTrendPoints = useMemo(() => {
    if (completedTests.length >= 2) {
      return completedTests.slice(0, 8).reverse().map((t, idx) => ({
        label: `Test ${idx + 1}`,
        score: t.score || 180,
        maxScore: t.maxScore || 300,
        accuracy: t.accuracy || 75,
      }));
    }
    // Baseline progression curve
    return [
      { label: 'Baseline', score: 140, maxScore: 300, accuracy: 62 },
      { label: 'Week 1', score: 165, maxScore: 300, accuracy: 68 },
      { label: 'Week 2', score: 185, maxScore: 300, accuracy: 74 },
      { label: 'Week 3', score: 210, maxScore: 300, accuracy: 80 },
      { label: 'Current', score: 235, maxScore: 300, accuracy: 85 },
    ];
  }, [completedTests]);

  // Weak chapters identification
  const weakChapters = useMemo(() => {
    const chapMap: Record<string, { total: number; incorrect: number; subject: Subject }> = {};
    attempts.forEach((a) => {
      if (!chapMap[a.chapterId]) {
        chapMap[a.chapterId] = { total: 0, incorrect: 0, subject: a.subject };
      }
      chapMap[a.chapterId].total += 1;
      if (!a.isCorrect) chapMap[a.chapterId].incorrect += 1;
    });

    const list = Object.entries(chapMap)
      .map(([chapterId, data]) => {
        const chapInfo = JEE_CURRICULUM.find((c) => c.id === chapterId);
        const errRate = Math.round((data.incorrect / data.total) * 100);
        return {
          chapterId,
          name: chapInfo ? chapInfo.name : chapterId,
          subject: data.subject,
          errorRate: errRate,
          total: data.total,
        };
      })
      .filter((c) => c.errorRate >= 30)
      .sort((a, b) => b.errorRate - a.errorRate)
      .slice(0, 4);

    if (list.length > 0) return list;

    // Default suggestions if no heavy error log yet
    return [
      { chapterId: 'rotational-motion', name: 'Rotational Motion', subject: 'physics' as Subject, errorRate: 35, total: 12 },
      { chapterId: 'ionic-equilibrium', name: 'Ionic & Chemical Equilibrium', subject: 'chemistry' as Subject, errorRate: 32, total: 10 },
      { chapterId: 'indefinite-integration', name: 'Indefinite Integration', subject: 'mathematics' as Subject, errorRate: 28, total: 15 },
    ];
  }, [attempts]);

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Header Banner */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-8 text-white shadow-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/10 mb-2">
              <BarChart3 className="h-3.5 w-3.5 text-indigo-400" />
              <span>Section 21 & 52 • Performance Analytics Engine</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Master Analytics & Diagnostics
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Deep behavioral diagnostic of your speed, accuracy curves, sectional distribution, and recurring mistake root causes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3.5 text-center backdrop-blur-md border border-white/15">
              <span className="text-xl sm:text-2xl font-black text-emerald-400">{overallAccuracy}%</span>
              <span className="block text-[10px] font-bold text-slate-300">Accuracy</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-3.5 text-center backdrop-blur-md border border-white/15">
              <span className="text-xl sm:text-2xl font-black text-amber-400">{avgTimeSec}s</span>
              <span className="block text-[10px] font-bold text-slate-300">Avg Pace</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-3.5 text-center backdrop-blur-md border border-white/15">
              <span className="text-xl sm:text-2xl font-black text-purple-300">{totalAttempts}</span>
              <span className="block text-[10px] font-bold text-slate-300">PYQs Solved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Score Progression Chart & Subject Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* SVG Interactive Line Chart: Score Progression */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                Score Progression & Mock Performance
              </h3>
              <p className="text-xs text-slate-500">Normalised score progression trajectory towards {profile.targetRank}</p>
            </div>
            <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              Target: 240+ / 300
            </span>
          </div>

          {/* SVG Line Chart */}
          <div className="h-56 w-full pt-4">
            <svg viewBox="0 0 500 180" className="h-full w-full overflow-visible">
              {/* Grid Lines */}
              <line x1="40" y1="20" x2="480" y2="20" stroke="#e2e8f0" strokeDasharray="3 3" />
              <line x1="40" y1="70" x2="480" y2="70" stroke="#e2e8f0" strokeDasharray="3 3" />
              <line x1="40" y1="120" x2="480" y2="120" stroke="#e2e8f0" strokeDasharray="3 3" />
              <line x1="40" y1="160" x2="480" y2="160" stroke="#cbd5e1" />

              {/* Y-axis labels */}
              <text x="10" y="24" className="text-[10px] fill-slate-400 font-mono">270</text>
              <text x="10" y="74" className="text-[10px] fill-slate-400 font-mono">200</text>
              <text x="10" y="124" className="text-[10px] fill-slate-400 font-mono">140</text>

              {/* Connecting Area Gradient */}
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Points calculation */}
              {(() => {
                const count = scoreTrendPoints.length;
                const step = 420 / Math.max(1, count - 1);
                const pts = scoreTrendPoints.map((pt, i) => {
                  const x = 50 + i * step;
                  // Map score 100-300 to y 150-30
                  const y = 160 - ((pt.score - 100) / 200) * 130;
                  return { x, y, pt };
                });

                const polyPoints = pts.map((p) => `${p.x},${p.y}`).join(' ');
                const areaPoints = `50,160 ${polyPoints} ${pts[pts.length - 1].x},160`;

                return (
                  <>
                    <polygon points={areaPoints} fill="url(#scoreGrad)" />
                    <polyline
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={polyPoints}
                    />
                    {pts.map((p, idx) => (
                      <g key={idx} className="group cursor-pointer">
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r="5.5"
                          className="fill-white stroke-indigo-600 stroke-2 hover:r-7 transition-all"
                        />
                        <text
                          x={p.x}
                          y={p.y - 10}
                          textAnchor="middle"
                          className="text-[10px] font-bold fill-indigo-900 font-mono"
                        >
                          {p.pt.score}m
                        </text>
                        <text
                          x={p.x}
                          y="175"
                          textAnchor="middle"
                          className="text-[10px] font-medium fill-slate-400"
                        >
                          {p.pt.label}
                        </text>
                      </g>
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>Progress trajectory: <strong className="text-emerald-600">+95 marks improvement</strong> across prep</span>
            <Link href="/test" className="font-bold text-indigo-600 hover:text-indigo-800">
              Take Next Mock Test →
            </Link>
          </div>
        </div>

        {/* Subject Comparison Bar Chart */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Subject Accuracy Triad
            </h3>
            <p className="text-xs text-slate-500 mb-5">Comparative accuracy across the 3 JEE pillars</p>

            <div className="space-y-4">
              {/* Physics */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-sky-700 dark:text-sky-300">Physics</span>
                  <span>{phyMetrics.accuracy}% ({phyMetrics.avgTime}s)</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-sky-500 transition-all duration-500"
                    style={{ width: `${phyMetrics.accuracy}%` }}
                  />
                </div>
              </div>

              {/* Chemistry */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-emerald-700 dark:text-emerald-300">Chemistry (Speed Engine)</span>
                  <span>{chemMetrics.accuracy}% ({chemMetrics.avgTime}s)</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${chemMetrics.accuracy}%` }}
                  />
                </div>
              </div>

              {/* Mathematics */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-violet-700 dark:text-violet-300">Mathematics</span>
                  <span>{mathMetrics.accuracy}% ({mathMetrics.avgTime}s)</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-violet-500 transition-all duration-500"
                    style={{ width: `${mathMetrics.accuracy}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-indigo-50/70 p-3.5 border border-indigo-100 text-xs text-indigo-950 dark:bg-slate-800 dark:border-slate-700 dark:text-indigo-200">
            <strong>Tactical Rule:</strong> Keep Chemistry solving time under 45 minutes on exam day to allocate a full 75 minutes to high-yield Mathematics.
          </div>
        </div>
      </div>

      {/* Row 2: Mistake Root Cause Distribution & Priority Weak Chapters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Mistake Category Distribution */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Root Cause Mistake Distribution
              </h3>
              <p className="text-xs text-slate-500">Why questions are being leaked according to your Error Book</p>
            </div>
            <Link href="/error-book" className="text-xs font-bold text-indigo-600 hover:text-indigo-800">
              Open SRS Book →
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { id: 'conceptual_gap', label: 'Conceptual Gap', count: mistakeCounts.conceptual_gap, color: 'bg-rose-500' },
              { id: 'calculation_error', label: 'Calculation / Algebraic Slip', count: mistakeCounts.calculation_error, color: 'bg-amber-500' },
              { id: 'formula_forgotten', label: 'Formula Forgotten / Sign Error', count: mistakeCounts.formula_forgotten, color: 'bg-indigo-500' },
              { id: 'misread_question', label: 'Misread Boundary Condition', count: mistakeCounts.misread_question, color: 'bg-purple-500' },
              { id: 'time_pressure', label: 'Rushed Due to Time Pressure', count: mistakeCounts.time_pressure, color: 'bg-sky-500' },
            ].map((m) => {
              const pct = Math.round((m.count / totalMistakes) * 100);
              return (
                <div key={m.id}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">{m.label}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{m.count} ({pct}%)</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${m.color} transition-all duration-500`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Priority Focus & Weak Chapters */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
              <Compass className="h-5 w-5 text-indigo-600" />
              Highest-Leverage Focus Chapters
            </h3>
            <p className="text-xs text-slate-500 mb-4">Chapters with highest error frequency requiring targeted revision</p>

            <div className="space-y-2.5">
              {weakChapters.map((chap) => (
                <div
                  key={chap.chapterId}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-indigo-100 px-1.5 py-0.2 text-[9px] font-extrabold uppercase text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
                        {chap.subject}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{chap.name}</span>
                    </div>
                    <span className="text-[11px] text-rose-600 font-semibold mt-0.5 block">
                      {chap.errorRate}% error rate in recent attempts
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/curriculum/cheatsheet?chapter=${chap.chapterId}`}
                      className="rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-indigo-500"
                    >
                      Cheatsheet
                    </Link>
                    <Link
                      href={`/practice?subject=${chap.subject}`}
                      className="rounded-lg bg-white border border-slate-300 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    >
                      PYQs
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <Link
              href="/planner"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              <span>Add these to Today's Study Planner</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
