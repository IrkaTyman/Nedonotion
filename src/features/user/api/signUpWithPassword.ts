import { createUserWithEmailAndPassword } from 'firebase/auth';

import { getUser } from '@entities/user';

import { auth } from '@shared/config/firebase';

import { createUser } from '../api/createUser';
import { SignUpData } from '../model/SignUpData';

export async function signUpWithPassword(data: SignUpData): Promise<void> {
    return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async ({ user }) => {
            const userInDB = await getUser(user.uid);
            if (userInDB !== null) {
                return;
            }

            return createUser(
                user.uid,
                {
                    ...data,
                    uid: user.uid,
                    avatarUrl: null,
                });
        });
}
