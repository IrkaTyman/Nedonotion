import firebase from 'firebase/compat';
import { useMutation, UseMutationOptions } from 'react-query';

import { signUpWithPassword } from '../api/signUpWithPassword';
import { SignUpData } from '../model/SignUpData';

import AuthError = firebase.auth.AuthError;

export function useSignUpWithPassword(
    options?: UseMutationOptions<void, AuthError, SignUpData>,
) {
    return useMutation(
        signUpWithPassword,
        options,
    );
}
