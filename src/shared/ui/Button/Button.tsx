import { FC } from 'react';

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';

import styles from './Button.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

export const Button: FC<Props> = typedMemo(function Button({
    className,
    'data-testid': dataTestId = 'Button',
}) {
    return (
        <div
            className={getBemClasses(styles, null, null, className)}
            data-testid={dataTestId}
        >

        </div>
    );
});
