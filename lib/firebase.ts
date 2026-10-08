import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/lib/firebase-config';

export function hasFirebaseConfig(): boolean {
  return Boolean(
    firebaseConfig.apiKey?.trim() &&
    firebaseConfig.projectId?.trim() &&
    firebaseConfig.appId?.trim()
  );
}

export function getFirebaseDb() {
  if (!hasFirebaseConfig()) throw new Error('Falta la configuración de Firebase en lib/firebase-config.ts');
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getFirestore(app);
}
