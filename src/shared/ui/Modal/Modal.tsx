import { FC, MouseEventHandler, PropsWithChildren, useCallback, useEffect } from 'react';

import CircleCross from '@shared/assets/icons/CircleCross.svg';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Portal } from '@shared/ui';

import styles from './Modal.module.css';

export type Props = ClassNameProps & TestProps & PropsWithChildren & Readonly<{
    /**
     * Открыто ли модальное окно
     */
    isOpen: boolean;

    /**
     * Метод закрытия модального окна
     */
    onClose?: () => void;

    /**
     * Показывать ли закрывающий крест
     * @default true
     */
    showClosingCross?: boolean;

    /**
     * Закрывать ли модальное окно по клику вне него
     * @default true
     */
    shouldCloseOnOverlayClick?: boolean;

    /**
     * Закрывать ли модальное окно по нажатию Esc
     * @default true
     */
    shouldCloseOnEsc?: boolean;

    /**
     * Размонтируется ли модальное окно из дерева
     * @default true
     */
    isUnmountable?: boolean;

    /**
     * Класс для overlay
     */
    overlayClassName?: string;

    /**
     * Класс для closeButton
     */
    closeButtonClassName?: string;
}>;

/**
 * Модальное окно
 */
export const Modal: FC<Props> = typedMemo(function Modal({
    isOpen,
    onClose,
    showClosingCross = true,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    isUnmountable = true,
    className,
    children,
    overlayClassName,
    closeButtonClassName,
}) {
    const onContentClick: MouseEventHandler<HTMLDivElement> = event => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape' && shouldCloseOnEsc) {
            onClose?.();
        }
    }, [onClose, shouldCloseOnEsc]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (isUnmountable && !isOpen) {
        return null;
    }
    return (
        <Portal element={document.querySelector('#modal-portal')! as HTMLElement}>
            <div
                onClick={shouldCloseOnOverlayClick ? onClose : undefined}
                className={getBemClasses(styles, 'overlay', { isOpen }, overlayClassName)}
            >
                <div
                    className={getBemClasses(styles, 'modal', null, className)}
                    onClick={onContentClick}
                >
                    {showClosingCross
                        ? <button
                            onClick={onClose}
                            className={getBemClasses(styles, 'closeButton', null, closeButtonClassName)}
                        >
                            <CircleCross className={getBemClasses(styles, 'closeButtonIcon')} />
                        </button>
                        : null}
                    {children}
                </div>
            </div>
        </Portal>
    );
});
