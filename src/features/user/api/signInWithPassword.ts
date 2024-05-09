import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@shared/config/firebase';

import { SignInData } from '../model/SignInData';

export async function signInWithPassword(data: SignInData): Promise<void> {
    return signInWithEmailAndPassword(auth, data.email, data.password).then();
}
