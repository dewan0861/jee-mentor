'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Timer, 
  AlertTriangle, 
  Sparkles 
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: GraduationCap },
  { label: 'Syllabus', href: '/curriculum', icon: BookOpen },
  { label: 'Practice', href: '/practice', icon: CheckCircle2 },
  { label: 'Mock Test', href: '/test', icon: Timer },
  { label: 'Errors', href: '/error-book', icon: AlertTriangle },
  { label: 'AI Tutor', href: '/tutor', icon: Sparkles, highlight: true },
];

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();

  // Don't show bottom nav inside an active running test to prevent accidental navigation
  // But show it on config/results or other pages
  return (
    <nav 
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200/90 bg-white/95 px-2 py-1.5 backdrop-blur-md shadow-lg md:hidden"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex min-w-[50px] flex-col items-center justify-center rounded-xl py-1 px-1.5 text-center transition-all ${
              isActive
                ? item.highlight
                  ? 'text-indigo-600 font-extrabold scale-105'
                  : 'text-indigo-600 font-extrabold scale-105'
                : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <div className={`relative flex h-6 w-6 items-center justify-center rounded-lg transition-colors ${
              isActive ? 'bg-indigo-50 text-indigo-600' : ''
            }`}>
              <Icon className={`h-4 w-4 ${item.highlight && !isActive ? 'text-amber-500' : ''}`} />
              {isActive && (
                <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
              )}
            </div>
            <span className="mt-0.5 text-[10px] leading-tight tracking-tight">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
