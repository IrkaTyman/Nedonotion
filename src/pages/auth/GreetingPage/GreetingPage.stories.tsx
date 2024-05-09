import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { GreetingPage, Props } from './GreetingPage';

const meta: Meta<Props> = {
    title: 'pages/auth/GreetingPage',
    component: GreetingPage,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
