import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import CircleCross from '@shared/assets/icons/CircleCross.svg';
import { createDecorators } from '@shared/mock/storybook';

import { Input, Props } from './Input';

const meta: Meta<Props> = {
    title: 'shared/Input',
    component: Input,
    decorators: createDecorators({}),
    render: props => {
        const [value, setValue] = useState('');

        return <Input {...props} value={value} onChange={setValue} />;
    },
    args: {
        placeholder: 'Enter text',
    },
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};

export const WithContent: Story = {
    args: {
        startContent: <CircleCross style={{ height: '16px', width: '16px' }} />,
        endContent: <CircleCross style={{ height: '16px', width: '16px' }} />,
    },
};
