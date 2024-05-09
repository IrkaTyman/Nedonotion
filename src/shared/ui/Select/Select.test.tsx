import { screen, render } from '@testing-library/react';

import {
    createWrapper,
    mockAxios,
    resetAxiosMock,
} from '@shared/mock/axios';
import {
    mockI18Next,
    restoreI18NextMock,
} from '@shared/mock/i18n';

import { Select } from './Select';

describe('shared/Select', () => {
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
        render(<Select />, { wrapper });

        const component = await screen.findByTestId('Select');
        expect(component).toBeInTheDocument();
    });
})
;
