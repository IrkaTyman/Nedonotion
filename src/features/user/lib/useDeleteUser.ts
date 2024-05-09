import { useMutation } from 'react-query';

import { createUser } from '@features/user/api/createUser';
import { deleteUser } from '@features/user/api/deleteUser';

import { User } from '@entities/user';

import { AxiosUseMutationOptions } from '@shared/types';

/**
 * Хук удаления пользователя
 * @param options
 */
export function useDeleteUser(
    options: AxiosUseMutationOptions<void, string>,
) {
    return useMutation(
        (uid: string) => deleteUser(uid),
        options,
    );
}
