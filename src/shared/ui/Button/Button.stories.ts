import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { Button, Props } from './Button';

const meta: Meta<Props> = {
    title: 'shared/Button',
    component: Button,
    decorators: createDecorators({}),
    args: {
        children: 'Click me!',
    },
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};

export const MainSolid: Story = {
    args: {
        color: 'main',
    },
};

export const Bordered: Story = {
    args: {
        variant: 'bordered',
    },
};

export const BorderedSecondary: Story = {
    args: {
        variant: 'bordered',
        color: 'secondary',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
    },
};
