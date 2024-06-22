import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import CircleCross from '@shared/assets/icons/CircleCross.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { IconButton, Image, Tooltip } from '@shared/ui';

import styles from './FileInputName.module.css';
import { useFileInputContext } from '../FileInputContext';

export type Props = ClassNameProps & TestProps & Readonly<{
    /**
     * Тип содержимого подсказки
     */
    tooltipType: 'name' | 'image';

    /**
     * Класс обертки
     */
    wrapperClassName?: string;
}>;

/**
 * Отображение выбранного файла в виде имени файла
 */
export const FileInputName: FC<Props> = typedMemo(function FileInputName({
    tooltipType,
    className,
    wrapperClassName,
    'data-testid': dataTestId = 'FileInputName',
}) {
    const { t } = useTranslation([Namespace.Common.ns]);
    const { fileName, onClear, fileUrl, disabled } = useFileInputContext();

    const tooltipImage = useCallback(() => {
        return (
            <div className={getBemClasses(styles, 'imageTooltip')}>
                <Image
                    src={fileUrl!}
                    alt={t('fileinput_image', Namespace.Common)}
                    className={getBemClasses(styles, 'image')}
                />
            </div>
        );
    }, [fileUrl, t]);

    return (
        <div className={getBemClasses(styles, 'wrapper', null, wrapperClassName)}>
            <Tooltip
                hidden={disabled}
                content={tooltipType === 'image' ? undefined : fileName!}
                render={tooltipType === 'image'
                    ? tooltipImage
                    : undefined}
            >
                <div
                    className={getBemClasses(styles, null, { disabled }, className)}
                    data-testid={dataTestId}
                >
                    <span className={getBemClasses(styles, 'name')}>
                        {fileName}
                    </span>
                </div>
            </Tooltip>
            {!disabled && <IconButton
                onClick={onClear}
                className={getBemClasses(styles, 'clearButton')}
                data-testid={`${dataTestId}.clearButton`}
            >
                <CircleCross className={getBemClasses(styles, 'clearButtonIcon')} />
            </IconButton>}
        </div>
    );
});
