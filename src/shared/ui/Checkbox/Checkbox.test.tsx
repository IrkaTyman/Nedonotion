import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('shared/Checkbox', () => {
    it('Компонент появился в DOM дереве', async () => {
        render(<Checkbox onChange={() => {}} checked={false} data-testid="Checkbox" />);

        const component = await screen.findByTestId('Checkbox');
        expect(component).toBeInTheDocument();
    });

    it('При нажатии вызывается onChange, меняется значение', async () => {
        const onChange = jest.fn();
        render(<Checkbox onChange={onChange} data-testid="Checkbox" />);

        const checkboxInput = screen.getByTestId('Checkbox.field');

        expect(checkboxInput).not.toBeChecked();
        await userEvent.click(checkboxInput);

        expect(onChange).toHaveBeenCalled();
        expect(checkboxInput).toBeChecked();
    });

    it('При disabled свойстве не вызывается onChange', async () => {
        const onChange = jest.fn();
        render(<Checkbox onChange={onChange} data-testid="Checkbox" disabled />);

        const checkboxInput = screen.getByTestId('Checkbox.field');

        await userEvent.click(checkboxInput);

        expect(onChange).not.toHaveBeenCalled();
        expect(checkboxInput).not.toBeChecked();
    });
});
