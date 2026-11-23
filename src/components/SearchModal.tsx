'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { SEED_QUESTIONS } from '@/lib/questions/seed';
import { Search, BookOpen, FileText, HelpCircle, ArrowRight, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      return { chapters: [], questions: [], formulas: [] };
    }

    // Chapters
    const matchingChapters = JEE_CURRICULUM.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.unit.toLowerCase().includes(q) ||
        c.topics.some((t) => t.name.toLowerCase().includes(q))
    ).slice(0, 5);

    // Questions
    const matchingQuestions = SEED_QUESTIONS.filter(
      (question) =>
        (question.questionText && question.questionText.toLowerCase().includes(q)) ||
        (question.text && question.text.toLowerCase().includes(q)) ||
        (question.concepts && question.concepts.some((concept) => concept.toLowerCase().includes(q)))
    ).slice(0, 4);

    // Formulas
    const matchingFormulas: { formula: string; chapterName: string; chapterId: string }[] = [];
    for (const chap of JEE_CURRICULUM) {
      if (chap.formulaList) {
        for (const f of chap.formulaList) {
          if (f.toLowerCase().includes(q) && matchingFormulas.length < 4) {
            matchingFormulas.push({
              formula: f,
              chapterName: chap.name,
              chapterId: chap.id,
            });
          }
        }
      }
    }

    return {
      chapters: matchingChapters,
      questions: matchingQuestions,
      formulas: matchingFormulas,
    };
  }, [query]);

  if (!isOpen) return null;

  const totalResults =
    searchResults.chapters.length + searchResults.questions.length + searchResults.formulas.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-16 sm:pt-24 px-4 pb-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3.5 bg-slate-900/90">
          <Search className="h-5 w-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search all 71 chapters, formulas, or PYQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="py-8 text-center text-slate-500">
              <Search className="mx-auto h-8 w-8 mb-2 opacity-40 text-indigo-400" />
              <p className="text-xs font-semibold">Type a topic, formula, or concept to search instantly.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Rotational Motion', 'Thermodynamics', 'Electrochemistry', 'Conic Sections', 'Organic Reaction'].map(
                  (hint) => (
                    <button
                      key={hint}
                      onClick={() => setQuery(hint)}
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-300 hover:bg-slate-700 border border-slate-700/60"
                    >
                      {hint}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-10 text-center text-slate-500">
              <p className="text-xs">No direct matches found for "{query}".</p>
              <p className="text-[11px] text-slate-600 mt-1">Try searching by subject, chapter name, or formula variable.</p>
            </div>
          )}

          {/* Chapters Group */}
          {searchResults.chapters.length > 0 && (
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                <span>Chapters ({searchResults.chapters.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.chapters.map((chap) => (
                  <div
                    key={chap.id}
                    className="group flex items-center justify-between rounded-xl bg-slate-800/60 p-3 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[9px] font-extrabold text-indigo-400 uppercase">
                          {chap.subject}
                        </span>
                        <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {chap.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Class {chap.classLevel} • {chap.topics.length} Key Topics • {chap.unit}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/curriculum/cheatsheet?chapter=${chap.id}`}
                        onClick={onClose}
                        className="rounded-lg bg-indigo-600/30 px-2.5 py-1 text-[10px] font-bold text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all"
                      >
                        Cheatsheet
                      </Link>
                      <Link
                        href={`/practice?subject=${chap.subject}`}
                        onClick={onClose}
                        className="rounded-lg bg-slate-700 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-600 transition-colors"
                      >
                        Practice
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Formulas Group */}
          {searchResults.formulas.length > 0 && (
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-emerald-400" />
                <span>Formulas & Key Laws ({searchResults.formulas.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.formulas.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/curriculum/cheatsheet?chapter=${item.chapterId}`}
                    onClick={onClose}
                    className="block rounded-xl bg-slate-800/60 p-3 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                  >
                    <div className="text-xs font-mono font-semibold text-emerald-300">
                      {item.formula}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      From chapter: <span className="text-slate-300 font-medium">{item.chapterName}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Questions Group */}
          {searchResults.questions.length > 0 && (
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
                <span>Practice Questions ({searchResults.questions.length})</span>
              </div>
              <div className="space-y-1.5">
                {searchResults.questions.map((q) => (
                  <Link
                    key={q.id}
                    href={`/practice?subject=${q.subject}`}
                    onClick={onClose}
                    className="block rounded-xl bg-slate-800/60 p-3 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-extrabold text-amber-400 uppercase">
                        {q.subject}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {q.pyqYear ? `JEE Main ${q.pyqYear}` : 'Practice PYQ'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-200 line-clamp-2">
                      {q.questionText || q.text}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-slate-800 px-4 py-2.5 bg-slate-900/60 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search 71 chapters, formulas & authentic questions</span>
          <div className="flex gap-2">
            <span>Press <kbd className="rounded bg-slate-800 px-1 py-0.5 border border-slate-700">ESC</kbd> to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
