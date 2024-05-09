import { screen, render } from '@testing-library/react';

import {
    mockI18Next,
    restoreI18NextMock,
} from '@shared/mock/i18n';
import {
    createWrapper,
} from '@shared/mock/jest';

import { SignUpForm } from './SignUpForm';

describe('features/user/SignUpForm', () => {
    const wrapper = createWrapper({});

    beforeAll(() => {
        mockI18Next();
        window.scrollTo = jest.fn();
    });

    afterAll(() => {
        restoreI18NextMock();
    });

    it('Компонент появился в DOM дереве', async () => {
        render(<SignUpForm />, { wrapper });

        const component = await screen.findByTestId('SignUpForm');
        expect(component).toBeInTheDocument();
    });
});
