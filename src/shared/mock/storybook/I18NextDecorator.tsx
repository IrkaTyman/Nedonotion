import { type Decorator } from '@storybook/react';

import { I18NextWrapper } from '@shared/mock/jest';

export const I18NextDecorator: Decorator = Story => {
    return I18NextWrapper(<Story />);
};
