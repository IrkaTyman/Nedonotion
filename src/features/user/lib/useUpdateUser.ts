import { useMutation } from 'react-query';

import { createUser } from '@features/user/api/createUser';
import { updateUser } from '@features/user/api/updateUser';

import { User } from '@entities/user';

import { AxiosUseMutationOptions } from '@shared/types';

type Arguments = {
    uid: string;
    user: Partial<User>;
};

/**
 * Хук обновления пользователя
 * @param options
 */
export function useUpdateUser(
    options?: AxiosUseMutationOptions<void, Arguments>,
) {
    return useMutation(
        (args: Arguments) => updateUser(args.uid, args.user),
        options,
    );
}
