import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import CircleCross from '@shared/assets/icons/CircleCross.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Button, IconButton, Image, ImageProps } from '@shared/ui';

import styles from './FileInputImage.module.css';
import { useFileInputContext } from '../FileInputContext';

export type Props = ClassNameProps & TestProps & Omit<ImageProps, 'src' | 'alt'> & Readonly<{}>;

/**
 * Отображение выбранного файла в виде изображения
 */
export const FileInputImage: FC<Props> = typedMemo(function FileInputImage({
    className,
    'data-testid': dataTestId = 'FileInputImage',
    ...imageProps
}) {
    const { t } = useTranslation([Namespace.Common.ns]);
    const { fileUrl, onClear, disabled } = useFileInputContext();

    return (
        <div
            className={getBemClasses(styles, null, { disabled }, className)}
            data-testid={dataTestId}
            {...imageProps}
        >
            <Image
                src={fileUrl!}
                alt={t('fileinput_image', Namespace.Common)}
                className={getBemClasses(styles, 'image')}
            />
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
