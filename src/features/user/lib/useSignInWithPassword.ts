import { AuthError } from 'firebase/auth';
import { useMutation, UseMutationOptions } from 'react-query';

import { signInWithPassword } from '../api/signInWithPassword';
import { SignInData } from '../model/SignInData';

export function useSignInWithPassword(
    options?: UseMutationOptions<void, AuthError, SignInData>,
) {
    return useMutation(
        signInWithPassword,
        options,
    );
}
