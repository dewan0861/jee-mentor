'use client';

import React from 'react';
import { Subject } from '@/types';

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  answers: Record<string, string | string[]>;
  visited: Record<string, boolean>;
  markedForReview: Record<string, boolean>;
  questionIds: string[];
  activeSubject?: Subject;
  onSelectQuestion: (index: number) => void;
  onSubmitTest?: () => void;
  sectionOffsets?: {
    physics: { start: number; end: number };
    chemistry: { start: number; end: number };
    mathematics: { start: number; end: number };
  };
  onSelectSubject?: (sub: Subject) => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  totalQuestions,
  currentIndex,
  answers,
  visited,
  markedForReview,
  questionIds,
  activeSubject = 'physics',
  onSelectQuestion,
  onSubmitTest,
  sectionOffsets,
  onSelectSubject,
}) => {
  // Determine question status
  const getStatus = (index: number) => {
    const qId = questionIds[index];
    const isAns = answers[qId] !== undefined && answers[qId] !== '';
    const isMarked = !!markedForReview[qId];
    const isVis = !!visited[qId] || index === currentIndex;

    if (isAns && isMarked) return 'ans_marked';
    if (isMarked) return 'marked';
    if (isAns) return 'answered';
    if (isVis) return 'not_answered';
    return 'not_visited';
  };

  // Status counts
  let counts = {
    answered: 0,
    not_answered: 0,
    not_visited: 0,
    marked: 0,
    ans_marked: 0,
  };

  questionIds.forEach((_, idx) => {
    const s = getStatus(idx);
    counts[s]++;
  });

  // Calculate filtered indices if sectionOffsets provided
  const visibleIndices: number[] = [];
  if (sectionOffsets && onSelectSubject) {
    const { start, end } = sectionOffsets[activeSubject];
    for (let i = start; i < end && i < totalQuestions; i++) {
      visibleIndices.push(i);
    }
  } else {
    for (let i = 0; i < totalQuestions; i++) {
      visibleIndices.push(i);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      {/* Subject Section Tabs (if full mock) */}
      {sectionOffsets && onSelectSubject && (
        <div className="mb-4 flex rounded-xl bg-slate-100 p-1">
          {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => {
            const isActive = activeSubject === sub;
            return (
              <button
                key={sub}
                onClick={() => onSelectSubject(sub)}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold capitalize transition-all ${
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

      {/* Palette Legend */}
      <div className="mb-4 grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-700 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500 font-bold text-white text-[10px]">
            {counts.answered}
          </span>
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-rose-500 font-bold text-white text-[10px]">
            {counts.not_answered}
          </span>
          <span>Not Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-200 font-bold text-slate-700 text-[10px]">
            {counts.not_visited}
          </span>
          <span>Not Visited</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-purple-600 font-bold text-white text-[10px]">
            {counts.marked}
          </span>
          <span>Marked Review</span>
        </div>
      </div>

      {/* Question Number Buttons Grid */}
      <div className="max-h-64 overflow-y-auto pr-1">
        <div className="grid grid-cols-5 gap-2">
          {visibleIndices.map((idx) => {
            const status = getStatus(idx);
            const isCurrent = idx === currentIndex;

            let bgClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
            if (status === 'answered') bgClass = 'bg-emerald-500 text-white shadow-xs';
            if (status === 'not_answered') bgClass = 'bg-rose-500 text-white shadow-xs';
            if (status === 'marked') bgClass = 'bg-purple-600 text-white shadow-xs';
            if (status === 'ans_marked')
              bgClass = 'bg-purple-600 text-white ring-2 ring-emerald-400 shadow-xs relative';

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectQuestion(idx)}
                className={`flex h-9 w-full items-center justify-center rounded-lg text-xs font-bold transition-all ${bgClass} ${
                  isCurrent ? 'ring-2 ring-slate-900 ring-offset-2' : ''
                }`}
              >
                {idx + 1}
                {status === 'ans_marked' && (
                  <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Final Submit Button */}
      {onSubmitTest && (
        <div className="mt-5 border-t border-slate-100 pt-4">
          <button
            onClick={onSubmitTest}
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-2.5 text-xs font-bold text-white shadow-sm hover:from-emerald-700 hover:to-teal-700 transition-all"
          >
            Submit Test
          </button>
        </div>
      )}
    </div>
  );
};
