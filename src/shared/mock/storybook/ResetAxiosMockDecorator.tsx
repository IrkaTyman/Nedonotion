import { Decorator } from '@storybook/react';

import { resetAxiosMock } from '@shared/mock/axios';

/**
 * Сбрасывает все моки с http
 * @param story стори, которую оборачиваем
 */
export const ResetAxiosMockDecorator: Decorator = story => {
    resetAxiosMock();

    return story();
};
