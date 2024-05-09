import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Eye from '@shared/assets/icons/Eye.svg';
import EyeSlash from '@shared/assets/icons/EyeSlash.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { FormField, IconButton, Input } from '@shared/ui';

import styles from './PasswordField.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const PasswordField: FC<Props> = typedMemo(function PasswordField({
    className,
    'data-testid': dataTestId = 'PasswordField',
}) {
    const { t } = useTranslation([Namespace.Common.ns]);
    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = useCallback(() => setIsVisible(isVisible => !isVisible), []);

    return (
        <FormField<string>
            name="password"
            className={getBemClasses(styles, null, null, className)}
            data-testid={dataTestId}
            label={t('password', Namespace.Common)}
            content={
                ({ onChange, value }) => (
                    <Input
                        value={value}
                        type={isVisible ? 'text' : 'password'}
                        onChange={onChange}
                        onBlur={event => onChange(event.target.value.trim())}
                        placeholder={t('enter_password', Namespace.Common)}
                        endContent={
                            isVisible
                                ? <IconButton
                                    className={getBemClasses(styles, 'button')}
                                    onClick={toggleIsVisible}
                                >
                                    <EyeSlash className={getBemClasses(styles, 'buttonIcon')} />
                                </IconButton>
                                : <IconButton
                                    className={getBemClasses(styles, 'button')}
                                    onClick={toggleIsVisible}
                                >
                                    <Eye className={getBemClasses(styles, 'buttonIcon')} />
                                </IconButton>
                        }
                    />
                )
            }
        />
    );
});
