import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Basket from './Basket';


describe('<Basket />', () => {
    it('contains the common Header', () => {
        render(<Basket />);

        expect(screen.getByRole('heading', { name: 'Fresh Fetch'})).toBeInTheDocument();
    });

    it('contains the user profile section', () => {
        render(<Basket />);

        expect(screen.getByLabelText('User Profile')).toBeInTheDocument();
    })

    it('Contains the profile component', () => {
        render(<Basket />);

        expect(screen.getByLabelText('Profile')).toBeInTheDocument();
    });

    it('Contains the Basket header', () => {
        render(<Basket />);

        expect(screen.getByRole('heading', { name: 'Basket'})).toBeInTheDocument();
        
    });

    it('Has the item count', () => {
        render(<Basket />);

        expect(screen.getByLabelText("Item count")).toBeInTheDocument();
    });

    it('Contains the order all button', () => {
        render(<Basket />);

        expect(screen.getByRole('button', { name: 'Order all'})).toBeInTheDocument();
    });

    it('Contains the order elements that have not been sent out yet', () => {
        render(<Basket />);

        expect(screen.getAllByLabelText('Unmade order').length).toBeGreaterThanOrEqual(0);
    })

    it('Contains the order elements that are sent out and are\
        pending/cancelled', () => {
    
        render(<Basket />);

        expect(screen.getAllByLabelText('Pending/Cancelled order'))
    })

    it('Removes the unmade order when an remove is pressed on orders', () => {
        render(<Basket />);

        const preOrdersInitialLength = screen.queryAllByLabelText('Unmade order').length;
        const removeBtns = screen.queryAllByRole('button', {name: 'Remove'})

        act(() => {
            preOrdersInitialLength > 1 && userEvent.click(removeBtns[0]);
        })
        expect(screen.queryAllByLabelText('Unmade order').length).toEqual(preOrdersInitialLength - 1);
    })
    
    // it('Displays an informative message when there is nothing in\
    //     unmadeOrders', async () => {
    //     render(<Basket />);

    //     const removeBtns = screen.queryAllByRole('button', {name: 'Remove'})

    //     act(async () => {
    //         for (const btn of removeBtns) {
    //             userEvent.click(btn);
    //         }
    //     });

    //     screen.debug();

    //     await expect(screen.queryAllByLabelText('Unmade order').length).toBe(0);

    //     expect(screen.getByRole('paragraph', { name: 'Looks like there\
    //         is nothing in your basket' })).toBeInTheDocument();
    // })

    it('Removes the pending order when cancel is pressed on orders', () => {
        render(<Basket />);

        const pendingOrdersInitialLength = screen.queryAllByLabelText('Pending/Cancelled order').length;
        const removeBtns = screen.queryAllByRole('button', {name: 'Cancel'})

        act(() => {
            pendingOrdersInitialLength && userEvent.click(removeBtns[0]);
        })
        expect(screen.queryAllByLabelText('Pending/Cancelled order').length).toEqual(pendingOrdersInitialLength - 1);
    })

    // it('Removes all pending orders when cancel all is clicked' , () => {
    //     render(<Basket />);

    //     const cancelAllBtn = screen.queryAllByRole('button', { name: 'Cancel All' });

    //     act(() => {
    //         userEvent.click(cancelAllBtn);
    //     })

    //     expect(screen.queryAllByLabelText('Pending/Cancelled order')).toBeNone();

    // })
    
    
});
