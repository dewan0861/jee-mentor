'use client';

import React, { useState, useEffect } from 'react';
import { StorageService } from '@/lib/storage';
import { BookmarkItem, Subject } from '@/types';
import { SEED_QUESTIONS } from '@/lib/questions/seed';
import { 
  Bookmark, 
  Trash2, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { MathRenderer } from '@/components/MathRenderer';

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'question' | 'formula' | 'concept'>('all');
  const [filterSubject, setFilterSubject] = useState<Subject | 'all'>('all');

  useEffect(() => {
    setBookmarks(StorageService.getBookmarks());
  }, []);

  const handleRemove = (itemId: string) => {
    StorageService.removeBookmark(itemId);
    setBookmarks(StorageService.getBookmarks());
  };

  const filteredBookmarks = bookmarks.filter((b) => {
    if (filterType !== 'all' && b.itemType !== filterType) return false;
    if (filterSubject !== 'all' && b.subject !== filterSubject) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Header */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/10 mb-2">
              <Bookmark className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              <span>Personal Knowledge Vault • Section 28</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Saved Bookmarks & Collections
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Quickly revisit high-yield questions, tricky formulas, and AI Socratic explanations you flagged for intense revision.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md border border-white/15 md:w-40">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">{bookmarks.length}</span>
            <span className="block text-[11px] font-bold text-slate-300 mt-0.5">Total Saved Items</span>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        {/* Type Filter */}
        <div className="flex flex-wrap rounded-xl bg-slate-200 p-1 dark:bg-slate-800">
          {(['all', 'question', 'formula', 'concept'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold capitalize transition-all ${
                filterType === type
                  ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              {type === 'all' ? 'All Items' : `${type}s`}
            </button>
          ))}
        </div>

        {/* Subject Filter */}
        <div className="flex rounded-xl bg-slate-200 p-1 dark:bg-slate-800">
          {(['all', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => setFilterSubject(sub)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize transition-all ${
                filterSubject === sub
                  ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              {sub === 'all' ? 'All Subjects' : sub}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarks Grid / List */}
      {filteredBookmarks.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
          <Bookmark className="mx-auto h-12 w-12 text-slate-400 mb-3" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No bookmarks found
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Click the star or bookmark icon while practicing questions or viewing chapter formula cheatsheets to save them here for quick revision.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              href="/practice"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 shadow-sm"
            >
              Practice PYQs
            </Link>
            <Link
              href="/curriculum"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              View Cheatsheets
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBookmarks.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between hover:border-indigo-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-extrabold uppercase text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                      {b.subject}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400 capitalize">
                      {b.itemType}
                    </span>
                  </div>

                  <button
                    onClick={() => handleRemove(b.itemId)}
                    className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-2">
                  {b.title}
                </h3>

                {b.data && b.data.formula && (
                  <div className="rounded-xl bg-slate-50 p-3 my-2 dark:bg-slate-800/60 overflow-x-auto text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    <MathRenderer content={b.data.formula} />
                  </div>
                )}

                {b.data && b.data.questionText && (
                  <div className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 my-2">
                    <MathRenderer content={b.data.questionText} />
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">
                  Saved on {new Date(b.savedAt).toLocaleDateString()}
                </span>

                {b.itemType === 'question' && (
                  <Link
                    href={`/practice?subject=${b.subject}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    <span>Practice Question</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}

                {b.itemType === 'formula' && b.chapterId && (
                  <Link
                    href={`/curriculum/cheatsheet?chapter=${b.chapterId}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    <span>Open Cheatsheet</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
