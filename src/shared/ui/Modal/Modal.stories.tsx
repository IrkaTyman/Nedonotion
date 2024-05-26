import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { createDecorators } from '@shared/mock/storybook';
import { Button } from '@shared/ui';

import { Modal, Props } from './Modal';

const meta: Meta<Props> = {
    title: 'shared/Modal',
    component: Modal,
    decorators: createDecorators({}),

};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        children: 'Modal',
    },
    render: props => {
        const [isOpen, setIsOpen] = useState(false);

        return (<>
            <Button onClick={() => setIsOpen(true)}>Click</Button>
            <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>);
    },
};
