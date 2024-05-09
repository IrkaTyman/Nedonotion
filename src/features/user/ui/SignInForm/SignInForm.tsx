import { Form, Formik } from 'formik';
import { TFunction } from 'i18next';
import { FC, useCallback, useMemo } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useCreateUser } from '@features/user/lib/useCreateUser';
import { SignInData } from '@features/user/model/SignInData';

import Google from '@shared/assets/icons/Google.svg';
import { auth } from '@shared/config/firebase';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { FormField, getFlexContainerStyleClasses, Input } from '@shared/ui';
import { Button } from '@shared/ui/Button';
import { Separator } from '@shared/ui/Separator';

import styles from './SignInForm.module.css';
import { PasswordField } from '../PasswordField';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

const initialValue: SignInData = {
    email: '',
    password: '',
};

const getValidationSchema = (t: TFunction) => Yup.object<SignInData>({
    email: Yup.string().trim().required(t('enter_email', Namespace.Common)),
    password: Yup.string().trim()
        .required(t('enter_password', Namespace.Common))
        .min(8, t('enter_password', Namespace.Common)),
});

export const SignInForm: FC<Props> = typedMemo(function SignInForm({
    className,
    'data-testid': dataTestId = 'SignInForm',
}) {
    const { t } = useTranslation([Namespace.Auth.ns, Namespace.Common.ns]);
    const validationSchema = useMemo(() => getValidationSchema(t), [t]);

    const [signIn, , signInLoading, signInError] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, , signInWithGoogleLoading, signInWithGoogleError] = useSignInWithGoogle(auth);
    const { mutate: createUser } = useCreateUser({});

    const onSubmit = useCallback(async (form: SignInData) => {
        await signIn(form.email, form.password);
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

                    <Button type="submit" isLoading={signInLoading || signInWithGoogleLoading}>
                        {t('start_create', Namespace.Auth)}
                    </Button>
                </Form>
            )}
        </Formik>
    );
});
