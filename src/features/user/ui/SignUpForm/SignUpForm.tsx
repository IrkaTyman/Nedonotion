import { Form, Formik } from 'formik';
import { TFunction } from 'i18next';
import { FC, useCallback, useMemo } from 'react';
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useCreateUser } from '@features/user/lib/useCreateUser';

import Google from '@shared/assets/icons/Google.svg';
import { auth } from '@shared/config/firebase';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { FormField, getFlexContainerStyleClasses, Input } from '@shared/ui';
import { Button } from '@shared/ui/Button';
import { Separator } from '@shared/ui/Separator';

import styles from './SignUpForm.module.css';
import { SignUpData } from '../../model/SignUpData';
import { PasswordField } from '../PasswordField';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

const initialValue: SignUpData = {
    email: '',
    password: '',
    name: '',
};

const getValidationSchema = (t: TFunction) => Yup.object<SignUpData>({
    email: Yup.string().trim().required(t('enter_email', Namespace.Common)),
    password: Yup.string().trim()
        .required(t('enter_password', Namespace.Common))
        .min(8, t('enter_password', Namespace.Common)),
    name: Yup.string().trim().required(t('enter_name', Namespace.Common)),
});

export const SignUpForm: FC<Props> = typedMemo(function SignUpForm({
    className,
    'data-testid': dataTestId = 'SignUpForm',
}) {
    const { t } = useTranslation([Namespace.Auth.ns, Namespace.Common.ns]);
    const validationSchema = useMemo(() => getValidationSchema(t), [t]);

    const [signIn, , signInLoading, signInError] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, , signInWithGoogleLoading, signInWithGoogleError] = useSignInWithGoogle(auth);
    const { mutate: createUser, isLoading: isCreation } = useCreateUser({});

    const onSubmit = useCallback(async (form: SignUpData) => {
        const user = await signIn(form.email, form.password);

        if (!user) {
            return;
        }

        createUser({
            uid: user.user.uid,
            user: {
                email: form.email,
                name: form.name,
                uid: user.user.uid,
                avatarUrl: user.user.photoURL,
            },
        });
    }, [signIn]);

    const onGoogleButtonClick = useCallback(async () => {
        const user = await signInWithGoogle();

        if (!user) {
            return;
        }
        createUser({
            uid: user.user.uid,
            user: {
                email: user.user.email ?? '',
                name: user.user.displayName ?? '',
                uid: user.user.uid,
                avatarUrl: user.user.photoURL,
            },
        });
    }, [signInWithGoogle, createUser]);

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <Form
                    className={getBemClasses(
                        styles,
                        null,
                        null,
                        className,
                        getFlexContainerStyleClasses({ direction: 'column', alignItems: 'stretch', gap: 'm' }),
                    )}
                    data-testid={dataTestId}
                >
                    <Button variant="bordered" color="secondary" onClick={onGoogleButtonClick}>
                        <Google />
                        {t('continue_with_google', Namespace.Auth)}
                    </Button>

                    <Separator orientation="horizontal" className={getBemClasses(styles, 'separator')} />

                    <FormField<string>
                        name="email"
                        label={t('email', Namespace.Common)}
                        content={
                            ({ onChange, value }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    placeholder={t('enter_email', Namespace.Common)}
                                />
                            )
                        }
                    />

                    <PasswordField />

                    <FormField<string>
                        name="name"
                        label={t('name', Namespace.Common)}
                        content={
                            ({ onChange, value }) => (
                                <Input
                                    value={value}
                                    onChange={onChange}
                                    placeholder={t('enter_name', Namespace.Common)}
                                />
                            )
                        }
                    />

                    <Button type="submit" isLoading={signInLoading || signInWithGoogleLoading || isCreation}>
                        {t('start_create', Namespace.Auth)}
                    </Button>
                </Form>
            )}
        </Formik>
    );
});
