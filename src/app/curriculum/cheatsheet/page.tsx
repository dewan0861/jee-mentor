'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { Chapter, Subject } from '@/types';
import { MathRenderer } from '@/components/MathRenderer';
import { 
  Printer, 
  ArrowLeft, 
  Sparkles, 
  AlertTriangle, 
  Zap, 
  Bookmark, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

function CheatsheetContent() {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get('chapter');
  const subParam = searchParams.get('sub') as Subject | null;

  const [selectedChapterId, setSelectedChapterId] = useState<string>(chapterId || JEE_CURRICULUM[0].id);

  useEffect(() => {
    if (chapterId) {
      setSelectedChapterId(chapterId);
    }
  }, [chapterId]);

  const activeChapter = JEE_CURRICULUM.find((c) => c.id === selectedChapterId) || JEE_CURRICULUM[0];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      {/* Screen-Only Control Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/curriculum"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Syllabus</span>
          </Link>
          <div>
            <h1 className="text-sm font-bold text-slate-900">Printable A4 Revision Cheatsheet</h1>
            <p className="text-[11px] text-slate-500">Dual-column high-yield formula & trap summary</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Chapter Selector */}
          <select
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-hidden"
          >
            {JEE_CURRICULUM.map((c) => (
              <option key={c.id} value={c.id}>
                {c.subject.toUpperCase()} • {c.name} (Class {c.classLevel})
              </option>
            ))}
          </select>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            <Printer className="h-4 w-4" />
            <span>Print to PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet (Standard A4 Proportions) */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm print:border-none print:p-0 print:shadow-none">
        {/* Printable Header */}
        <div className="border-b-2 border-slate-900 pb-4 mb-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded bg-slate-900 px-2 py-0.5 text-[11px] font-extrabold text-white uppercase tracking-wider">
                JEE 2027 Rapid Revision
              </span>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                {activeChapter.subject} • Class {activeChapter.classLevel}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {activeChapter.name}
            </h1>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl font-medium">
              {activeChapter.guide?.overview || 'High-Yield Formula Compendium & Critical Exam Pointers'}
            </p>
          </div>

          <div className="text-right text-[11px] text-slate-400 font-semibold hidden sm:block print:block">
            <span>Official NTA Rationalized Syllabus</span>
            <div className="mt-1 font-bold text-slate-700">{activeChapter.topics.length} Micro-Topics</div>
          </div>
        </div>

        {/* Section 1: Formula Vault in Dual Column Grid */}
        <div className="mb-6">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
            <Sparkles className="h-4 w-4 text-indigo-600 print:text-black" />
            <span>Core Formula Vault ({activeChapter.formulaList.length} Key Relations)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:grid-cols-2">
            {activeChapter.formulaList.map((formula, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-center print:bg-white print:border-slate-300 break-inside-avoid"
              >
                <MathRenderer content={`$$${formula}$$`} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Exam Traps & Top Ranker Shortcuts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 print:grid-cols-2 break-inside-avoid">
          {/* Common Traps */}
          {activeChapter.guide?.commonTraps && activeChapter.guide.commonTraps.length > 0 && (
            <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-4 print:bg-white print:border-amber-400">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5 mb-2.5">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-600 print:text-black" />
                <span>Where Marks Are Lost (Traps):</span>
              </h3>
              <ul className="space-y-2">
                {activeChapter.guide.commonTraps.map((trap, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-amber-950 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{trap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Top Ranker Shortcuts */}
          {activeChapter.guide?.shortcutsVsConcepts && activeChapter.guide.shortcutsVsConcepts.length > 0 && (
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/80 p-4 print:bg-white print:border-emerald-400">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5 mb-2.5">
                <Zap className="h-3.5 w-3.5 text-emerald-600 print:text-black" />
                <span>Speed Techniques & Shortcuts:</span>
              </h3>
              <ul className="space-y-2">
                {activeChapter.guide.shortcutsVsConcepts.map((sc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{sc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Section 3: NCERT Direct Pointers */}
        {activeChapter.guide?.ncertPointers && activeChapter.guide.ncertPointers.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 print:bg-white print:border-slate-300 break-inside-avoid">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2.5">
              <Bookmark className="h-3.5 w-3.5 text-indigo-600 print:text-black" />
              <span>NCERT Direct Exam Lines:</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 print:grid-cols-2">
              {activeChapter.guide.ncertPointers.map((pointer, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5 print:text-black" />
                  <span>{pointer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Print Footer */}
        <div className="mt-8 border-t border-slate-200 pt-3 flex items-center justify-between text-[10px] text-slate-400 font-medium">
          <span>JEE AI Mentor — Precision Preparation for JEE Main & Advanced 2027</span>
          <span>Chapter: {activeChapter.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function CheatsheetPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-slate-500">Loading cheatsheet...</div>}>
      <CheatsheetContent />
    </Suspense>
  );
}
