import { doc, updateDoc } from 'firebase/firestore';

import { User } from '@entities/user';

import { db } from '@shared/config/firebase';

/**
 * Метод обновления пользователя
 * @param uid
 * @param user
 */
export async function updateUser(uid: string, user: Partial<User>): Promise<void> {
    const ref = doc(db, 'users', uid);
    await updateDoc(ref, user);
}
