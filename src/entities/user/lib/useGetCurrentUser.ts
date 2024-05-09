import { doc, DocumentReference } from 'firebase/firestore';
import { useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DocumentHook, useDocument } from 'react-firebase-hooks/firestore';

import { auth, db } from '@shared/config/firebase';

import { User } from '../model/User';

/**
 * Хук для получения текущего пользователя
 */
export function useGetCurrentUser(): DocumentHook<User> {
    const [user] = useAuthState(auth);
    const ref = useMemo(() => user
        ? doc(db, 'users', user.uid) as DocumentReference<User>
        : null, [user]);
    return useDocument<User>(ref);
}
