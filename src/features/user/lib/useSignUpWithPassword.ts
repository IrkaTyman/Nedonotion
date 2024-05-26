import { AuthError } from 'firebase/auth';
import { useMutation, UseMutationOptions } from 'react-query';

import { signUpWithPassword } from '../api/signUpWithPassword';
import { SignUpData } from '../model/SignUpData';

export function useSignUpWithPassword(
    options?: UseMutationOptions<void, AuthError, SignUpData>,
) {
    return useMutation(
        signUpWithPassword,
        options,
    );
}
