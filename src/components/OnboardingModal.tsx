'use client';

import React, { useState, useEffect } from 'react';
import { StorageService } from '@/lib/storage';
import { UserProfile, Subject } from '@/types';
import { 
  Sparkles, 
  Target, 
  GraduationCap, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Compass,
  Zap,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (profile: UserProfile) => void;
}

export default function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [classLevel, setClassLevel] = useState<11 | 12 | 'dropper'>(12);
  const [targetYear, setTargetYear] = useState<number>(2027);
  const [targetExam, setTargetExam] = useState<'jee_main' | 'jee_advanced'>('jee_main');
  const [preparationLevel, setPreparationLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [targetRank, setTargetRank] = useState('Top 1,000 AIR (99.5%ile)');
  const [dailyStudyHours, setDailyStudyHours] = useState(4);
  const [weakSubjects, setWeakSubjects] = useState<Subject[]>(['physics']);

  useEffect(() => {
    if (isOpen) {
      const profile = StorageService.getUserProfile();
      if (profile.name) setName(profile.name);
      setClassLevel(profile.classLevel || 12);
      setTargetYear(profile.targetYear || 2027);
      setTargetExam(profile.targetExam || 'jee_main');
      setPreparationLevel(profile.preparationLevel || 'intermediate');
      setTargetRank(profile.targetRank || 'Top 1,000 AIR (99.5%ile)');
      setDailyStudyHours(profile.dailyStudyHours || 4);
      setWeakSubjects(profile.weakSubjects || ['physics']);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleWeakSubject = (sub: Subject) => {
    if (weakSubjects.includes(sub)) {
      if (weakSubjects.length > 1) {
        setWeakSubjects(weakSubjects.filter((s) => s !== sub));
      }
    } else {
      setWeakSubjects([...weakSubjects, sub]);
    }
  };

  const handleFinish = () => {
    const updated = StorageService.saveUserProfile({
      name: name.trim() || undefined,
      classLevel,
      targetYear,
      targetExam,
      preparationLevel,
      targetRank,
      dailyStudyHours,
      weakSubjects,
      isOnboarded: true,
    });

    // Reward with +50 XP for completing onboarding profile
    StorageService.addXP(50);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    if (onComplete) onComplete(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Step {step} of 3 • Personalized JEE Profile</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {step === 1 && 'Set Your JEE Target & Academic Year'}
            {step === 2 && 'Define Your Target Rank & Study Pace'}
            {step === 3 && 'Pinpoint Your Focus & Weak Areas'}
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            {step === 1 && 'We will tailor chapter weightage and formulas to your exact exam timeline.'}
            {step === 2 && 'We will calibrate question difficulty and your daily study planner tasks.'}
            {step === 3 && 'Your AI mentor will prioritize Socratic hints and review intervals for these topics.'}
          </p>

          {/* Progress bar */}
          <div className="mt-4 flex gap-1.5">
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 1 ? 'bg-indigo-500' : 'bg-slate-800'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 2 ? 'bg-indigo-500' : 'bg-slate-800'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 3 ? 'bg-indigo-500' : 'bg-slate-800'}`} />
          </div>
        </div>

        {/* Step 1: Target Year & Class */}
        {step === 1 && (
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Your Name / Nickname (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Diya / Aryan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-slate-800/80 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Target Exam Year
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[2027, 2026, 2025].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTargetYear(yr)}
                    className={`rounded-xl p-3 text-center border font-bold text-sm transition-all ${
                      targetYear === yr
                        ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>JEE {yr}</span>
                    {yr === 2027 && (
                      <span className="block text-[10px] text-indigo-400 font-normal mt-0.5">Recommended</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Current Academic Stage
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 11, label: 'Class 11th', desc: 'Starting strong' },
                  { id: 12, label: 'Class 12th', desc: 'Boards + JEE' },
                  { id: 'dropper', label: 'Dropper / Repeater', desc: '100% Focused' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setClassLevel(item.id as any)}
                    className={`rounded-xl p-3 text-left border transition-all ${
                      classLevel === item.id
                        ? 'bg-indigo-600/30 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Rank & Level */}
        {step === 2 && (
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Preparation Goal
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'jee_main', label: 'JEE Main Focus', desc: 'Top NITs & IIITs' },
                  { id: 'jee_advanced', label: 'JEE Advanced Focus', desc: 'Top IITs Seat' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTargetExam(item.id as any)}
                    className={`rounded-xl p-3 text-left border transition-all ${
                      targetExam === item.id
                        ? 'bg-indigo-600/30 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Target Score / Percentile Bracket
              </label>
              <div className="space-y-2">
                {[
                  'Top 500 AIR (99.85%+ ile)',
                  'Top 1,000 AIR (99.50% ile)',
                  'Top 5,000 AIR (98.00% ile)',
                  'NIT/IIIT CSE Confirmed (97.00% ile)',
                ].map((rank) => (
                  <button
                    key={rank}
                    type="button"
                    onClick={() => setTargetRank(rank)}
                    className={`w-full rounded-xl p-2.5 text-left border text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                      targetRank === rank
                        ? 'bg-indigo-600/30 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{rank}</span>
                    {targetRank === rank && <CheckCircle2 className="h-4 w-4 text-indigo-400" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Daily Self-Study Target
                </label>
                <span className="text-xs font-bold text-indigo-400">{dailyStudyHours} Hours / Day</span>
              </div>
              <input
                type="range"
                min={2}
                max={10}
                step={1}
                value={dailyStudyHours}
                onChange={(e) => setDailyStudyHours(parseInt(e.target.value, 10))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>2 hrs (Light)</span>
                <span>4 hrs (Balanced)</span>
                <span>6 hrs (Intensive)</span>
                <span>8+ hrs (Top Ranker)</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Weak Areas & Current Level */}
        {step === 3 && (
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Current Preparation Level
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'beginner', label: 'Foundation', desc: 'Building concepts from scratch' },
                  { id: 'intermediate', label: 'Practicing PYQs', desc: 'Good theory, refining speed' },
                  { id: 'advanced', label: 'Rank Finisher', desc: 'Testing & minimizing negative marks' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPreparationLevel(item.id as any)}
                    className={`rounded-xl p-3 text-left border transition-all ${
                      preparationLevel === item.id
                        ? 'bg-indigo-600/30 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
                Select Priority Subject(s) Requiring Highest Focus
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(['physics', 'chemistry', 'mathematics'] as Subject[]).map((sub) => {
                  const isSelected = weakSubjects.includes(sub);
                  return (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => toggleWeakSubject(sub)}
                      className={`rounded-xl p-3 text-center border font-bold text-xs uppercase tracking-wider transition-all ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 ring-1 ring-amber-500'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <Zap className={`mx-auto h-5 w-5 mb-1 ${isSelected ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} />
                      <span>{sub}</span>
                      {isSelected && <span className="block text-[10px] text-amber-400 font-normal mt-0.5">Priority</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-3.5 flex items-center gap-3">
              <Award className="h-7 w-7 text-indigo-400 shrink-0" />
              <div className="text-xs text-indigo-200">
                <span className="font-bold text-white block">Earn +50 XP on completion!</span>
                Your daily tasks and mock tests will be automatically calibrated to these targets.
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Back
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Skip for now
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-indigo-500 transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-black text-white shadow-lg hover:bg-emerald-500 transition-colors"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Launch Personalized Plan</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
