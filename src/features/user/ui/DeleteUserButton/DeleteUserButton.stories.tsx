import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { DeleteUserButton, Props } from './DeleteUserButton';

const meta: Meta<Props> = {
    title: 'features/user/DeleteUserButton',
    component: DeleteUserButton,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        uid: '',
    },
};
