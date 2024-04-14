import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'shared/Checkbox',
    component: Checkbox,
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        onChange: () => {},
        label: 'check me',
    },
};

export const Disabled: Story = {
    args: {
        onChange: () => {},
        label: 'check me',
        disabled: true,
    },
};
