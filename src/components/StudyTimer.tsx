'use client';

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Coffee, 
  Flame, 
  X, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

interface StudyTimerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyTimer: React.FC<StudyTimerProps> = ({ isOpen, onClose }) => {
  const FOCUS_TIME = 25 * 60; // 25 mins
  const BREAK_TIME = 5 * 60; // 5 mins

  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [completedBlocks, setCompletedBlocks] = useState(0);

  // Load completed blocks from localStorage for today
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const today = new Date().toISOString().slice(0, 10);
      const savedDate = localStorage.getItem('jee_study_blocks_date');
      if (savedDate === today) {
        setCompletedBlocks(parseInt(localStorage.getItem('jee_study_blocks_today') || '0', 10));
      } else {
        localStorage.setItem('jee_study_blocks_date', today);
        localStorage.setItem('jee_study_blocks_today', '0');
        setCompletedBlocks(0);
      }
    }
  }, [isOpen]);

  // Timer countdown loop
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      if (mode === 'focus') {
        // Completed a 25-min focus block!
        const newCount = completedBlocks + 1;
        setCompletedBlocks(newCount);
        if (typeof window !== 'undefined') {
          localStorage.setItem('jee_study_blocks_today', newCount.toString());
        }

        // Celebrate with confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {}

        // Beep chime via Web Audio API
        try {
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
          osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
          osc.start();
          osc.stop(ctx.currentTime + 0.6);
        } catch {}

        // Switch to break
        setMode('break');
        setTimeLeft(BREAK_TIME);
      } else {
        // Break finished, return to focus
        setMode('focus');
        setTimeLeft(FOCUS_TIME);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, mode, completedBlocks]);

  const handleToggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'focus' ? FOCUS_TIME : BREAK_TIME);
  };

  const handleSwitchMode = (newMode: 'focus' | 'break') => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(newMode === 'focus' ? FOCUS_TIME : BREAK_TIME);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const totalDuration = mode === 'focus' ? FOCUS_TIME : BREAK_TIME;
  const progressPercent = ((totalDuration - timeLeft) / totalDuration) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-5 sm:p-7 shadow-2xl text-center">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">JEE Focus Block Timer</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-6">
          <button
            onClick={() => handleSwitchMode('focus')}
            className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
              mode === 'focus'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚡ 25-Min Problem Focus
          </button>
          <button
            onClick={() => handleSwitchMode('break')}
            className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
              mode === 'break'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ☕ 5-Min Rest
          </button>
        </div>

        {/* Circular / Big Timer Display */}
        <div className="relative mx-auto my-4 flex h-48 w-48 flex-col items-center justify-center rounded-full border-8 border-slate-100 bg-gradient-to-tr from-slate-50 to-indigo-50/40 shadow-inner">
          <span className="font-mono text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {timeFormatted}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mt-1">
            {mode === 'focus' ? 'Deep Study Session' : 'Relax & Hydrate'}
          </span>

          {/* Progress ring indicator */}
          <div
            className="absolute inset-0 rounded-full border-8 border-indigo-600 transition-all pointer-events-none"
            style={{
              clipPath: `polygon(50% 50%, -50% -50%, ${progressPercent * 3.6}% -50%, 150% 150%)`,
              opacity: progressPercent > 0 ? 0.3 : 0,
            }}
          />
        </div>

        {/* Action Controls */}
        <div className="my-6 flex items-center justify-center gap-3">
          <button
            onClick={handleToggleTimer}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3 text-xs font-extrabold text-white shadow-md transition-all ${
              isRunning
                ? 'bg-amber-600 hover:bg-amber-700'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isRunning ? 'Pause' : 'Start Focus Block'}</span>
          </button>

          <button
            onClick={handleResetTimer}
            className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs"
            title="Reset Timer"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        {/* Daily Tally Card */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3.5 text-xs text-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="font-bold">Today&apos;s Focus Blocks:</span>
          </div>
          <span className="font-extrabold text-indigo-600">
            {completedBlocks} completed ({completedBlocks * 25} mins)
          </span>
        </div>

        <p className="mt-4 text-[10.5px] text-slate-400">
          IIT rankers study in 25-minute bursts to keep their brain fresh and eliminate distractions.
        </p>
      </div>
    </div>
  );
};
