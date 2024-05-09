import { doc, setDoc } from 'firebase/firestore';

import { User } from '@entities/user';

import { db } from '@shared/config/firebase';

/**
 * Метод создания пользователя
 * @param uid
 * @param user
 */
export async function createUser(uid: string, user: User): Promise<void> {
    const ref = doc(db, 'users', uid);
    await setDoc(ref, user, { merge: true });
}
