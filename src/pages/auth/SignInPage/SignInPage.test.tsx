import { screen, render } from '@testing-library/react';

import {
    mockI18Next,
    restoreI18NextMock,
} from '@shared/mock/i18n';
import {
    createWrapper,
} from '@shared/mock/jest';

import { SignInPage } from './SignInPage';

describe('pages/auth/SignInPage', () => {
    const wrapper = createWrapper({});

    beforeAll(() => {
        mockI18Next();
        window.scrollTo = jest.fn();
    });

    afterAll(() => {
        restoreI18NextMock();
    });

    it('Компонент появился в DOM дереве', async () => {
        render(<SignInPage />, { wrapper });

        const component = await screen.findByTestId('SignInPage');
        expect(component).toBeInTheDocument();
    });
});
