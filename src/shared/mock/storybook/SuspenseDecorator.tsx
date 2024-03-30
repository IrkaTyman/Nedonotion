import { Decorator } from '@storybook/react';

import { SuspenseWrapper } from '@shared/mock/jest';

export const SuspenseDecorator: Decorator = Story => {
    return SuspenseWrapper(<Story />);
};
