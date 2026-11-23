import { Attempt, ErrorBookEntry, Question, TestSession } from '@/types';
import { SEED_QUESTIONS } from './questions/seed';

const STORAGE_KEYS = {
  ATTEMPTS: 'jee_attempts_v1',
  ERROR_BOOK: 'jee_error_book_v1',
  COMPLETED_TESTS: 'jee_completed_tests_v1',
  STREAK: 'jee_streak_v1',
  LAST_STUDY_DATE: 'jee_last_study_date',
  SAVED_NOTES: 'jee_notes_v1',
};

export interface BackupData {
  version: number;
  app: string;
  exportedAt: number;
  exportedDateString: string;
  data: {
    attempts: Attempt[];
    errorBook: ErrorBookEntry[];
    completedTests: TestSession[];
    streak: number;
    lastStudyDate: string | null;
  };
}

export const StorageService = {
  // -------------------------------------------------------------
  // ATTEMPTS
  // -------------------------------------------------------------
  getAttempts: (): Attempt[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  recordAttempt: (attempt: Attempt, question?: Question) => {
    if (typeof window === 'undefined') return;
    try {
      const attempts = StorageService.getAttempts();
      attempts.unshift(attempt);
      // Keep up to 2000 attempts safely in localStorage
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts.slice(0, 2000)));

      // If incorrect, record in error book
      if (!attempt.isCorrect) {
        const targetQ = question || SEED_QUESTIONS.find((q) => q.id === attempt.questionId);
        if (targetQ) {
          StorageService.logError(targetQ, attempt.mistakeCategory || 'conceptual_gap');
        }
      } else {
        // If correct, check if it was previously in error book and mark resolved
        StorageService.markErrorResolved(attempt.questionId);
      }

      // Update study activity streak
      StorageService.updateStreak();
    } catch (e) {
      console.error('Failed to record attempt', e);
    }
  },

  // -------------------------------------------------------------
  // ERROR BOOK
  // -------------------------------------------------------------
  getErrorBook: (): ErrorBookEntry[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ERROR_BOOK);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  logError: (question: Question, mistakeCategory: ErrorBookEntry['mistakeCategory'], notes?: string) => {
    if (typeof window === 'undefined') return;
    try {
      const errorBook = StorageService.getErrorBook();
      const existingIdx = errorBook.findIndex((e) => e.questionId === question.id);

      if (existingIdx >= 0) {
        errorBook[existingIdx].attemptCount += 1;
        errorBook[existingIdx].failureCount += 1;
        errorBook[existingIdx].lastAttemptAt = Date.now();
        errorBook[existingIdx].mistakeCategory = mistakeCategory;
        errorBook[existingIdx].resolved = false;
        errorBook[existingIdx].srsStage = 1; // Reset to Stage 1 on failure
        errorBook[existingIdx].nextReviewDue = Date.now() + 24 * 3600 * 1000; // Due in 24 hours
        errorBook[existingIdx].masteryScore = 20;
        if (notes) errorBook[existingIdx].studentNotes = notes;
      } else {
        errorBook.unshift({
          questionId: question.id,
          question,
          firstFailedAt: Date.now(),
          lastAttemptAt: Date.now(),
          attemptCount: 1,
          failureCount: 1,
          resolved: false,
          mistakeCategory,
          studentNotes: notes,
          srsStage: 1,
          nextReviewDue: Date.now() + 24 * 3600 * 1000,
          masteryScore: 20,
        });
      }

      localStorage.setItem(STORAGE_KEYS.ERROR_BOOK, JSON.stringify(errorBook));
    } catch (e) {
      console.error('Failed to log error', e);
    }
  },

  // Advance SRS Spaced Repetition Stage
  advanceErrorSRS: (questionId: string) => {
    if (typeof window === 'undefined') return;
    try {
      const errorBook = StorageService.getErrorBook();
      const entry = errorBook.find((e) => e.questionId === questionId);
      if (entry) {
        const currentStage = entry.srsStage || 1;
        if (currentStage === 1) {
          entry.srsStage = 2;
          entry.nextReviewDue = Date.now() + 7 * 24 * 3600 * 1000; // 7 days review
          entry.masteryScore = 60;
          entry.resolved = false;
        } else if (currentStage === 2) {
          entry.srsStage = 3;
          entry.nextReviewDue = Date.now() + 21 * 24 * 3600 * 1000; // 21 days review
          entry.masteryScore = 85;
          entry.resolved = false;
        } else {
          entry.srsStage = 3;
          entry.resolved = true;
          entry.masteryScore = 100;
        }
        entry.lastAttemptAt = Date.now();
        localStorage.setItem(STORAGE_KEYS.ERROR_BOOK, JSON.stringify(errorBook));
      }
    } catch (e) {
      console.error('Failed to advance error SRS', e);
    }
  },

  markErrorResolved: (questionId: string) => {
    StorageService.advanceErrorSRS(questionId);
  },

  getDueErrorsCount: (): number => {
    const errorBook = StorageService.getErrorBook();
    const now = Date.now();
    return errorBook.filter((e) => !e.resolved && (!e.nextReviewDue || e.nextReviewDue <= now)).length;
  },

  // -------------------------------------------------------------
  // COMPLETED TESTS
  // -------------------------------------------------------------
  saveTestSession: (test: TestSession) => {
    if (typeof window === 'undefined') return;
    try {
      const tests = StorageService.getCompletedTests();
      tests.unshift(test);
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TESTS, JSON.stringify(tests.slice(0, 200)));
      StorageService.updateStreak();
    } catch (e) {
      console.error('Failed to save test', e);
    }
  },

  getCompletedTests: (): TestSession[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_TESTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  // -------------------------------------------------------------
  // STREAK
  // -------------------------------------------------------------
  updateStreak: () => {
    if (typeof window === 'undefined') return;
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastStudyDate = localStorage.getItem(STORAGE_KEYS.LAST_STUDY_DATE);
      let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '1', 10);

      if (lastStudyDate) {
        const last = new Date(lastStudyDate);
        const now = new Date(today);
        const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 3600 * 24));

        if (diffDays === 1) {
          streak += 1;
        } else if (diffDays > 1) {
          streak = 1;
        }
      }

      localStorage.setItem(STORAGE_KEYS.LAST_STUDY_DATE, today);
      localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
    } catch (e) {
      console.error('Failed to update streak', e);
    }
  },

  getStreak: (): number => {
    if (typeof window === 'undefined') return 3;
    return parseInt(localStorage.getItem(STORAGE_KEYS.STREAK) || '3', 10);
  },

  // -------------------------------------------------------------
  // ZERO-DATA-LOSS: PERSISTENT STORAGE
  // -------------------------------------------------------------
  requestPersistentStorage: async (): Promise<boolean> => {
    if (typeof window === 'undefined' || !navigator.storage || !navigator.storage.persist) {
      return false;
    }
    try {
      const isPersisted = await navigator.storage.persisted();
      if (isPersisted) return true;
      return await navigator.storage.persist();
    } catch (e) {
      console.warn('Persistent storage request failed', e);
      return false;
    }
  },

  isStoragePersisted: async (): Promise<boolean> => {
    if (typeof window === 'undefined' || !navigator.storage || !navigator.storage.persisted) {
      return false;
    }
    try {
      return await navigator.storage.persisted();
    } catch {
      return false;
    }
  },

  // -------------------------------------------------------------
  // ZERO-DATA-LOSS: BACKUP EXPORT & RESTORE
  // -------------------------------------------------------------
  exportProgressBackup: (): string => {
    if (typeof window === 'undefined') return '';
    const backup: BackupData = {
      version: 1,
      app: 'jee-ai-mentor',
      exportedAt: Date.now(),
      exportedDateString: new Date().toISOString(),
      data: {
        attempts: StorageService.getAttempts(),
        errorBook: StorageService.getErrorBook(),
        completedTests: StorageService.getCompletedTests(),
        streak: StorageService.getStreak(),
        lastStudyDate: localStorage.getItem(STORAGE_KEYS.LAST_STUDY_DATE),
      },
    };
    return JSON.stringify(backup, null, 2);
  },

  downloadBackupFile: () => {
    if (typeof window === 'undefined') return;
    const jsonStr = StorageService.exportProgressBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jee_prep_backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  importProgressBackup: (
    jsonString: string
  ): { success: boolean; message: string; stats?: { attempts: number; errors: number; tests: number } } => {
    if (typeof window === 'undefined') {
      return { success: false, message: 'Window is not defined' };
    }
    try {
      const backup: BackupData = JSON.parse(jsonString);

      if (!backup || !backup.data) {
        return { success: false, message: 'Invalid backup file format.' };
      }

      // Safe restore with validation
      if (Array.isArray(backup.data.attempts)) {
        localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(backup.data.attempts));
      }
      if (Array.isArray(backup.data.errorBook)) {
        localStorage.setItem(STORAGE_KEYS.ERROR_BOOK, JSON.stringify(backup.data.errorBook));
      }
      if (Array.isArray(backup.data.completedTests)) {
        localStorage.setItem(STORAGE_KEYS.COMPLETED_TESTS, JSON.stringify(backup.data.completedTests));
      }
      if (typeof backup.data.streak === 'number') {
        localStorage.setItem(STORAGE_KEYS.STREAK, backup.data.streak.toString());
      }
      if (backup.data.lastStudyDate) {
        localStorage.setItem(STORAGE_KEYS.LAST_STUDY_DATE, backup.data.lastStudyDate);
      }

      return {
        success: true,
        message: 'Progress successfully restored! Refreshing data...',
        stats: {
          attempts: backup.data.attempts?.length || 0,
          errors: backup.data.errorBook?.length || 0,
          tests: backup.data.completedTests?.length || 0,
        },
      };
    } catch (err: any) {
      return { success: false, message: `Failed to parse backup file: ${err.message}` };
    }
  },

  getStorageStats: () => {
    const attempts = StorageService.getAttempts();
    const errorBook = StorageService.getErrorBook();
    const tests = StorageService.getCompletedTests();
    const streak = StorageService.getStreak();

    return {
      attemptCount: attempts.length,
      unresolvedErrors: errorBook.filter((e) => !e.resolved).length,
      totalErrors: errorBook.length,
      testsCompleted: tests.length,
      streak,
    };
  },
};
