import { type Decorator } from '@storybook/react';

import { QueryWrapper } from '@shared/mock/jest';

/**
 * Storybook-декоратор для работы React-Query
 * @param Story
 */
export const QueryDecorator: Decorator = Story => {
    return QueryWrapper(<Story />);
};
