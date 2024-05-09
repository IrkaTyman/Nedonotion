import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ArrowRight from '@shared/assets/icons/ArrowRight.svg';
import Logo from '@shared/assets/icons/Logo.svg';
import GreetingUrl from '@shared/assets/images/Greeting.png';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Button } from '@shared/ui';
import { FlexContainer, getFlexContainerStyleClasses } from '@shared/ui/FlexContainer';

import styles from './GreetingPage.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const GreetingPage: FC<Props> = typedMemo(function GreetingPage({
    className,
    'data-testid': dataTestId = 'GreetingPage',
}) {
    const { t } = useTranslation([Namespace.Auth.ns]);

    return (
        <div
            className={getBemClasses(
                styles,
                null,
                null,
                className,
                getFlexContainerStyleClasses({ direction: 'column' }),
            )}
            data-testid={dataTestId}
        >
            <header
                className={getBemClasses(
                    styles,
                    'header',
                    null,
                    getFlexContainerStyleClasses({ direction: 'row', justifyContent: 'space-between', gap: 'm' }),
                )}
            >
                <Logo className={getBemClasses(styles, 'logo')} />

                <FlexContainer
                    className={getBemClasses(styles, 'actions')}
                    direction="row"
                    gap="m"
                    alignItems="center"
                >
                    <Link to="/signin">
                        <Button variant="text">
                            {t('sign_in', Namespace.Auth)}
                        </Button>
                    </Link>

                    <Link to="/signup">
                        <Button variant="solid" color="main">
                            {t('start_create', Namespace.Auth)}
                        </Button>
                    </Link>
                </FlexContainer>
            </header>

            <main
                className={getBemClasses(
                    styles,
                    'main',
                    null,
                    getFlexContainerStyleClasses({ direction: 'column', gap: 'xl' }),
                )}
            >
                <FlexContainer
                    className={getBemClasses(styles, 'content')}
                    direction="column"
                    gap="xl"
                    justifyContent="center"
                    alignItems="center"
                >
                    <h1 className={getBemClasses(styles, 'title')}>
                        {t('greeting_title', Namespace.Auth)}
                    </h1>
                    <p className={getBemClasses(styles, 'subtitle')}>
                        {t('greeting_subtitle', Namespace.Auth)}
                    </p>
                    <Link to="/signup">
                        <Button
                            variant="solid"
                            color="main"
                        >
                            {t('start_create', Namespace.Auth)}
                            <ArrowRight className={getBemClasses(styles, 'buttonIcon')} />
                        </Button>
                    </Link>
                </FlexContainer>

                <img
                    alt={t('start_create', Namespace.Auth)}
                    src={GreetingUrl}
                    className={getBemClasses(styles, 'image')}
                />
            </main>
        </div>
    );
});
