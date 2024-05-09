import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from './Dropdown';

describe('shared/DropDown', () => {
    it('Компонент появился в DOM дереве', async () => {
        render(
            <Dropdown renderLabel={<p data-testid="label"></p>} data-testid="DropDown">
                <p data-testid="content">test content</p>
            </Dropdown>,
        );

        const component = await screen.findByTestId('DropDown');
        expect(component).toBeInTheDocument();
    });

    it('Появляется контент при нажатии', async () => {
        render(
            <Dropdown renderLabel={<p data-testid="label"></p>} data-testid="DropDown">
                <p data-testid="content">test content</p>
            </Dropdown>,
        );

        const content = await screen.findByTestId('content');
        expect(content).not.toBeVisible();

        const label = await screen.findByTestId('label');
        await userEvent.click(label);

        expect(content).toBeVisible();
    });

    it('Не появляется контент при нажатии при disabled', async () => {
        render(
            <Dropdown renderLabel={<p data-testid="label"></p>} data-testid="DropDown" disabled>
                <p data-testid="content">test content</p>
            </Dropdown>,
        );

        const content = await screen.findByTestId('content');
        expect(content).not.toBeVisible();

        const label = await screen.findByTestId('label');
        await userEvent.click(label);

        expect(content).not.toBeVisible();
    });
});
