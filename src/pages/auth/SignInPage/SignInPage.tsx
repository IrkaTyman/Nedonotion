import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SignInForm } from '@features/user';

import SmallLogo from '@shared/assets/icons/SmallLogo.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { getFlexContainerStyleClasses } from '@shared/ui';

import styles from './SignInPage.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const SignInPage: FC<Props> = typedMemo(function SignInPage({
    className,
    'data-testid': dataTestId = 'SignInPage',
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
                    {t('sign_in', Namespace.Auth)}
                </h1>

                <SignInForm className={getBemClasses(styles, 'form')} />
            </main>
        </div>
    );
});
