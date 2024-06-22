import { screen, render } from '@testing-library/react';

import {
    mockI18Next,
    restoreI18NextMock,
} from '@shared/mock/i18n';
import {
    createWrapper,
} from '@shared/mock/jest';

import { EditUserModal } from './EditUserModal';

describe('features/user/EditUserModal', () => {
    const wrapper = createWrapper({});

    beforeAll(() => {
        mockI18Next();
        window.scrollTo = jest.fn();
    });

    afterAll(() => {
        restoreI18NextMock();
    });

    it('Компонент появился в DOM дереве', async () => {
        render(<EditUserModal trigger={() => null} />, { wrapper });

        const component = await screen.findByTestId('EditUserModal');
        expect(component).toBeInTheDocument();
    });
});
