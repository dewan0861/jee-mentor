'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { Subject, Chapter } from '@/types';
import { MathRenderer } from '@/components/MathRenderer';
import { 
  BookOpen, 
  ChevronRight, 
  Sparkles, 
  Target, 
  Zap, 
  AlertTriangle, 
  Bookmark, 
  CheckCircle2, 
  Clock,
  Layers,
  ArrowRight,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  X,
  FileText,
  ListFilter,
  Printer
} from 'lucide-react';
import Link from 'next/link';

function CurriculumContent() {
  const searchParams = useSearchParams();
  const initialChapterId = searchParams.get('chapter');
  const initialSub = searchParams.get('sub') as Subject | null;

  const [selectedSubject, setSelectedSubject] = useState<Subject>(initialSub || 'physics');
  const [selectedClass, setSelectedClass] = useState<11 | 12 | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [activeTab, setActiveTab] = useState<'topics' | 'formulas' | 'traps' | 'ncert'>('topics');
  const [formulaPage, setFormulaPage] = useState(1);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const FORMULAS_PER_PAGE = 6;

  // Filter chapters based on subject, class, and search query
  const filteredChapters = useMemo(() => {
    return JEE_CURRICULUM.filter((chap) => {
      if (chap.subject !== selectedSubject) return false;
      if (selectedClass !== 'all' && chap.classLevel !== selectedClass) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = chap.name.toLowerCase().includes(q);
        const matchesUnit = chap.unit.toLowerCase().includes(q);
        const matchesTopic = chap.topics.some((t) => t.name.toLowerCase().includes(q));
        if (!matchesName && !matchesUnit && !matchesTopic) return false;
      }
      return true;
    });
  }, [selectedSubject, selectedClass, searchQuery]);

  // Initialize or update active chapter
  useEffect(() => {
    if (initialChapterId) {
      const found = JEE_CURRICULUM.find((c) => c.id === initialChapterId);
      if (found) {
        setSelectedSubject(found.subject);
        setSelectedClass(found.classLevel);
        setActiveChapter(found);
        return;
      }
    }

    if (filteredChapters.length > 0) {
      // Keep active chapter if it's still in filtered list, else choose first
      const stillThere = filteredChapters.find((c) => c.id === activeChapter?.id);
      if (!stillThere) {
        setActiveChapter(filteredChapters[0]);
      }
    } else {
      setActiveChapter(null);
    }
  }, [selectedSubject, selectedClass, initialChapterId, filteredChapters]);

  // Reset formula page on chapter switch
  useEffect(() => {
    setFormulaPage(1);
  }, [activeChapter?.id]);

  // Chapter index calculation for steppers
  const currentChapterIndex = useMemo(() => {
    if (!activeChapter) return -1;
    return filteredChapters.findIndex((c) => c.id === activeChapter.id);
  }, [activeChapter, filteredChapters]);

  const prevChapter = currentChapterIndex > 0 ? filteredChapters[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex >= 0 && currentChapterIndex < filteredChapters.length - 1
      ? filteredChapters[currentChapterIndex + 1]
      : null;

  const subjectMeta = {
    physics: {
      name: 'Physics',
      activeTab: 'bg-sky-600 text-white shadow-sm',
      badge: 'bg-sky-50 text-sky-700 border-sky-200',
      pill: 'text-sky-700 bg-sky-100',
    },
    chemistry: {
      name: 'Chemistry',
      activeTab: 'bg-emerald-600 text-white shadow-sm',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pill: 'text-emerald-700 bg-emerald-100',
    },
    mathematics: {
      name: 'Mathematics',
      activeTab: 'bg-violet-600 text-white shadow-sm',
      badge: 'bg-violet-50 text-violet-700 border-violet-200',
      pill: 'text-violet-700 bg-violet-100',
    },
  };

  // Paginated formulas
  const totalFormulaPages = activeChapter
    ? Math.ceil(activeChapter.formulaList.length / FORMULAS_PER_PAGE)
    : 1;
  const currentFormulas = activeChapter
    ? activeChapter.formulaList.slice(
        (formulaPage - 1) * FORMULAS_PER_PAGE,
        formulaPage * FORMULAS_PER_PAGE
      )
    : [];

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
          <BookOpen className="h-4 w-4" />
          <span>NTA JEE 2027 Official Syllabus & Theory Vault</span>
        </div>
        <h1 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
          Complete Physics, Chemistry & Mathematics Syllabus
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl">
          Complete Class 11 & Class 12 curriculum strictly aligned with the rationalized NTA syllabus. 
          Every chapter features micro-topic breakdown, formula vaults, common traps, and NCERT pointers.
        </p>
      </div>

      {/* Control Bar: Subject Switcher, Class Filter & Search */}
      <div className="mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Subject Pills */}
        <div className="flex rounded-xl bg-slate-200/80 p-1">
          {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => (
            <button
              key={sub}
              onClick={() => {
                setSelectedSubject(sub);
                const firstInSub = JEE_CURRICULUM.find((c) => c.subject === sub);
                if (firstInSub) setActiveChapter(firstInSub);
              }}
              className={`flex-1 md:flex-initial rounded-lg px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold capitalize transition-all ${
                selectedSubject === sub
                  ? subjectMeta[sub].activeTab
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Search & Class Selector */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters or topics..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-8 pr-3 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Class Switcher */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-700">
            {(['all', 11, 12] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`rounded-lg px-2.5 py-1.5 transition-all ${
                  selectedClass === cls
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                {cls === 'all' ? 'All Classes' : `Class ${cls}`}
              </button>
            ))}
          </div>

          {/* Mobile Chapter Drawer Toggle */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700 lg:hidden shadow-xs hover:bg-indigo-100"
          >
            <ListFilter className="h-4 w-4" />
            <span>Chapters ({filteredChapters.length})</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Chapter Navigator & Deep Dive Compendium */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Desktop Left Sidebar: Chapters List with search count & compact height */}
        <div className="hidden lg:block lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {selectedSubject.toUpperCase()} Chapters ({filteredChapters.length})
            </h2>
            <span className="text-[11px] font-semibold text-slate-400">Class 11 & 12</span>
          </div>

          <div className="max-h-[calc(100vh-220px)] overflow-y-auto space-y-2 pr-1.5">
            {filteredChapters.map((chap, idx) => {
              const isSelected = activeChapter?.id === chap.id;
              return (
                <div
                  key={chap.id}
                  onClick={() => setActiveChapter(chap)}
                  className={`group cursor-pointer rounded-2xl border p-3.5 transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/60 shadow-sm ring-1 ring-indigo-500'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="rounded bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-600">
                          {idx + 1}
                        </span>
                        <span className="rounded bg-slate-100 px-1.5 py-0.2 text-[10px] font-bold text-slate-600">
                          Class {chap.classLevel}
                        </span>
                        {chap.weightage === 'high' && (
                          <span className="flex items-center gap-0.5 text-[9px] font-extrabold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                            <Zap className="h-2.5 w-2.5 fill-amber-500 text-amber-500" /> High Yield
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                        {chap.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] text-slate-500 truncate">
                        {chap.topics.length} Micro-Topics • {chap.formulaList.length} Formulas
                      </p>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isSelected ? 'rotate-90 text-indigo-600' : 'text-slate-400 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Chapter Drawer Modal */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-xs lg:hidden p-4">
            <div className="mt-auto max-h-[85vh] w-full rounded-3xl bg-white p-5 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Select JEE Chapter</h3>
                  <p className="text-[11px] text-slate-500">{filteredChapters.length} chapters available</p>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto space-y-2 flex-1 pr-1">
                {filteredChapters.map((chap, idx) => {
                  const isSelected = activeChapter?.id === chap.id;
                  return (
                    <div
                      key={chap.id}
                      onClick={() => {
                        setActiveChapter(chap);
                        setMobileDrawerOpen(false);
                      }}
                      className={`cursor-pointer rounded-xl border p-3 transition-all ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50 font-bold text-indigo-700'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">
                          {idx + 1}. {chap.name} (Class {chap.classLevel})
                        </span>
                        {chap.weightage === 'high' && (
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded">
                            High Yield
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Right Main Column: Active Chapter Deep Dive Compendium */}
        <div className="lg:col-span-8">
          {activeChapter ? (
            <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs">
              {/* Sticky / Sleek Chapter Top Bar with Stepper Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      {activeChapter.subject}
                    </span>
                    <span className="text-xs font-bold text-indigo-600">
                      Class {activeChapter.classLevel} • {activeChapter.unit}
                    </span>
                    {activeChapter.weightage === 'high' && (
                      <span className="flex items-center gap-0.5 text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Zap className="h-3 w-3 fill-amber-500 text-amber-500" /> High Weightage
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {activeChapter.name}
                  </h2>
                </div>

                {/* Practice & Cheatsheet Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/curriculum/cheatsheet?chapter=${activeChapter.id}`}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 sm:px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
                    title="Open printable A4 revision formula sheet"
                  >
                    <Printer className="h-4 w-4 text-slate-500" />
                    <span className="hidden sm:inline">Print Cheatsheet</span>
                  </Link>

                  <Link
                    href={`/practice?chapter=${activeChapter.id}`}
                    className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 sm:px-4 py-2.5 text-xs font-extrabold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                  >
                    <Target className="h-4 w-4" />
                    <span>Practice Drill</span>
                  </Link>
                </div>
              </div>

              {/* Chapter Strategy Overview Box */}
              {activeChapter.guide?.overview && (
                <div className="my-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Exam Blueprint: </span>
                  {activeChapter.guide.overview}
                </div>
              )}

              {/* Responsive Compendium Navigation Tabs */}
              <div className="flex items-center gap-3 sm:gap-6 border-b border-slate-200 text-xs font-bold text-slate-600 mt-5 mb-5 overflow-x-auto no-scrollbar pb-1">
                {[
                  { id: 'topics', label: `Topics (${activeChapter.topics.length})`, icon: Layers },
                  { id: 'formulas', label: `Formula Vault (${activeChapter.formulaList.length})`, icon: Sparkles },
                  { id: 'traps', label: 'Common Exam Traps', icon: AlertTriangle },
                  { id: 'ncert', label: 'NCERT Pointers', icon: Bookmark },
                ].map((t) => {
                  const Icon = t.icon;
                  const isCurrent = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as any)}
                      className={`flex items-center gap-1.5 border-b-2 pb-2.5 transition-colors whitespace-nowrap ${
                        isCurrent
                          ? 'border-indigo-600 text-indigo-600 font-extrabold'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: Micro Topics Breakdown */}
              {activeTab === 'topics' && (
                <div className="space-y-3">
                  {activeChapter.topics.map((t, idx) => (
                    <div
                      key={t.id}
                      className="rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 hover:border-indigo-200 transition-all shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[10px] font-bold text-indigo-700">
                              {idx + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{t.name}</h4>
                            {t.isHighWeightage && (
                              <span className="rounded-full bg-rose-50 px-2 py-0.2 text-[9px] font-bold text-rose-600 border border-rose-200">
                                High Probability
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs text-slate-500 pl-7">{t.description}</p>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 shrink-0">
                          <Clock className="h-3 w-3" />
                          <span>~{t.estimatedHours}h</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: Paginated Formula Vault */}
              {activeTab === 'formulas' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                    <span>
                      Showing formulas {(formulaPage - 1) * FORMULAS_PER_PAGE + 1} -{' '}
                      {Math.min(formulaPage * FORMULAS_PER_PAGE, activeChapter.formulaList.length)} of{' '}
                      {activeChapter.formulaList.length}
                    </span>
                    {totalFormulaPages > 1 && (
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setFormulaPage((p) => Math.max(1, p - 1))}
                          disabled={formulaPage === 1}
                          className="rounded-lg border border-slate-200 px-2 py-1 font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30"
                        >
                          Prev
                        </button>
                        <span className="font-bold text-slate-800">
                          {formulaPage} / {totalFormulaPages}
                        </span>
                        <button
                          onClick={() => setFormulaPage((p) => Math.min(totalFormulaPages, p + 1))}
                          disabled={formulaPage === totalFormulaPages}
                          className="rounded-lg border border-slate-200 px-2 py-1 font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {currentFormulas.map((formula, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/30 to-violet-50/20 p-4 text-center shadow-2xs overflow-x-auto"
                      >
                        <MathRenderer content={`$$${formula}$$`} />
                      </div>
                    ))}
                  </div>

                  {/* Formula Page Stepper Footer */}
                  {totalFormulaPages > 1 && (
                    <div className="flex justify-center items-center gap-1 pt-2">
                      {Array.from({ length: totalFormulaPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setFormulaPage(i + 1)}
                          className={`h-7 w-7 rounded-lg text-xs font-bold transition-all ${
                            formulaPage === i + 1
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Common Exam Traps */}
              {activeTab === 'traps' && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      Frequent Student Pitfalls in {activeChapter.name}:
                    </h4>
                    <ul className="space-y-2.5">
                      {activeChapter.guide?.commonTraps.map((trap, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-950 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{trap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeChapter.guide?.shortcutsVsConcepts && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4 text-emerald-600" />
                        Top Ranker Speed Shortcuts:
                      </h4>
                      <ul className="space-y-2.5">
                        {activeChapter.guide.shortcutsVsConcepts.map((sc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            <span>{sc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: NCERT Highlights */}
              {activeTab === 'ncert' && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                    <Bookmark className="h-4 w-4 text-indigo-600" />
                    NCERT Direct Exam Pointers:
                  </h4>
                  <ul className="space-y-3">
                    {activeChapter.guide?.ncertPointers.map((pointer, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{pointer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PAGE-WISE STEPPER: Previous Chapter / Next Chapter Navigation */}
              <div className="mt-8 border-t border-slate-100 pt-5 flex items-center justify-between gap-3">
                {prevChapter ? (
                  <button
                    onClick={() => setActiveChapter(prevChapter)}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors text-left"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0 text-slate-500" />
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Previous</span>
                      <span className="hidden sm:inline font-bold text-slate-900 truncate max-w-[140px] block">
                        {prevChapter.name}
                      </span>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                <div className="text-center text-[11px] font-semibold text-slate-400">
                  Chapter {currentChapterIndex + 1} of {filteredChapters.length}
                </div>

                {nextChapter ? (
                  <button
                    onClick={() => setActiveChapter(nextChapter)}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors text-right"
                  >
                    <div>
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase">Next Chapter</span>
                      <span className="hidden sm:inline font-bold text-slate-900 truncate max-w-[140px] block">
                        {nextChapter.name}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-500" />
                  </button>
                ) : (
                  <div />
                )}
              </div>

              {/* Bottom Quick Test Launch Banner */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold">Ready to solve authentic PYQs on {activeChapter.name}?</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Launch a curated practice drill containing verified 2024-2025 JEE questions.
                  </p>
                </div>
                <Link
                  href={`/practice?chapter=${activeChapter.id}`}
                  className="rounded-xl bg-white px-4 py-2 text-xs font-extrabold text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
                >
                  Start Chapter Test
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex h-96 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
              <BookOpen className="h-12 w-12 text-slate-300 mb-3" />
              <h3 className="text-lg font-bold text-slate-800">Select a Chapter to View Comprehensive Guide</h3>
              <p className="mt-1 text-xs text-slate-500 max-w-sm">
                Explore micro-topics, formula vaults, common traps, and NCERT exam points.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CurriculumPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
        </div>
      }
    >
      <CurriculumContent />
    </Suspense>
  );
}
