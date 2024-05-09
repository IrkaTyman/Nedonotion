import { screen, render } from '@testing-library/react';

import {
    mockI18Next,
    restoreI18NextMock,
} from '@shared/mock/i18n';
import { createWrapper } from '@shared/mock/jest';

import { ChangeLanguageDropdown } from './ChangeLanguageDropdown';

describe('features/user/ChangeLanguageDropdown', () => {
    const wrapper = createWrapper({});

    beforeAll(() => {
        mockI18Next();
        window.scrollTo = jest.fn();
    });

    afterAll(() => {
        restoreI18NextMock();
    });
    it('Компонент появился в DOM дереве', async () => {
        render(<ChangeLanguageDropdown />, { wrapper });

        const component = await screen.findByTestId('ChangeLanguageDropdown');
        expect(component).toBeInTheDocument();
    });
});
