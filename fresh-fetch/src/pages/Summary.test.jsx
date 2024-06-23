import { render, screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Summary from './Summary';

describe('<Summary />', () => {
    it('contains the common Header', () => {
        render(<Summary />);

        expect(screen.getByRole('heading', { name: 'Fresh Fetch'})).toBeInTheDocument();
    });

    it('contains the summary header', () => {
        render(<Summary />);

        expect(screen.getByRole('heading', { name: 'Order summary' })).toBeInTheDocument();
    });

    it('contaims the subtotal paragraph', () => {
        render(<Summary />);

        expect(screen.getByText('Subtotal')).toBeInTheDocument();
    })

    it('contaims the delivery paragraph', () => {
        render(<Summary />);

        expect(screen.getByText('Delivery')).toBeInTheDocument();
    })

    it('contaims the tax paragraph', () => {
        render(<Summary />);

        expect(screen.getByText('Tax')).toBeInTheDocument();
    })

    it('contaims the Total paragraph', () => {
        render(<Summary />);

        expect(screen.getByText('Total')).toBeInTheDocument();
    })

    it('Displayes all the prices correctly', () => {
        render(<Summary />);

        expect(screen.getAllByText(/\$\d+\.\d{2}/).length).toBe(4);
    })
});