import { doc, deleteDoc } from 'firebase/firestore';

import { auth, db } from '@shared/config/firebase';

/**
 * Метод удаления пользователя
 * @param uid
 */
export function deleteUser(uid: string) {
    const ref = doc(db, 'users', uid);
    return auth.currentUser!.delete().then(() => deleteDoc(ref));
}
