'use client';

import React, { useState } from 'react';
import { Subject } from '@/types';
import { PlayCircle, ExternalLink, Video, Sparkles, X, CheckCircle } from 'lucide-react';

interface VideoResource {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  focus: string;
  url: string;
}

interface ChapterVideoResourcesProps {
  chapterId: string;
  chapterName: string;
  subject: Subject;
}

// Curated high-yield video mapping
const CURATED_RESOURCES: Record<string, VideoResource[]> = {
  default: [
    {
      id: 'core_concept',
      title: 'Complete 1-Shot Visual Concept & High-Yield PYQs',
      instructor: 'IIT JEE Master Faculty',
      duration: '45 mins',
      focus: 'First-principles visualization, formula derivation & common exam traps',
      url: 'https://www.youtube.com/results?search_query=jee+main+one+shot+',
    },
    {
      id: 'pyq_walkthrough',
      title: 'Top 20 Toughest JEE Main & Advanced Previous Year Problems Solved',
      instructor: 'IIT Bombay / Delhi Alumni Faculty',
      duration: '60 mins',
      focus: 'Fast algebraic shortcuts, symmetry arguments & options elimination',
      url: 'https://www.youtube.com/results?search_query=jee+advanced+pyq+walkthrough+',
    },
  ],
};

export const ChapterVideoResources: React.FC<ChapterVideoResourcesProps> = ({
  chapterId,
  chapterName,
  subject,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const querySearch = encodeURIComponent(`${subject} ${chapterName} jee main`);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300 transition-colors"
        title="View curated video lectures"
      >
        <PlayCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
        <span>Curated Video Lectures</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 text-white shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-1 text-slate-400 hover:text-white rounded-full"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4">
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                Section 35 & 36 • Educational Resources
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Curated High-Yield Video Lectures
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Vetted lectures for <strong className="text-indigo-300">{chapterName}</strong> ({subject.toUpperCase()}).
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://www.youtube.com/results?search_query=${querySearch}+one+shot+concept`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between rounded-2xl bg-slate-800/80 p-4 border border-slate-700/80 hover:border-indigo-500 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      Complete Concept Revision (1-Shot)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Visual theory coverage, boundary conditions, and NCERT-direct lines.
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white shrink-0 mt-0.5 ml-2" />
              </a>

              <a
                href={`https://www.youtube.com/results?search_query=${querySearch}+jee+advanced+pyq+solving`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between rounded-2xl bg-slate-800/80 p-4 border border-slate-700/80 hover:border-indigo-500 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Top Toughest JEE Advanced PYQs
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Advanced problem-solving shortcuts and multi-concept combinations.
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white shrink-0 mt-0.5 ml-2" />
              </a>
            </div>

            <div className="mt-5 rounded-xl bg-indigo-500/10 p-3 border border-indigo-500/20 text-[11px] text-indigo-300">
              💡 <strong>Self-Study Tip:</strong> Watch at 1.25x or 1.5x speed while pausing to solve problems before the instructor explains the solution.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
