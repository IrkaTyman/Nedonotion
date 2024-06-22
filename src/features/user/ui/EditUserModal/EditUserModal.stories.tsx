import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';
import { Button } from '@shared/ui';

import { EditUserModal, Props } from './EditUserModal';

const meta: Meta<Props> = {
    title: 'features/user/EditUserModal',
    component: EditUserModal,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        trigger: open => <Button onClick={open}>Открыть</Button>,
    },
};
