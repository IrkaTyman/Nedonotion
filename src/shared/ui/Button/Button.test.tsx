import { screen, render } from '@testing-library/react';

import { createWrapper } from '@shared/mock/jest';

import { Button } from './Button';

describe('shared/Button', () => {
    const wrapper = createWrapper({});

    it('Компонент появился в DOM дереве', async () => {
        render(<Button />, { wrapper });

        const component = await screen.findByTestId('Button');
        expect(component).toBeInTheDocument();
    });

    it('Компонент появился в DOM дереве', async () => {
        render(<Button />, { wrapper });

        const component = await screen.findByTestId('Button');
        expect(component).toBeInTheDocument();
    });
});
