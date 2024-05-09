import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { SignInPage, Props } from './SignInPage';

const meta: Meta<Props> = {
    title: 'pages/auth/SignInPage',
    component: SignInPage,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
