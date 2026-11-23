'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  AlertTriangle, 
  Timer, 
  Menu, 
  X,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { DataBackupModal } from './DataBackupModal';
import { StudyTimer } from './StudyTimer';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: GraduationCap },
  { label: 'Curriculum', href: '/curriculum', icon: BookOpen },
  { label: 'Practice', href: '/practice', icon: CheckCircle2 },
  { label: 'Mock Test', href: '/test', icon: Timer },
  { label: 'Error Book', href: '/error-book', icon: AlertTriangle, badge: 'High Yield' },
  { label: 'AI Tutor', href: '/tutor', icon: Sparkles, highlight: true },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backupModalOpen, setBackupModalOpen] = useState(false);
  const [timerModalOpen, setTimerModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-100">
              <span className="font-extrabold tracking-tight text-xs sm:text-sm">JEE</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">AI Mentor</span>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-indigo-700 border border-indigo-200/60">
                  JEE 2027
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Personal Master Prep</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.highlight
                      ? isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100/80 font-semibold'
                      : isActive
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${item.highlight && !isActive ? 'text-indigo-600' : ''}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-rose-100 px-1.5 py-0.2 text-[10px] font-bold text-rose-600">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Streak & Backup Modal Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-amber-50 px-2 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-amber-700 border border-amber-200/80 shadow-xs">
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-500 text-amber-500" />
              <span className="hidden sm:inline">3 Day Streak</span>
              <span className="sm:hidden font-bold">3d</span>
            </div>

            {/* Focus Timer Trigger */}
            <button
              onClick={() => setTimerModalOpen(true)}
              className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
              title="Open Pomodoro Focus Timer"
            >
              <Timer className="h-3.5 w-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Focus</span>
            </button>

            {/* Data Safety & Backup Trigger */}
            <button
              onClick={() => setBackupModalOpen(true)}
              className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50/80 px-2.5 py-1 text-[11px] font-bold text-indigo-700 shadow-2xs hover:bg-indigo-100 transition-colors"
              title="Backup & Restore Progress"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Backup</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-4 md:hidden shadow-lg">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? 'bg-indigo-50 font-bold text-indigo-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-slate-500" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-600">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="mt-2 border-t border-slate-100 pt-2 space-y-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimerModalOpen(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Timer className="h-4 w-4 text-indigo-600" />
                  <span>Pomodoro Focus Timer</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBackupModalOpen(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50"
                >
                  <ShieldCheck className="h-4 w-4 text-indigo-600" />
                  <span>Backup & Restore Progress</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Data Backup & Restore Modal */}
      <DataBackupModal
        isOpen={backupModalOpen}
        onClose={() => setBackupModalOpen(false)}
      />

      {/* Pomodoro Focus Timer Modal */}
      <StudyTimer
        isOpen={timerModalOpen}
        onClose={() => setTimerModalOpen(false)}
      />
    </>
  );
};
