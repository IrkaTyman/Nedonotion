import { FC } from 'react';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { ContainerProps, IndicatorsContainerProps } from 'react-select/dist/declarations/src/components/containers';
import { ControlProps } from 'react-select/dist/declarations/src/components/Control';
import { GroupHeadingProps, GroupProps } from 'react-select/dist/declarations/src/components/Group';
import {
    ClearIndicatorProps,
    DropdownIndicatorProps,
    IndicatorSeparatorProps, LoadingIndicatorProps,
} from 'react-select/dist/declarations/src/components/indicators';
import { InputProps } from 'react-select/dist/declarations/src/components/Input';
import {
    MenuListProps,
    MenuProps,
    NoticeProps,
    PortalStyleArgs,
} from 'react-select/dist/declarations/src/components/Menu';
import { MultiValueProps } from 'react-select/dist/declarations/src/components/MultiValue';
import { OptionProps } from 'react-select/dist/declarations/src/components/Option';
import { PlaceholderProps } from 'react-select/dist/declarations/src/components/Placeholder';
import { SingleValueProps } from 'react-select/dist/declarations/src/components/SingleValue';
import { CSSObjectWithLabel } from 'react-select/dist/declarations/src/types';

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';

import styles from './Select.module.css';

export type Props = ClassNameProps & SelectProps & Readonly<{}>;

export const Select: FC<Props> = typedMemo(function Select({
    className,
    ...selectProps
}) {
    return (
        <ReactSelect
            className={getBemClasses(styles, null, null, className)}
            classNames={{
                clearIndicator: state => getBemClasses(styles, 'clearIndicator'),
                container: state => getBemClasses(styles, 'container'),
                control: state => getBemClasses(styles, 'control', { isFocused: state.isFocused }),
                dropdownIndicator: state => getBemClasses(styles, 'dropdownIndicator'),
                group: state => getBemClasses(styles, 'group'),
                groupHeading: state => getBemClasses(styles, 'groupHeading'),
                indicatorsContainer: state => getBemClasses(styles, 'indicatorsContainer'),
                indicatorSeparator: state => getBemClasses(styles, 'indicatorSeparator'),
                input: state => getBemClasses(styles, 'input'),
                loadingIndicator: state => getBemClasses(styles, 'loadingIndicator'),
                loadingMessage: state => getBemClasses(styles, 'loadingMessage'),
                menu: state => getBemClasses(styles, 'menu'),
                menuList: state => getBemClasses(styles, 'menuList'),
                menuPortal: state => getBemClasses(styles, 'menuPortal'),
                multiValue: state => getBemClasses(styles, 'multiValue'),
                multiValueLabel: state => getBemClasses(styles, 'multiValueLabel'),
                multiValueRemove: state => getBemClasses(styles, 'multiValueRemove'),
                noOptionsMessage: state => getBemClasses(styles, 'noOptionsMessage'),
                option: state => getBemClasses(styles, 'option'),
                placeholder: state => getBemClasses(styles, 'placeholder'),
                singleValue: state => getBemClasses(styles, 'singleValue'),
                valueContainer: state => getBemClasses(styles, 'valueContainer'),
            }}
            {...selectProps}
        />
    );
});
