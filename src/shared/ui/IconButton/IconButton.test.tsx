import { screen, render } from '@testing-library/react';

import { createWrapper } from '@shared/mock/jest';

import { IconButton } from './IconButton';

describe('shared/IconButton', () => {
    const wrapper = createWrapper({});

    it('Компонент появился в DOM дереве', async () => {
        render(<IconButton />, { wrapper });

        const component = await screen.findByTestId('IconButton');
        expect(component).toBeInTheDocument();
    });
});
