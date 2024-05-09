import { Meta, StoryObj } from '@storybook/react';

import { Dropdown, Props } from './Dropdown';

const meta: Meta<Props> = {
    title: 'shared/Dropdown',
    component: Dropdown,
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        renderLabel: () => 'summary',
        children: 'content\ncontent\ncontent\ncontent end',
    },
};
