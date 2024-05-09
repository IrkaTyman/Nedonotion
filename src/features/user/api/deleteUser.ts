import { doc, deleteDoc } from 'firebase/firestore';

import { db } from '@shared/config/firebase';

/**
 * Метод удаления пользователя
 * @param uid
 */
export async function deleteUser(uid: string): Promise<void> {
    const ref = doc(db, 'users', uid);
    await deleteDoc(ref);
}
