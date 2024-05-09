import { doc, DocumentReference } from 'firebase/firestore';
import { useMemo } from 'react';
import { DocumentHook, useDocument } from 'react-firebase-hooks/firestore';

import { db } from '@shared/config/firebase';

import { User } from '../model/User';

/**
 * Хук для получения пользователя по uid
 */
export function useGetUserListener(uid: string): DocumentHook<User> {
    const ref = useMemo(() => doc(db, 'users', uid) as DocumentReference<User>, [uid]);
    return useDocument<User>(ref);
}
