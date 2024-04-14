import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';

import styles from './Button.module.css';

export type Props = ClassNameProps &
    TestProps &
    DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    Readonly<{
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
    variant = 'solid',
    color = 'primary',
    className,
    'data-testid': dataTestId = 'Button',
    ...buttonProps
}) {
    return (
        <button
            className={getBemClasses(styles, null, { variant, color }, className)}
            data-testid={dataTestId}
            {...buttonProps}
        />
    );
});
