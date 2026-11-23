'use client';

import React, { useState, useEffect } from 'react';
import { StorageService } from '@/lib/storage';
import { 
  ShieldCheck, 
  Download, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  HardDrive,
  FileJson,
  Sparkles
} from 'lucide-react';

interface DataBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataBackupModal: React.FC<DataBackupModalProps> = ({ isOpen, onClose }) => {
  const [stats, setStats] = useState({
    attemptCount: 0,
    unresolvedErrors: 0,
    totalErrors: 0,
    testsCompleted: 0,
    streak: 3,
  });
  const [isPersisted, setIsPersisted] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStats(StorageService.getStorageStats());
      setStatusMsg(null);

      // Check / request persistent storage
      StorageService.requestPersistentStorage().then((persisted) => {
        setIsPersisted(persisted);
      });
    }
  }, [isOpen]);

  const handleExport = () => {
    StorageService.downloadBackupFile();
    setStatusMsg({
      type: 'success',
      text: 'Backup downloaded! Keep this JSON file safe on Google Drive or WhatsApp to restore anytime.',
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) return;

      const res = StorageService.importProgressBackup(content);
      if (res.success) {
        setStatusMsg({
          type: 'success',
          text: `Success! Restored ${res.stats?.attempts || 0} attempts, ${res.stats?.errors || 0} error records, and ${res.stats?.tests || 0} mock tests.`,
        });
        setStats(StorageService.getStorageStats());
        // Reload after 1.5s so all open pages sync
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setStatusMsg({
          type: 'error',
          text: res.message,
        });
      }
    };
    reader.readAsText(file);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-5 sm:p-7 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Data Safety & Backup</h3>
              <p className="text-xs text-slate-500">Protect study progress across updates and devices</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 p-1.5 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Persistence Status Badge */}
        <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs text-emerald-900 flex items-start gap-2.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
          <div>
            <span className="font-bold">Permanent Device Storage: </span>
            {isPersisted
              ? 'Active. Your phone will never clear your study records, attempts, or Error Book.'
              : 'Enabled locally on this device. Updates will never wipe your records.'}
          </div>
        </div>

        {/* Current Stats Overview */}
        <div className="grid grid-cols-4 gap-2 text-center mb-5">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Solved</span>
            <p className="text-base font-extrabold text-slate-800 mt-0.5">{stats.attemptCount}</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Errors</span>
            <p className="text-base font-extrabold text-rose-600 mt-0.5">{stats.totalErrors}</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Tests</span>
            <p className="text-base font-extrabold text-indigo-600 mt-0.5">{stats.testsCompleted}</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Streak</span>
            <p className="text-base font-extrabold text-amber-600 mt-0.5">{stats.streak}d</p>
          </div>
        </div>

        {/* Action 1: Export Progress */}
        <div className="space-y-3 mb-5">
          <div className="rounded-2xl border border-slate-200 p-3.5 flex items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5 text-indigo-600" />
                <span>Export Progress Backup</span>
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Download a JSON backup of all questions solved, Error Book, and scores.
              </p>
            </div>
            <button
              onClick={handleExport}
              className="rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition-colors shrink-0"
            >
              Export JSON
            </button>
          </div>

          {/* Action 2: Restore Progress */}
          <div className="rounded-2xl border border-slate-200 p-3.5 flex items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Upload className="h-3.5 w-3.5 text-emerald-600" />
                <span>Restore from Backup</span>
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Switching phones or recovering progress? Upload your backup file.
              </p>
            </div>
            <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors shrink-0">
              Choose File
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Status Message */}
        {statusMsg && (
          <div
            className={`rounded-2xl p-3 text-xs font-semibold mb-4 flex items-start gap-2 ${
              statusMsg.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-rose-50 text-rose-900 border border-rose-200'
            }`}
          >
            {statusMsg.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400">
          When the app updates with new features or questions, your existing study progress remains safe on this device.
        </p>
      </div>
    </div>
  );
};
