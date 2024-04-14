import {
    ChangeEventHandler,
    DetailedHTMLProps,
    FC,
    forwardRef,
    InputHTMLAttributes,
    MouseEventHandler,
    ReactNode,
    useCallback,
} from 'react';

import CircleCross from '@shared/assets/icons/CircleCross.svg';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { getFlexContainerStyleClasses } from '@shared/ui/FlexContainer';
import { IconButton } from '@shared/ui/IconButton';

import styles from './Input.module.css';

export type Props =
    ClassNameProps &
    TestProps &
    Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> &
    Readonly<{
        /**
         * Элемент в начале поля ввода
         */
        startContent?: ReactNode;

        /**
         * Элемент в конце поля ввода
         */
        endContent?: ReactNode;

        /**
         * Метод изменения значения
         * @param value новое значение
         */
        onChange?: (value: string) => void;
    }>;

export const Input: FC<Props> = typedMemo(forwardRef(function Input({
    startContent,
    endContent,
    onChange: onChangeInner,
    className,
    'data-testid': dataTestId = 'Input',
    ...inputProps
}, ref) {
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
        onChangeInner?.(event.target.value);
    }, [onChangeInner]);

    const onClear: MouseEventHandler<HTMLButtonElement> = useCallback(event => {
        onChangeInner?.('');
    }, [onChangeInner]);

    return (
        <label
            className={getBemClasses(
                styles,
                null,
                null,
                className,
                getFlexContainerStyleClasses({ direction: 'row', overflow: 'nowrap', alignItems: 'center', gap: 'xs' }),
            )}
            data-testid={dataTestId}
        >
            {startContent}
            <input
                {...inputProps}
                onChange={onChange}
                ref={ref}
                className={getBemClasses(styles, 'input')}
            />

            {inputProps.value
                ? <IconButton onClick={onClear}>
                    <CircleCross />
                </IconButton>
                : null
            }

            {endContent}
        </label>
    );
}));
