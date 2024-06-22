import { useMutation } from 'react-query';

import { deleteUser } from '@features/user/api/deleteUser';

import { AxiosUseMutationOptions } from '@shared/types';

/**
 * Хук удаления пользователя
 * @param options
 */
export function useDeleteUser(
    options?: AxiosUseMutationOptions<void, string>,
) {
    return useMutation(
        (uid: string) => deleteUser(uid),
        options,
    );
}
