import { db } from './firebase';
import { doc, setDoc, getDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { StorageService } from './storage';

export const FirestoreSyncService = {
  syncToCloud: async (uid: string) => {
    if (!db || !uid) return false;
    try {
      const userRef = doc(db, 'users', uid);
      const profile = StorageService.getUserProfile();
      const gamification = StorageService.getGamificationProfile();
      const attempts = StorageService.getAttempts();
      const errorBook = StorageService.getErrorBook();
      const completedTests = StorageService.getCompletedTests();
      const bookmarks = StorageService.getBookmarks();
      const studyTasks = StorageService.getStudyTasks();
      const streak = StorageService.getStreak();

      await setDoc(
        userRef,
        {
          profile,
          gamification,
          attempts: attempts.slice(0, 500),
          errorBook: errorBook.slice(0, 200),
          completedTests: completedTests.slice(0, 100),
          bookmarks,
          studyTasks,
          streak,
          lastSyncedAt: serverTimestamp(),
        },
        { merge: true }
      );
      return true;
    } catch (e) {
      console.warn('Failed to sync to Firestore cloud:', e);
      return false;
    }
  },

  syncFromCloud: async (uid: string) => {
    if (!db || !uid) return false;
    try {
      const userRef = doc(db, 'users', uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const cloudData = snap.data();
        if (cloudData.profile) StorageService.saveUserProfile(cloudData.profile);
        if (Array.isArray(cloudData.bookmarks)) {
          localStorage.setItem('jee_bookmarks_v1', JSON.stringify(cloudData.bookmarks));
        }
        if (Array.isArray(cloudData.studyTasks)) {
          StorageService.saveStudyTasks(cloudData.studyTasks);
        }
        if (cloudData.gamification) {
          localStorage.setItem('jee_gamification_v1', JSON.stringify(cloudData.gamification));
        }
        if (typeof cloudData.streak === 'number') {
          localStorage.setItem('jee_streak_v1', cloudData.streak.toString());
        }
        return true;
      }
      return false;
    } catch (e) {
      console.warn('Failed to sync from Firestore cloud:', e);
      return false;
    }
  },
};
