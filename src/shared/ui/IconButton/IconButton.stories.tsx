import { Meta, StoryObj } from '@storybook/react';

import CircleCross from '@shared/assets/icons/CircleCross.svg';
import { createDecorators } from '@shared/mock/storybook';

import { IconButton, Props } from './IconButton';

const meta: Meta<Props> = {
    title: 'shared/IconButton',
    component: IconButton,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        children: <CircleCross />,
    },
};
