import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { SignUpForm, Props } from './SignUpForm';

const meta: Meta<Props> = {
    title: 'features/user/SignUpForm',
    component: SignUpForm,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
