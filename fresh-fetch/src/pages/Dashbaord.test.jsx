import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders the common header', () => {
        render(<Dashboard />);

        expect(screen.getByRole('heading', { name: 'Fresh Fetch'})).toBeInTheDocument();
    });

    it('contains the Vendor dashboard header(Orders)' , () => {
        render(<Dashboard />);

        expect(screen.getByRole('heading', { name: 'Orders'})).toBeInTheDocument();
    })

    it('contains the order elements', () => {
        render(<Dashboard />);

        expect(screen.getAllByLabelText('Vendor order').length).toBeGreaterThanOrEqual(0);
    })
    
});
