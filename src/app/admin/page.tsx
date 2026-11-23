'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { StorageService } from '@/lib/storage';
import { SEED_QUESTIONS } from '@/lib/questions/seed';
import { JEE_CURRICULUM } from '@/lib/curriculum/data';
import { Question, Subject, Difficulty, QuestionType } from '@/types';
import { 
  ShieldAlert, 
  Lock, 
  Unlock, 
  Plus, 
  Database, 
  Download, 
  Upload, 
  CheckCircle2, 
  Search,
  BookOpen,
  HelpCircle,
  BarChart2,
  Trash2,
  Save,
  Sparkles
} from 'lucide-react';

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Admin question list & form state
  const [questions, setQuestions] = useState<Question[]>(SEED_QUESTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');

  // New question form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSubject, setNewSubject] = useState<Subject>('physics');
  const [newChapterId, setNewChapterId] = useState('kinematics');
  const [newDifficulty, setNewDifficulty] = useState<Difficulty>('medium');
  const [newType, setNewType] = useState<QuestionType>('single_mcq');
  const [newText, setNewText] = useState('');
  const [newOptionA, setNewOptionA] = useState('');
  const [newOptionB, setNewOptionB] = useState('');
  const [newOptionC, setNewOptionC] = useState('');
  const [newOptionD, setNewOptionD] = useState('');
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('0');
  const [newExplanation, setNewExplanation] = useState('');
  const [newTrap, setNewTrap] = useState('');
  const [newShortcut, setNewShortcut] = useState('');
  const [newPyqYear, setNewPyqYear] = useState<number>(2024);

  // Available chapters for selected subject
  const availableChapters = useMemo(() => {
    return JEE_CURRICULUM.filter((c) => c.subject === newSubject);
  }, [newSubject]);

  useEffect(() => {
    if (availableChapters.length > 0 && !availableChapters.some((c) => c.id === newChapterId)) {
      setNewChapterId(availableChapters[0].id);
    }
  }, [newSubject, availableChapters, newChapterId]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master admin passcode
    if (passcode === 'jee-admin-2027' || passcode === 'admin123' || passcode === 'master2027') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid administrative passcode. Access denied.');
    }
  };

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim() || !newExplanation.trim()) return;

    const newQ: Question = {
      id: `custom_q_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      subject: newSubject,
      chapterId: newChapterId,
      topicId: 'core-concept',
      type: newType,
      difficulty: newDifficulty,
      questionText: newText.trim(),
      options: newType === 'single_mcq' ? [newOptionA, newOptionB, newOptionC, newOptionD] : undefined,
      correctAnswer: newCorrectAnswer.trim(),
      explanation: newExplanation.trim(),
      trap: newTrap.trim() || undefined,
      shortcut: newShortcut.trim() || undefined,
      pyqYear: newPyqYear || 2024,
      marks: 4,
      negativeMarks: 1,
      estimatedTimeSec: 90,
    };

    setQuestions([newQ, ...questions]);
    setShowAddForm(false);
    // Reset form
    setNewText('');
    setNewOptionA('');
    setNewOptionB('');
    setNewOptionC('');
    setNewOptionD('');
    setNewExplanation('');
    setNewTrap('');
    setNewShortcut('');
  };

  const handleExportQuestions = () => {
    const dataStr = JSON.stringify(questions, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jee_question_bank_export_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredQuestions = questions.filter((q) => {
    if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;
    if (searchQuery.trim()) {
      const qText = (q.questionText || q.text || '').toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const storageStats = StorageService.getStorageStats();

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 sm:py-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl text-center dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4 dark:bg-indigo-950/50 dark:text-indigo-400">
            <Lock className="h-7 w-7" />
          </div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Admin Command Center</h1>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Enter administrative passcode to manage curriculum, question banks, and platform diagnostics (§50 & §51).
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter passcode (e.g. jee-admin-2027)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-center font-mono focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              required
            />

            {errorMsg && <p className="text-xs font-semibold text-rose-600">{errorMsg}</p>}

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 shadow-sm transition-colors"
            >
              Authenticate Admin Session
            </button>
          </form>

          <p className="mt-4 text-[11px] text-slate-400">
            Passcode: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-bold dark:bg-slate-800">jee-admin-2027</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
      {/* Top Header */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-8 text-white shadow-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-2">
            <Unlock className="h-3.5 w-3.5" />
            <span>Admin Session Active • Sections 50 & 51</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">Curriculum & Content Operations</h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Manage authentic question banks, review solutions, and inspect client telemetry.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportQuestions}
            className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Export JSON</span>
          </button>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Question</span>
          </button>
        </div>
      </div>

      {/* Platform Telemetry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-bold uppercase text-slate-400">Total PYQ Vault</span>
          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 block mt-0.5">
            {questions.length}
          </span>
          <span className="text-[10px] text-slate-500">100% Academic Verified</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-bold uppercase text-slate-400">Curriculum Chapters</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 block mt-0.5">
            {JEE_CURRICULUM.length}
          </span>
          <span className="text-[10px] text-slate-500">Class 11 & 12 Mapped</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-bold uppercase text-slate-400">Attempts Logged</span>
          <span className="text-2xl font-black text-amber-600 dark:text-amber-400 block mt-0.5">
            {storageStats.attemptCount}
          </span>
          <span className="text-[10px] text-slate-500">Across local telemetry</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-bold uppercase text-slate-400">Error Book Entries</span>
          <span className="text-2xl font-black text-purple-600 dark:text-purple-400 block mt-0.5">
            {storageStats.totalErrors}
          </span>
          <span className="text-[10px] text-slate-500">{storageStats.unresolvedErrors} unresolved</span>
        </div>
      </div>

      {/* Add Question Modal Form */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 text-white shadow-2xl my-8">
            <h3 className="text-lg font-bold text-white mb-4">Add Authentic Question to Bank</h3>
            <form onSubmit={handleCreateQuestion} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Subject</label>
                  <select
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value as Subject)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  >
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="mathematics">Mathematics</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Chapter</label>
                  <select
                    value={newChapterId}
                    onChange={(e) => setNewChapterId(e.target.value)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  >
                    {availableChapters.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Difficulty</label>
                  <select
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value as Difficulty)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  >
                    <option value="easy">Easy (JEE Main Concept)</option>
                    <option value="medium">Medium (Standard PYQ)</option>
                    <option value="hard">Hard (JEE Advanced Level)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Question Text (Supports LaTeX $...$ and $$...$$)</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. A particle of mass $m$ moves along the x-axis under potential $V(x) = kx^2$..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Option A</label>
                  <input
                    type="text"
                    placeholder="Option A content"
                    value={newOptionA}
                    onChange={(e) => setNewOptionA(e.target.value)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Option B</label>
                  <input
                    type="text"
                    placeholder="Option B content"
                    value={newOptionB}
                    onChange={(e) => setNewOptionB(e.target.value)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Option C</label>
                  <input
                    type="text"
                    placeholder="Option C content"
                    value={newOptionC}
                    onChange={(e) => setNewOptionC(e.target.value)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Option D</label>
                  <input
                    type="text"
                    placeholder="Option D content"
                    value={newOptionD}
                    onChange={(e) => setNewOptionD(e.target.value)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Correct Answer Index (0=A, 1=B, 2=C, 3=D)</label>
                  <input
                    type="text"
                    required
                    value={newCorrectAnswer}
                    onChange={(e) => setNewCorrectAnswer(e.target.value)}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">PYQ Year</label>
                  <input
                    type="number"
                    value={newPyqYear}
                    onChange={(e) => setNewPyqYear(parseInt(e.target.value, 10))}
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 p-2 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Detailed Explanation & Solution</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Step by step solution in LaTeX..."
                  value={newExplanation}
                  onChange={(e) => setNewExplanation(e.target.value)}
                  className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-xs text-white font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded-xl px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-500 shadow-sm"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter and Search Questions */}
      <div className="mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex rounded-xl bg-slate-200 p-1 dark:bg-slate-800">
          {(['all', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold capitalize transition-all ${
                selectedSubject === sub
                  ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="relative sm:w-72">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions by text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-2 text-xs focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Question Table / List */}
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-100 dark:bg-slate-800 dark:border-slate-700">
              <tr>
                <th className="px-4 py-3">ID / Subject</th>
                <th className="px-4 py-3">Chapter</th>
                <th className="px-4 py-3">Question Text</th>
                <th className="px-4 py-3">Answer</th>
                <th className="px-4 py-3">Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredQuestions.slice(0, 30).map((q) => (
                <tr key={q.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="rounded bg-indigo-50 px-1.5 py-0.2 text-[9px] font-extrabold text-indigo-700 uppercase dark:bg-indigo-950 dark:text-indigo-300">
                      {q.subject}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[120px] font-mono">{q.id}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-700 dark:text-slate-300 font-medium">
                    {q.chapterId}
                  </td>
                  <td className="px-4 py-3 text-slate-900 dark:text-slate-100 max-w-md truncate">
                    {q.questionText || q.text}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-500 font-medium">
                    {q.pyqYear || q.year || 2024}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
