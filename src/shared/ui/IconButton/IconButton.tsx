import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';

import styles from './IconButton.module.css';

export type Props =
    ClassNameProps &
    TestProps &
    DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    Readonly<{}>;

/**
 * Кнопка-иконка
 */
export const IconButton: FC<Props> = typedMemo(function IconButton({
    className,
    'data-testid': dataTestId = 'IconButton',
    ...buttonProps
}) {
    return (
        <button
            className={getBemClasses(styles, null, null, className)}
            data-testid={dataTestId}
            {...buttonProps}
        />
    );
});
