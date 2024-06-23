import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Produce from './Produce';

import tomatoImg from '../images/tomato.jpg';

describe('<Produce />', () => {
    const testProduce = {
        id: "1",
        name: "Heirloom Tomato",
        pricePerPound: "$5.99 / lb",
        vendor: "Wall-Mart",
        pic: tomatoImg,
    };

    it('contains an image of the produce', () => {
        render(<Produce product={testProduce} />);

        expect(screen.getByAltText('Image of produce')).toBeInTheDocument();
    })

    it('Contains the name of the produce', () => {
        render(<Produce product={testProduce} />);

        expect(screen.getByRole('heading', { name: 'Heirloom Tomato' })).toBeInTheDocument();
    })

    it('Contains the Price per pound', () => {
        render(<Produce product={testProduce} />);

        expect(screen.getByText("$5.99 / lb")).toBeInTheDocument();
    });

    it('Contains the Vendor of the produce', () => {
        render(<Produce product={testProduce} />);

        expect(screen.getByText("Vendor: Wall-Mart")).toBeInTheDocument();
    })

    it('Contains the Order now and Add to Basket buttons', () => {
        render(<Produce product={testProduce} />);

        expect(screen.getByRole('button', { name: 'Order now'})).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add to Basket'})).toBeInTheDocument();
    })

    it('Clicking the Add to Basket calls the addToBasket function', () => {
        const mockAddToBasket = jest.fn();
        render(<Produce product={testProduce} addToBasket={mockAddToBasket} />);

        const addToBasketBtn = screen.getByRole('button', { name: 'Add to Basket'});
        userEvent.click(addToBasketBtn);

        expect(mockAddToBasket).toHaveBeenCalled();
    })
    
});
