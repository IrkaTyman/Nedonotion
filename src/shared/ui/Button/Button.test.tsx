import { screen, render } from '@testing-library/react';

import { createWrapper } from '@shared/mock/axios';

import { Button } from './Button';

describe('shared/Button', () => {
    const wrapper = createWrapper({});

    beforeAll(() => {
        mockI18Next();
        window.scrollTo = jest.fn();
    });

    afterAll(() => {
        resetAxiosMock();
        restoreI18NextMock();
    });

    beforeEach(() => {
        mockAxios();
    });

    afterEach(() => {
        resetAxiosMock();
    });

    it('Компонент появился в DOM дереве', async () => {
        render(<Button />, { wrapper });

        const component = await screen.findByTestId('Button');
        expect(component).toBeInTheDocument();
    });
});
