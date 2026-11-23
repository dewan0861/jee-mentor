'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share, PlusSquare, CheckCircle } from 'lucide-react';

export const InstallPwaPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosInstructions, setShowIosInstructions] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed in standalone mode
    if (typeof window !== 'undefined') {
      const standalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true;

      setIsStandalone(standalone);
      if (standalone) return;

      // Check if user previously dismissed in last 3 days
      const dismissedUntil = localStorage.getItem('jee_pwa_dismissed');
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return;
      }

      // Detect iOS Safari
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
      setIsIos(isIosDevice);

      // Listen for Android / Chrome beforeinstallprompt event
      const handleBeforeInstall = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowPrompt(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstall);

      // If iOS, show prompt after a short delay so user can see the app first
      if (isIosDevice && !standalone) {
        const timer = setTimeout(() => {
          setShowPrompt(true);
        }, 3000);
        return () => {
          clearTimeout(timer);
          window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
        };
      }

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosInstructions(true);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Dismiss for 3 days
    localStorage.setItem('jee_pwa_dismissed', (Date.now() + 3 * 24 * 60 * 60 * 1000).toString());
  };

  if (isStandalone || !showPrompt) return null;

  return (
    <>
      {/* Floating Bottom / Banner Prompt */}
      <div className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-md rounded-2xl border border-indigo-200 bg-white/95 p-3.5 shadow-xl backdrop-blur-md transition-all sm:bottom-6 sm:right-6 sm:left-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-xs">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Install JEE Mentor App</h4>
              <p className="text-[11px] text-slate-500">
                Full-screen offline access on your phone
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-extrabold text-white shadow-xs hover:bg-indigo-700 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Install</span>
            </button>
            <button
              onClick={handleDismiss}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS Safari Instruction Modal */}
      {showIosInstructions && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-indigo-600" />
                Install on iPhone / iPad
              </h3>
              <button
                onClick={() => setShowIosInstructions(false)}
                className="rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Apple Safari lets you install any web app directly to your home screen in 2 simple taps:
            </p>

            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                  <Share className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900">Step 1: Tap Share</span>
                  <p className="text-[11px] text-slate-500">
                    Tap the Share icon at the bottom of Safari toolbar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <PlusSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900">Step 2: Add to Home Screen</span>
                  <p className="text-[11px] text-slate-500">
                    Scroll down and select <span className="font-bold text-slate-800">&quot;Add to Home Screen&quot;</span>.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIosInstructions(false)}
              className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white shadow-xs"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
