import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Button, Modal } from '@shared/ui';

import styles from './ChangeEmailModal.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const ChangeEmailModal: FC<Props> = typedMemo(function ChangeEmailModal({
    className,
    'data-testid': dataTestId = 'ChangeEmailModal',
}) {
    const { t } = useTranslation([Namespace.Common.ns]);

    return (
        <>
            <Button variant="bordered" color="secondary">

            </Button>
            <Modal
                className={getBemClasses(styles, null, null, className)}
                data-testid={dataTestId}
                isOpen={}
            >

            </Modal>
        </>
    );
});
