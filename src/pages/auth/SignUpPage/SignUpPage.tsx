import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ChangeLanguageDropdown, SignUpForm } from '@features/user';

import SmallLogo from '@shared/assets/icons/SmallLogo.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Button, FlexContainer, getFlexContainerStyleClasses } from '@shared/ui';

import styles from './SignUpPage.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const SignUpPage: FC<Props> = typedMemo(function SignUpPage({
    className,
    'data-testid': dataTestId = 'SignUpPage',
}) {
    const { t, i18n } = useTranslation([Namespace.Auth.ns]);
    console.log(t, i18n);
    return (
        <div
            className={getBemClasses(styles, null, null, className)}
            data-testid={dataTestId}
        >
            <header className={getBemClasses(styles, 'header', null, getFlexContainerStyleClasses({ direction: 'row', alignItems: 'center', gap: 'm' }))}>
                <SmallLogo className={getBemClasses(styles, 'logo')} />
                <ChangeLanguageDropdown />
            </header>
            <main className={getBemClasses(styles, 'main', null, getFlexContainerStyleClasses({ direction: 'column', alignItems: 'center', justifyContent: 'center', gap: 'xxl' }))}>
                <h1 className={getBemClasses(styles, 'title')}>
                    {t('sign_up', Namespace.Auth)}
                </h1>

                <SignUpForm className={getBemClasses(styles, 'form')} />

                <FlexContainer direction="row" gap="xs" alignItems="center">
                    <p className={getBemClasses(styles, 'back')}>
                        {t('sign_up__has_account', Namespace.Auth)}
                    </p>
                    <Link to="/signin">
                        <Button variant="text">
                            {t('sign_in', Namespace.Auth)}
                        </Button>
                    </Link>
                </FlexContainer>
            </main>
        </div>
    );
});
