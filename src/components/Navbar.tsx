'use client';

import React, { useState, useEffect } from 'react';
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
  ShieldCheck,
  Calendar,
  BarChart3,
  Bookmark,
  Search,
  Award,
  UserCheck,
  LogIn
} from 'lucide-react';
import { DataBackupModal } from './DataBackupModal';
import { StudyTimer } from './StudyTimer';
import SearchModal from './SearchModal';
import OnboardingModal from './OnboardingModal';
import AuthModal from './AuthModal';
import { StorageService } from '@/lib/storage';
import { GamificationProfile, UserProfile } from '@/types';
import { useAuth } from '@/context/AuthContext';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: GraduationCap },
  { label: 'Syllabus', href: '/curriculum', icon: BookOpen },
  { label: 'Planner', href: '/planner', icon: Calendar, badge: 'Daily' },
  { label: 'Practice', href: '/practice', icon: CheckCircle2 },
  { label: 'Mock Test', href: '/test', icon: Timer },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Error Book', href: '/error-book', icon: AlertTriangle, badge: 'SRS' },
  { label: 'Bookmarks', href: '/bookmarks', icon: Bookmark },
  { label: 'AI Tutor', href: '/tutor', icon: Sparkles, highlight: true },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backupModalOpen, setBackupModalOpen] = useState(false);
  const [timerModalOpen, setTimerModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user } = useAuth();
  
  const [gamification, setGamification] = useState<GamificationProfile>({
    xp: 120,
    level: 1,
    rankTitle: 'Foundation Aspirant',
    unlockedBadges: [],
    completedFocusBlocks: 0,
  });
  const [profile, setProfile] = useState<UserProfile>(StorageService.getUserProfile());

  useEffect(() => {
    setGamification(StorageService.getGamificationProfile());
    setProfile(StorageService.getUserProfile());
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-100 dark:shadow-none">
              <span className="font-extrabold tracking-tight text-xs sm:text-sm">JEE</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">AI Mentor</span>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800">
                  {profile.targetYear ? `JEE ${profile.targetYear}` : 'JEE 2027'}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {profile.targetRank || 'Personal Master Prep'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    item.highlight
                      ? isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xs'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100/80 dark:bg-indigo-950/40 dark:text-indigo-300'
                      : isActive
                      ? 'bg-slate-100 text-indigo-700 dark:bg-slate-800 dark:text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${item.highlight && !isActive ? 'text-indigo-600' : ''}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-rose-100 px-1.5 py-0.2 text-[9px] font-bold text-rose-600 dark:bg-rose-900/40 dark:text-rose-400">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400 transition-colors"
              title="Search curriculum & questions (Ctrl+K)"
            >
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <span className="hidden sm:inline text-[11px]">Search</span>
              <kbd className="hidden lg:inline-block rounded bg-white px-1.5 py-0.2 text-[9px] font-mono text-slate-400 border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Gamification Level & XP Badge */}
            <div 
              className="hidden sm:flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 px-2.5 py-1 text-[11px] font-bold text-purple-700 border border-purple-200/80 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300"
              title={`${gamification.rankTitle} • ${gamification.xp} Total XP`}
            >
              <Award className="h-3.5 w-3.5 text-purple-600" />
              <span>Lvl {gamification.level}</span>
              <span className="text-[10px] text-purple-500 font-semibold">• {gamification.xp} XP</span>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 sm:px-2.5 py-1 text-[11px] font-bold text-amber-700 border border-amber-200/80 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-400">
              <Flame className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>{StorageService.getStreak()}d</span>
            </div>

            {/* Focus Timer Trigger */}
            <button
              onClick={() => setTimerModalOpen(true)}
              className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 transition-colors"
              title="Pomodoro Focus Timer"
            >
              <Timer className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Focus</span>
            </button>

            {/* Target & Profile Trigger */}
            <button
              onClick={() => setOnboardingOpen(true)}
              className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50/70 px-2.5 py-1 text-[11px] font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300 transition-colors"
              title="Edit Target & Personal Profile"
            >
              <UserCheck className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Profile</span>
            </button>

            {/* Cloud Sync / Auth Trigger */}
            <button
              onClick={() => setAuthModalOpen(true)}
              className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 transition-colors"
              title={user ? `Signed in as ${user.email}` : 'Sign in for Cloud Multi-Device Sync'}
            >
              <LogIn className="h-3.5 w-3.5 text-indigo-600" />
              <span className="hidden sm:inline">{user ? 'Cloud' : 'Sign In'}</span>
            </button>

            {/* Data Safety & Backup Trigger */}
            <button
              onClick={() => setBackupModalOpen(true)}
              className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 transition-colors"
              title="Backup & Restore Progress"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Backup</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-1.5 text-slate-600 hover:bg-slate-100 xl:hidden dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-4 xl:hidden shadow-lg dark:border-slate-800 dark:bg-slate-900 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl p-2.5 text-xs font-semibold ${
                      isActive
                        ? 'bg-indigo-50 font-bold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-slate-500" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="rounded-full bg-rose-100 px-1.5 py-0.2 text-[9px] font-bold text-rose-600">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-2 flex flex-col gap-1.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimerModalOpen(true);
                }}
                className="flex items-center gap-2 rounded-xl bg-slate-50 p-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <Timer className="h-4 w-4 text-indigo-600" />
                <span>Pomodoro Focus Timer</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBackupModalOpen(true);
                }}
                className="flex items-center gap-2 rounded-xl bg-slate-50 p-2 text-xs font-bold text-indigo-700 dark:bg-slate-800 dark:text-indigo-400"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Backup & Restore Study Progress</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Onboarding & Profile Modal */}
      <OnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        onComplete={(newProfile) => {
          setProfile(newProfile);
          setGamification(StorageService.getGamificationProfile());
        }}
      />

      {/* Cloud Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

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
