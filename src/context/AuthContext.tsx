'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '@/lib/firebase';
import { FirestoreSyncService } from '@/lib/firestoreSync';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isFirebaseConfigured: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isFirebaseConfigured: false,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  signOutUser: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth || !isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        // Sync user progress from cloud
        await FirestoreSyncService.syncFromCloud(currentUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!auth || !googleProvider) {
      throw new Error('Firebase Authentication is not configured yet.');
    }
    const res = await signInWithPopup(auth, googleProvider);
    if (res.user) {
      await FirestoreSyncService.syncFromCloud(res.user.uid);
      await FirestoreSyncService.syncToCloud(res.user.uid);
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    if (!auth) {
      throw new Error('Firebase Authentication is not configured yet.');
    }
    const res = await signInWithEmailAndPassword(auth, email, pass);
    if (res.user) {
      await FirestoreSyncService.syncFromCloud(res.user.uid);
      await FirestoreSyncService.syncToCloud(res.user.uid);
    }
  };

  const signUpWithEmail = async (email: string, pass: string) => {
    if (!auth) {
      throw new Error('Firebase Authentication is not configured yet.');
    }
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    if (res.user) {
      await FirestoreSyncService.syncToCloud(res.user.uid);
    }
  };

  const signOutUser = async () => {
    if (auth) {
      await signOut(auth);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isFirebaseConfigured,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
