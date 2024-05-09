import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { ChangeLanguageDropdown, Props } from './ChangeLanguageDropdown';

const meta: Meta<Props> = {
    title: 'features/user/ChangeLanguageDropdown',
    component: ChangeLanguageDropdown,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
