import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { SignUpPage, Props } from './SignUpPage';

const meta: Meta<Props> = {
    title: 'pages/auth/SignUpPage',
    component: SignUpPage,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
