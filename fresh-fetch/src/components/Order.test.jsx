import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Order from './Order';

import tomatoImg from '../images/tomato.jpg';

describe('<Order />', () => {
    const testOrder = {
        id: "1",
        productId: "1",
        name: "Heirloom tomato",
        pricePerPound: "$5.99 / lb",
        vendor: "Wall-Mart",
        quantity: 1,
        price: "$5.99",
        status: null,
        pic: tomatoImg,
    };

    it('Contains an image with the write alt message', () => {
        render(<Order order={testOrder} />);

        expect(screen.getByAltText('Image of the produce')).toBeInTheDocument();
    });

    it('Contains the name of the produce', () => {
        render(<Order order={testOrder} />);

        expect(screen.getByRole('heading', {name: 'Heirloom tomato'})).toBeInTheDocument();
    })

    it('Contains the price per pund of the produce', () => {
        render(<Order order={testOrder} />);

        expect(screen.getByText('$5.99 / lb')).toBeInTheDocument();
    });

    it('Contains the vendor of the produce', () => {
        render(<Order order={testOrder} />);

        expect(screen.getByText('Vendor: Wall-Mart')).toBeInTheDocument();
    });

    it('Contains the Order now and Remove buttons', () => {
        render(<Order order={testOrder} />);

        expect(screen.getByRole('button', { name: 'Order now' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
    });

    it('Contains the qunatity input element', () => {
        render(<Order order={testOrder} />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByAltText('A pencil')).toBeInTheDocument();
    });
    
});
