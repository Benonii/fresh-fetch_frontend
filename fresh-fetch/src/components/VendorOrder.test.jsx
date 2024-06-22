import { render, screen} from "@testing-library/react";
import { userEvent} from '@testing-library/user-event';

import VendorOrder from "./VendorOrder";
import tomatoImg from '../images/tomato.jpg';
import onionImg from '../images/onion.jpg';

describe('<VendorOrder />', () => {
    const enRouteOrder = {
        id: "1",
        productId: "1",
        name: "Heirloom tomato",
        pricePerPound: "$5.99 / lb",
        vendor: "Wall-Mart",
        quantity: 5,
        price: "$5.99",
        status: "En-Route",
        pic: tomatoImg,
    };

    const pendingOrder = {
        id: "3",
        productId: "3",
        name: "Sweet onion",
        pricePerPound: "$14.95 / lb",
        vendor: "Fresh Corner",
        quantity: .5,
        price: "$14.95",
        status: "Pending",
        pic: onionImg,
    };

    it('<Contains an image of the ordered produce', () => {
        render(<VendorOrder order={enRouteOrder} />);

        expect(screen.getByAltText('Image of the order')).toBeInTheDocument();
    });

    it('Contains the name of the ordered produce', () => {
        render(<VendorOrder order={enRouteOrder} />);

        expect(screen.getByRole('heading', { name: 'Heirloom tomato'})).toBeInTheDocument();
    });

    it('Contains the Price of the ordered produce', () => {
        render(<VendorOrder order={enRouteOrder} />);

        expect(screen.getByText('$5.99')).toBeInTheDocument();
    });

    it('Contains the Quantity of the ordered produce', () => {
        render(<VendorOrder order={enRouteOrder} />);

        expect(screen.getByText('Quantity: 5lb')).toBeInTheDocument();
    });

    it('Displays the right status' , () => {
        render(<VendorOrder order={enRouteOrder} />);

        expect(screen.getByText('En-Route')).toBeInTheDocument();
    });

    it('Has no Fulfill button when status is not Pending', () => {
        render(<VendorOrder order={enRouteOrder} />);

        expect(screen.queryByRole('button', { name: 'Fulfill' })).toBeNull();
    });

    it('Has a Fulfill button when status is Pending', () => {
        render(<VendorOrder order={pendingOrder} />);

        expect(screen.getByRole('button', { name: 'Fulfill' })).toBeInTheDocument();
    });    
});
