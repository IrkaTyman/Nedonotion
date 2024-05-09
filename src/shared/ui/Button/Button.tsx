import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { FlexContainer, Loader } from '@shared/ui';

import styles from './Button.module.css';

export type Props = ClassNameProps &
    TestProps &
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    Readonly<{
        /**
         * Находится ли кнопка в состоянии загрузки
         */
        isLoading?: boolean;

        /**
         * Контент кнопки при загрузке
         */
        loader?: ReactNode;

        /**
         * Тип кнопки
         * @default solid
         */
        variant?: 'text' | 'bordered' | 'solid';
        /**
         * Цвет кнопки
         * @default primary
         */
        color?: 'main' | 'primary' | 'secondary';
    }>;

/**
 * Кнопка
 */
export const Button: FC<Props> = typedMemo(function Button({
    isLoading,
    loader,
    variant = 'solid',
    color = 'primary',
    className,
    'data-testid': dataTestId = 'Button',
    ...buttonProps
}) {
    const { t } = useTranslation();
    const ContentComponent = useMemo((): ReactNode => {
        return isLoading
            ? loader ??
            <FlexContainer
                direction="row"
                alignItems="center"
                gap="xs"
                overflow="nowrap"
            >
                <Loader variant={'circle'} size={14} className={getBemClasses(styles, 'loader')} />
                {`${t('core_loading', Namespace.Common)}...`}
            </FlexContainer>
            : buttonProps.children;
    }, [isLoading, buttonProps, t]);

    return (
        <button
            className={getBemClasses(styles, null, { variant, color }, className)}
            data-testid={dataTestId}
            {...buttonProps}
        />
    );
});
