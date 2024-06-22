import { render, screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Summary from './Summary';

describe('<Summary />', () => {
    it('contains the common Header', () => {
        render(<Summary />);

        expect(screen.getByRole('heading', { name: 'Fresh Fetch'})).toBeInTheDocument();
    });
});