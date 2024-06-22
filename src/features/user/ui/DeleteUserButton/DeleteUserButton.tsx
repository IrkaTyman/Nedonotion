import { deleteDoc } from 'firebase/firestore';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useDeleteUser } from '@features/user/lib/useDeleteUser';

import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Button } from '@shared/ui';

import styles from './DeleteUserButton.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{
    uid: string;
}>;

export const DeleteUserButton: FC<Props> = typedMemo(function DeleteUserButton({
    uid,
    className,
    'data-testid': dataTestId = 'DeleteUserButton',
}) {
    const { t } = useTranslation([Namespace.Common.ns]);
    const { mutate: deleteUser, isLoading } = useDeleteUser();

    return (
        <Button
            variant="bordered"
            color="danger"
            isLoading={isLoading}
            onClick={() => deleteUser(uid)}
            className={getBemClasses(styles, null, null, className)}
            data-testid={dataTestId}
        >
            {t('delete_account', Namespace.Common)}
        </Button>
    );
});
