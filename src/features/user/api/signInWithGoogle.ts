import { signInWithPopup } from 'firebase/auth';

import { getUser } from '@entities/user';

import { auth, googleProvider } from '@shared/config/firebase';

import { createUser } from '../api/createUser';

export async function signInWithGoogle(): Promise<void> {
    return signInWithPopup(auth, googleProvider)
        .then(async ({ user }) => {
            const userInDB = await getUser(user.uid);
            if (userInDB !== null) {
                return;
            }

            return createUser(
                user.uid,
                {
                    email: user.email ?? '',
                    name: user.displayName ?? '',
                    uid: user.uid,
                    avatarUrl: user.photoURL,
                });
        });
}
