import { 
  Attempt, 
  ErrorBookEntry, 
  Question, 
  TestSession, 
  UserProfile, 
  StudyTask, 
  BookmarkItem, 
  GamificationProfile, 
  Badge, 
  Conversation,
  Subject 
} from '@/types';
import { SEED_QUESTIONS } from './questions/seed';
import { JEE_CURRICULUM } from './curriculum/data';

const STORAGE_KEYS = {
  ATTEMPTS: 'jee_attempts_v1',
  ERROR_BOOK: 'jee_error_book_v1',
  COMPLETED_TESTS: 'jee_completed_tests_v1',
  STREAK: 'jee_streak_v1',
  LAST_STUDY_DATE: 'jee_last_study_date',
  SAVED_NOTES: 'jee_notes_v1',
  USER_PROFILE: 'jee_user_profile_v1',
  GAMIFICATION: 'jee_gamification_v1',
  BOOKMARKS: 'jee_bookmarks_v1',
  STUDY_TASKS: 'jee_study_tasks_v1',
  CONVERSATIONS: 'jee_conversations_v1',
};

export const LEVEL_TIERS = [
  { level: 1, title: 'Foundation Aspirant', minXp: 0 },
  { level: 2, title: 'Concept Builder', minXp: 200 },
  { level: 3, title: 'Problem Solver', minXp: 500 },
  { level: 4, title: 'Speed Master', minXp: 1000 },
  { level: 5, title: 'JEE Warrior', minXp: 2000 },
  { level: 6, title: 'Percentile Chaser', minXp: 3500 },
  { level: 7, title: 'Rank Contender', minXp: 5500 },
  { level: 8, title: 'Advanced Prodigy', minXp: 8000 },
  { level: 9, title: 'Master Strategist', minXp: 12000 },
  { level: 10, title: 'Elite IITian', minXp: 20000 },
];

export const AVAILABLE_BADGES: Badge[] = [
  { id: 'first_question', title: 'First Spark', description: 'Solved your first practice question', icon: '🎯', category: 'practice' },
  { id: 'centurion', title: 'Centurion', description: 'Attempted 100+ questions', icon: '💯', category: 'practice' },
  { id: 'error_terminator', title: 'Error Terminator', description: 'Resolved 5 Error Book questions', icon: '🛡️', category: 'mastery' },
  { id: 'streak_week', title: 'Week of Fire', description: 'Maintained a 7-day study streak', icon: '🔥', category: 'consistency' },
  { id: 'mock_champion', title: 'Mock Champion', description: 'Scored 90%+ in a full mock exam', icon: '🏆', category: 'mastery' },
  { id: 'deep_focus', title: 'Deep Focus', description: 'Completed 5 Pomodoro focus sessions', icon: '🧘', category: 'focus' },
  { id: 'speed_demon', title: 'Speed Demon', description: 'Solved a question in under 45 seconds', icon: '⚡', category: 'practice' },
  { id: 'planner_pro', title: 'Disciplined Scholar', description: 'Completed all daily planner tasks', icon: '📅', category: 'consistency' },
];

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
    userProfile?: UserProfile | null;
    gamification?: GamificationProfile | null;
    bookmarks?: BookmarkItem[];
    studyTasks?: StudyTask[];
    conversations?: Conversation[];
  };
}

export const StorageService = {
  // -------------------------------------------------------------
  // USER PROFILE & ONBOARDING
  // -------------------------------------------------------------
  getUserProfile: (): UserProfile => {
    if (typeof window === 'undefined') {
      return {
        classLevel: 12,
        targetYear: 2027,
        targetExam: 'jee_main',
        preparationLevel: 'intermediate',
        targetRank: 'Top 1,000 AIR (99.5%ile)',
        dailyStudyHours: 4,
        weakSubjects: ['physics', 'mathematics'],
        isOnboarded: false,
        joinedAt: Date.now(),
      };
    }
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to load user profile', e);
    }
    return {
      classLevel: 12,
      targetYear: 2027,
      targetExam: 'jee_main',
      preparationLevel: 'intermediate',
      targetRank: 'Top 1,000 AIR (99.5%ile)',
      dailyStudyHours: 4,
      weakSubjects: ['physics', 'mathematics'],
      isOnboarded: false,
      joinedAt: Date.now(),
    };
  },

  saveUserProfile: (profile: Partial<UserProfile>): UserProfile => {
    if (typeof window === 'undefined') return StorageService.getUserProfile();
    try {
      const current = StorageService.getUserProfile();
      const updated: UserProfile = { ...current, ...profile, isOnboarded: true };
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Failed to save user profile', e);
      return StorageService.getUserProfile();
    }
  },

  // -------------------------------------------------------------
  // GAMIFICATION: XP, LEVELS & BADGES
  // -------------------------------------------------------------
  getGamificationProfile: (): GamificationProfile => {
    if (typeof window === 'undefined') {
      return {
        xp: 120,
        level: 1,
        rankTitle: 'Foundation Aspirant',
        unlockedBadges: [],
        completedFocusBlocks: 0,
      };
    }
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GAMIFICATION);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to get gamification profile', e);
    }
    return {
      xp: 120,
      level: 1,
      rankTitle: 'Foundation Aspirant',
      unlockedBadges: [],
      completedFocusBlocks: 0,
    };
  },

  addXP: (amount: number): GamificationProfile => {
    if (typeof window === 'undefined') return StorageService.getGamificationProfile();
    try {
      const profile = StorageService.getGamificationProfile();
      profile.xp += amount;

      // Determine level from tiers
      let currentTier = LEVEL_TIERS[0];
      for (const tier of LEVEL_TIERS) {
        if (profile.xp >= tier.minXp) {
          currentTier = tier;
        } else {
          break;
        }
      }

      profile.level = currentTier.level;
      profile.rankTitle = currentTier.title;

      localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(profile));
      return profile;
    } catch (e) {
      console.error('Failed to add XP', e);
      return StorageService.getGamificationProfile();
    }
  },

  unlockBadge: (badgeId: string): boolean => {
    if (typeof window === 'undefined') return false;
    try {
      const profile = StorageService.getGamificationProfile();
      if (!profile.unlockedBadges.includes(badgeId)) {
        profile.unlockedBadges.push(badgeId);
        localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(profile));
        return true; // Newly unlocked
      }
      return false;
    } catch (e) {
      console.error('Failed to unlock badge', e);
      return false;
    }
  },

  recordFocusBlockCompleted: () => {
    if (typeof window === 'undefined') return;
    try {
      const profile = StorageService.getGamificationProfile();
      profile.completedFocusBlocks = (profile.completedFocusBlocks || 0) + 1;
      profile.xp += 15; // +15 XP for completing 25 min focus
      if (profile.completedFocusBlocks >= 5) {
        StorageService.unlockBadge('deep_focus');
      }
      localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to record focus block', e);
    }
  },

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
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts.slice(0, 2000)));

      // Award XP
      if (attempt.isCorrect) {
        StorageService.addXP(10);
        StorageService.unlockBadge('first_question');
        if (attempt.timeSpentSec > 0 && attempt.timeSpentSec <= 45) {
          StorageService.unlockBadge('speed_demon');
        }
      }

      if (attempts.length >= 100) {
        StorageService.unlockBadge('centurion');
      }

      // If incorrect, record in error book
      if (!attempt.isCorrect) {
        const targetQ = question || SEED_QUESTIONS.find((q) => q.id === attempt.questionId);
        if (targetQ) {
          StorageService.logError(targetQ, attempt.mistakeCategory || 'conceptual_gap');
        }
      } else {
        StorageService.markErrorResolved(attempt.questionId);
      }

      // Update study activity streak
      StorageService.updateStreak();
    } catch (e) {
      console.error('Failed to record attempt', e);
    }
  },

  // -------------------------------------------------------------
  // ERROR BOOK & SRS
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
          StorageService.addXP(15);
        } else if (currentStage === 2) {
          entry.srsStage = 3;
          entry.nextReviewDue = Date.now() + 21 * 24 * 3600 * 1000; // 21 days review
          entry.masteryScore = 85;
          entry.resolved = false;
          StorageService.addXP(20);
        } else {
          entry.srsStage = 3;
          entry.resolved = true;
          entry.masteryScore = 100;
          StorageService.addXP(30);

          const resolvedCount = errorBook.filter((e) => e.resolved).length;
          if (resolvedCount >= 5) {
            StorageService.unlockBadge('error_terminator');
          }
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

      // Award XP
      StorageService.addXP(50);
      if (test.accuracy && test.accuracy >= 90) {
        StorageService.unlockBadge('mock_champion');
      }

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

      if (streak >= 7) {
        StorageService.unlockBadge('streak_week');
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
  // BOOKMARKS
  // -------------------------------------------------------------
  getBookmarks: (): BookmarkItem[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  isBookmarked: (itemId: string): boolean => {
    const bookmarks = StorageService.getBookmarks();
    return bookmarks.some((b) => b.itemId === itemId);
  },

  toggleBookmark: (item: Omit<BookmarkItem, 'id' | 'savedAt'>): boolean => {
    if (typeof window === 'undefined') return false;
    try {
      const bookmarks = StorageService.getBookmarks();
      const existingIdx = bookmarks.findIndex((b) => b.itemId === item.itemId);

      if (existingIdx >= 0) {
        bookmarks.splice(existingIdx, 1);
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
        return false; // Removed
      } else {
        bookmarks.unshift({
          ...item,
          id: `bm_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
          savedAt: Date.now(),
        });
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
        StorageService.addXP(5);
        return true; // Added
      }
    } catch (e) {
      console.error('Failed to toggle bookmark', e);
      return false;
    }
  },

  removeBookmark: (itemId: string) => {
    if (typeof window === 'undefined') return;
    try {
      const bookmarks = StorageService.getBookmarks();
      const filtered = bookmarks.filter((b) => b.itemId !== itemId);
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(filtered));
    } catch (e) {
      console.error('Failed to remove bookmark', e);
    }
  },

  // -------------------------------------------------------------
  // STUDY PLANNER & TASKS
  // -------------------------------------------------------------
  getStudyTasks: (): StudyTask[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDY_TASKS);
      if (data) {
        const tasks: StudyTask[] = JSON.parse(data);
        const today = new Date().toISOString().slice(0, 10);
        // If no tasks exist for today, generate them
        const todayTasks = tasks.filter((t) => t.dueDate === today);
        if (todayTasks.length > 0) return tasks;
      }
      return StorageService.generateDailyTasks();
    } catch {
      return StorageService.generateDailyTasks();
    }
  },

  saveStudyTasks: (tasks: StudyTask[]) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEYS.STUDY_TASKS, JSON.stringify(tasks));
    } catch (e) {
      console.error('Failed to save study tasks', e);
    }
  },

  toggleTaskCompleted: (taskId: string): StudyTask[] => {
    const tasks = StorageService.getStudyTasks();
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      if (task.completed) {
        StorageService.addXP(15);
      }
      StorageService.saveStudyTasks(tasks);

      // Check if all today's tasks completed
      const today = new Date().toISOString().slice(0, 10);
      const todayTasks = tasks.filter((t) => t.dueDate === today);
      if (todayTasks.length > 0 && todayTasks.every((t) => t.completed)) {
        StorageService.unlockBadge('planner_pro');
      }
    }
    return tasks;
  },

  addStudyTask: (task: Omit<StudyTask, 'id'>): StudyTask => {
    const tasks = StorageService.getStudyTasks();
    const newTask: StudyTask = {
      ...task,
      id: `task_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    };
    tasks.unshift(newTask);
    StorageService.saveStudyTasks(tasks);
    return newTask;
  },

  deleteStudyTask: (taskId: string): StudyTask[] => {
    const tasks = StorageService.getStudyTasks();
    const filtered = tasks.filter((t) => t.id !== taskId);
    StorageService.saveStudyTasks(filtered);
    return filtered;
  },

  generateDailyTasks: (): StudyTask[] => {
    const today = new Date().toISOString().slice(0, 10);
    const errorCount = StorageService.getDueErrorsCount();

    const tasks: StudyTask[] = [
      {
        id: `auto_concept_${today}`,
        title: 'Master High-Yield Concept: Work-Energy Theorem & Circular Dynamics',
        chapterId: 'work-energy-power',
        subject: 'physics',
        type: 'concept',
        completed: false,
        dueDate: today,
        estimatedMinutes: 30,
        isAutoGenerated: true,
      },
      {
        id: `auto_practice_${today}`,
        title: 'Complete 10 PYQ Sprint on Electrostatics & Field Lines',
        chapterId: 'electrostatics',
        subject: 'physics',
        type: 'practice',
        completed: false,
        dueDate: today,
        estimatedMinutes: 25,
        isAutoGenerated: true,
      },
      {
        id: `auto_srs_${today}`,
        title: errorCount > 0 
          ? `Review ${errorCount} Due Questions in Leitner Error Book` 
          : 'Review Tricky Organic Reaction Mechanisms (GOC)',
        chapterId: 'goc',
        subject: 'chemistry',
        type: 'srs_review',
        completed: false,
        dueDate: today,
        estimatedMinutes: 20,
        isAutoGenerated: true,
      },
      {
        id: `auto_focus_${today}`,
        title: 'Complete 2 Full Pomodoro Focus Blocks (50 mins total study)',
        type: 'focus_timer',
        completed: false,
        dueDate: today,
        estimatedMinutes: 50,
        isAutoGenerated: true,
      },
    ];

    StorageService.saveStudyTasks(tasks);
    return tasks;
  },

  // -------------------------------------------------------------
  // CONVERSATIONS (AI TUTOR PERSISTENCE)
  // -------------------------------------------------------------
  getConversations: (): Conversation[] => {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CONVERSATIONS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  getConversationById: (id: string): Conversation | undefined => {
    const list = StorageService.getConversations();
    return list.find((c) => c.id === id);
  },

  saveConversation: (conversation: Conversation) => {
    if (typeof window === 'undefined') return;
    try {
      const list = StorageService.getConversations();
      const existingIdx = list.findIndex((c) => c.id === conversation.id);
      if (existingIdx >= 0) {
        list[existingIdx] = conversation;
      } else {
        list.unshift(conversation);
      }
      localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(list.slice(0, 50)));
    } catch (e) {
      console.error('Failed to save conversation', e);
    }
  },

  deleteConversation: (id: string): Conversation[] => {
    if (typeof window === 'undefined') return [];
    try {
      const list = StorageService.getConversations();
      const filtered = list.filter((c) => c.id !== id);
      localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(filtered));
      return filtered;
    } catch {
      return [];
    }
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
      version: 2,
      app: 'jee-ai-mentor',
      exportedAt: Date.now(),
      exportedDateString: new Date().toISOString(),
      data: {
        attempts: StorageService.getAttempts(),
        errorBook: StorageService.getErrorBook(),
        completedTests: StorageService.getCompletedTests(),
        streak: StorageService.getStreak(),
        lastStudyDate: localStorage.getItem(STORAGE_KEYS.LAST_STUDY_DATE),
        userProfile: StorageService.getUserProfile(),
        gamification: StorageService.getGamificationProfile(),
        bookmarks: StorageService.getBookmarks(),
        studyTasks: StorageService.getStudyTasks(),
        conversations: StorageService.getConversations(),
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
  ): { success: boolean; message: string; stats?: { attempts: number; errors: number; tests: number; xp: number } } => {
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
      if (backup.data.userProfile) {
        localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(backup.data.userProfile));
      }
      if (backup.data.gamification) {
        localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(backup.data.gamification));
      }
      if (Array.isArray(backup.data.bookmarks)) {
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(backup.data.bookmarks));
      }
      if (Array.isArray(backup.data.studyTasks)) {
        localStorage.setItem(STORAGE_KEYS.STUDY_TASKS, JSON.stringify(backup.data.studyTasks));
      }
      if (Array.isArray(backup.data.conversations)) {
        localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(backup.data.conversations));
      }

      return {
        success: true,
        message: 'All progress, study plans, bookmarks, and XP successfully restored!',
        stats: {
          attempts: backup.data.attempts?.length || 0,
          errors: backup.data.errorBook?.length || 0,
          tests: backup.data.completedTests?.length || 0,
          xp: backup.data.gamification?.xp || 0,
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
    const gamification = StorageService.getGamificationProfile();

    return {
      attemptCount: attempts.length,
      unresolvedErrors: errorBook.filter((e) => !e.resolved).length,
      totalErrors: errorBook.length,
      testsCompleted: tests.length,
      streak,
      xp: gamification.xp,
      level: gamification.level,
      rankTitle: gamification.rankTitle,
    };
  },
};
