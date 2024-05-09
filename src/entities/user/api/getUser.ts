import { doc, DocumentReference, getDoc } from 'firebase/firestore';

import { User } from '@entities/user';

import { db } from '@shared/config/firebase';

export async function getUser(uid: string): Promise<User | null> {
    return await getDoc(doc(db, 'users', uid) as DocumentReference<User>)
        .then(snap => snap.exists() ? snap.data() : null);
}
