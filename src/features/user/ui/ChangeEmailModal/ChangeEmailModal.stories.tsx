import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { ChangeEmailModal, Props } from './ChangeEmailModal';

const meta: Meta<Props> = {
    title: 'features/user/ChangeEmailModal',
    component: ChangeEmailModal,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
