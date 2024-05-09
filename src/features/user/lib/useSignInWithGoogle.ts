import { AuthError } from 'firebase/auth';
import { useMutation, UseMutationOptions } from 'react-query';

import { signInWithGoogle } from '../api/signInWithGoogle';

export function useSignInWithGoogle(
    options?: UseMutationOptions<void, AuthError, void>,
) {
    return useMutation(
        signInWithGoogle,
        options,
    );
}
