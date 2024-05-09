import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SignUpForm } from '@features/user';

import SmallLogo from '@shared/assets/icons/SmallLogo.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { getFlexContainerStyleClasses } from '@shared/ui';

import styles from './SignUpPage.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const SignUpPage: FC<Props> = typedMemo(function SignUpPage({
    className,
    'data-testid': dataTestId = 'SignUpPage',
}) {
    const { t } = useTranslation();

    return (
        <div
            className={getBemClasses(styles, null, null, className)}
            data-testid={dataTestId}
        >
            <header className={getBemClasses(styles, 'header', null, getFlexContainerStyleClasses({ direction: 'row', alignItems: 'center', gap: 'm' }))}>
                <SmallLogo className={getBemClasses(styles, 'logo')} />
            </header>
            <main className={getBemClasses(styles, 'main', null, getFlexContainerStyleClasses({ direction: 'column', alignItems: 'center', justifyContent: 'center', gap: 'xxl' }))}>
                <h1 className={getBemClasses(styles, 'title')}>
                    {t('sign_up', Namespace.Auth)}
                </h1>

                <SignUpForm className={getBemClasses(styles, 'form')} />
            </main>
        </div>
    );
});
