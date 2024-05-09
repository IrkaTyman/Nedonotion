import { GoogleAuthProvider } from 'firebase/auth';
import { Form, Formik } from 'formik';
import { TFunction } from 'i18next';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Google from '@shared/assets/icons/Google.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { FlexContainer, FormField, getFlexContainerStyleClasses, Input } from '@shared/ui';
import { Button } from '@shared/ui/Button';
import { Separator } from '@shared/ui/Separator';

import styles from './SignUpForm.module.css';
import { useSignInWithGoogle } from '../../lib/useSignInWithGoogle';
import { useSignUpWithPassword } from '../../lib/useSignUpWithPassword';
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

    const signInWithGoogleMutation = useSignInWithGoogle();
    const signUpWithPasswordMutation = useSignUpWithPassword({
        onError: error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('Email exists');
            }
        },
    });

    return (
        <FlexContainer
            direction={'column'}
            gap="m"
            alignItems="stretch"
            className={getBemClasses(
                styles,
                null,
                null,
                className,
            )}
        >
            <Button variant="bordered" color="secondary" onClick={() => signInWithGoogleMutation.mutate()}>
                <Google />
                {t('continue_with_google', Namespace.Auth)}
            </Button>

            <Separator orientation="horizontal" className={getBemClasses(styles, 'separator')} />

            <Formik
                initialValues={initialValue}
                onSubmit={signUpWithPasswordMutation.mutate}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form
                        className={getFlexContainerStyleClasses({ direction: 'column', alignItems: 'stretch', gap: 'm' })}
                        data-testid={dataTestId}
                    >
                        <FormField<string>
                            name="email"
                            label={t('email', Namespace.Common)}
                            content={
                                ({ onChange, value }) => (
                                    <Input
                                        value={value}
                                        onBlur={event => onChange(event.target.value.trim())}
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
                                        onBlur={event => onChange(event.target.value.trim())}
                                        onChange={onChange}
                                        placeholder={t('enter_name', Namespace.Common)}
                                    />
                                )
                            }
                        />

                        <Button type="submit" isLoading={signUpWithPasswordMutation.isLoading || signInWithGoogleMutation.isLoading}>
                            {t('start_create', Namespace.Auth)}
                        </Button>
                    </Form>
                )}
            </Formik>
        </FlexContainer>

    );
});
