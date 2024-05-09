import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { SelectItem } from '@shared/ui/Select/SelectItem';

import classNames from '*.css';
import styles from './ChangeLanguageDropdown.module.css';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

const availableLanguages: SelectItem<string>[] = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
];

export const ChangeLanguageDropdown: FC<Props> = typedMemo(function ChangeLanguageDropdown({
    className,
    'data-testid': dataTestId = 'ChangeLanguageDropdown',
}) {
    const { t, i18n } = useTranslation();
    const [languageOption, setLanguageOption] = useState(
        availableLanguages.find(({ value }) => value === i18n.language),
    );

    const changeLanguage = useCallback(async (item: SelectItem<string>) => {
        await i18n.changeLanguage(item.value);
        setLanguageOption(item);
    }, [i18n]);

    return (
        <Select
            value={languageOption}
            onChange={changeLanguage}
            options={availableLanguages}
            className={getBemClasses(styles, null, null, className)}
            isSearchable={false}
            classNames={{
                menu: state => getBemClasses(styles, 'menu'),
                control: state => getBemClasses(styles, 'control', { isFocused: state.isFocused }),
                indicatorsContainer: state => getBemClasses(styles, 'indicatorsContainer'),
                indicatorSeparator: state => getBemClasses(styles, 'indicatorSeparator'),
                menuList: state => getBemClasses(styles, 'menuList'),
                option: state => getBemClasses(styles, 'option', { active: state.label === languageOption?.label }),
                valueContainer: state => getBemClasses(styles, 'valueContainer'),
            }}
        />
    );
});
