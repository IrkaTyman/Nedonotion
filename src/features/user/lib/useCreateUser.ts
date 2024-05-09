import { useMutation } from 'react-query';

import { createUser } from '@features/user/api/createUser';

import { User } from '@entities/user';

import { AxiosUseMutationOptions } from '@shared/types';

type Arguments = {
    uid: string;
    user: User;
};

/**
 * Хук создания пользователя
 * @param options
 */
export function useCreateUser(
    options: AxiosUseMutationOptions<void, Arguments>,
) {
    return useMutation(
        (args: Arguments) => createUser(args.uid, args.user),
        options,
    );
}
