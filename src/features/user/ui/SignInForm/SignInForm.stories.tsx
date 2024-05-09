import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { SignInForm, Props } from './SignInForm';

const meta: Meta<Props> = {
    title: 'features/user/SignInForm',
    component: SignInForm,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
