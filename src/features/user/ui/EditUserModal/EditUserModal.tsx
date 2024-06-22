import { ref, getDownloadURL } from 'firebase/storage';
import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useTranslation } from 'react-i18next';

import { useUpdateUser } from '@features/user/lib/useUpdateUser';
import { DeleteUserButton } from '@features/user/ui/DeleteUserButton';

import { useGetCurrentUserListener } from '@entities/user';

import { storage } from '@shared/config/firebase';
import { Namespace } from '@shared/config/i18n';
import { useDebounceState } from '@shared/hooks';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import {
    FileInput,
    FileInputImage,
    FlexContainer,
    getFlexContainerStyleClasses,
    imageAcceptTypes, Input, Loader,
    Separator,
} from '@shared/ui';
import { Modal } from '@shared/ui/Modal/Modal';

import styles from './EditUserModal.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{
    trigger: (open: () => void) => ReactNode;
}>;

export const EditUserModal: FC<Props> = typedMemo(function EditUserModal({
    trigger,
    className,
    'data-testid': dataTestId = 'EditUserModal',
}) {
    const { t } = useTranslation([Namespace.Common.ns]);
    const [isOpen, setIsOpen] = useState(false);

    const [userSnap, userLoading] = useGetCurrentUserListener();
    const user = useMemo(() => userSnap?.data(), [userSnap]);
    const [uploadFile] = useUploadFile();
    const { mutate: update } = useUpdateUser();

    const [name, setName] = useState<string | null>(null);
    const debounceName = useDebounceState(name, 300);

    const upload = async (file: File | null) => {
        if (file && user) {
            const storageRef = ref(storage, 'avatar.jpg');

            const result = await uploadFile(storageRef, file, {
                contentType: 'image/jpeg',
            }).then(snapshot => snapshot && getDownloadURL(snapshot.ref));

            update({ uid: user.uid, user: { avatarUrl: result } });
        }
    };

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (name === null && user) {
            setName(user.name);
        }
    }, [user]);

    useEffect(() => {
        if (debounceName === null) {
            return;
        }
        update({ uid: user?.uid ?? '', user: { name: debounceName } });
    }, [debounceName]);

    return (
        <>
            {trigger(open)}
            <Modal
                isOpen={isOpen}
                onClose={close}
                className={getBemClasses(styles, null, null, getFlexContainerStyleClasses({ direction: 'column', gap: 'xl' }), className)}
                data-testid={dataTestId}
            >
                {
                    userLoading || !user
                        ? <Loader />
                        : <>
                            <FlexContainer direction="column" gap="m" alignItems="stretch">
                                <FlexContainer
                                    alignItems="stretch"
                                    direction="column"
                                    className={getBemClasses(styles, 'headerContainer')}
                                >
                                    <h4 className={getBemClasses(styles, 'header')}>
                                        {t('my_profile', Namespace.Common)}
                                    </h4>
                                    <Separator
                                        className={getBemClasses(styles, 'headerSeparator')}
                                        orientation="horizontal"
                                    />
                                </FlexContainer>
                                <FlexContainer direction="row" gap="m">
                                    <FileInput
                                        fileUrl={user.avatarUrl}
                                        onChangeFile={upload}
                                        acceptType={imageAcceptTypes}
                                        className={getBemClasses(styles, 'fileInput')}
                                    >
                                        <FileInputImage className={getBemClasses(styles, 'fileInputFilled')} />
                                    </FileInput>

                                    <FlexContainer
                                        direction="column"
                                        alignItems="stretch"
                                        gap="xs"
                                    >
                                        <label htmlFor="name" className={getBemClasses(styles, 'label')}>
                                            {t('preferred_name', Namespace.Common)}
                                        </label>
                                        <Input
                                            name="name"
                                            value={name ?? ''}
                                            onChange={value => setName(value)}
                                            onBlur={event => setName(event.target.value.trim())}
                                        />
                                    </FlexContainer>
                                </FlexContainer>
                            </FlexContainer>

                            <FlexContainer direction="column" gap="m" alignItems="stretch">
                                <FlexContainer
                                    direction="column"
                                    alignItems="stretch"
                                    className={getBemClasses(styles, 'headerContainer')}
                                >
                                    <h4 className={getBemClasses(styles, 'header')}>
                                        {t('secure', Namespace.Common)}
                                    </h4>
                                    <Separator
                                        className={getBemClasses(styles, 'headerSeparator')}
                                        orientation="horizontal"
                                    />
                                </FlexContainer>

                                <FlexContainer
                                    direction="row"
                                    gap="m"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <FlexContainer direction="column" gap="xs">
                                        <p className={getBemClasses(styles, 'secureHeader')}>
                                            {t('email', Namespace.Common)}
                                        </p>
                                        <p className={getBemClasses(styles, 'secureValue')}>
                                            {user.email}
                                        </p>
                                    </FlexContainer>
                                </FlexContainer>
                                <FlexContainer
                                    direction="row"
                                    gap="m"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <p className={getBemClasses(styles, 'secureHeader')}>
                                        {t('password', Namespace.Common)}
                                    </p>
                                </FlexContainer>
                            </FlexContainer>

                            <FlexContainer direction="column" gap="m" alignItems="stretch">
                                <FlexContainer
                                    alignItems="stretch"
                                    direction="column"
                                    className={getBemClasses(styles, 'headerContainer', { isDanger: true })}
                                >
                                    <h4 className={getBemClasses(styles, 'header')}>
                                        {t('danger_zone', Namespace.Common)}
                                    </h4>
                                    <Separator
                                        className={getBemClasses(styles, 'headerSeparator')}
                                        orientation="horizontal"
                                    />
                                </FlexContainer>
                                <DeleteUserButton className={getBemClasses(styles, 'deleteButton')} uid={user.uid} />
                            </FlexContainer>
                        </>
                }
            </Modal>
        </>
    );
});
