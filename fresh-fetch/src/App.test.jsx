import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App /> when user is logged in', () => {
  it('renders the Produce page by default', () => {
    render(<App />);
    
    expect(screen.getByText(/Produce/i)).toBeInTheDocument();
  });

  it('renders the default header', () => {
    render(<App />);

    expect(screen.getByRole('heading', {name: 'Fresh Fetch'})).toBeInTheDocument();

  });

  it('renders the Basket button', () => {
    render(<App />);

    expect(screen.getByRole('button', {name: /Basket(.)/}))
  })

  it('renders the User profile section', () => {
    render(<App />);

    expect(screen.getByLabelText('User Profile')).toBeInTheDocument();
  }) 

  it('renders the Profile component', () => {
    render(<App />);

    expect(screen.getByLabelText('Profile')).toBeInTheDocument();
  })

  it('renders the logout button', () => {
    render(<App />);
  
    expect(screen.getByRole('button', {name: 'Logout'})).toBeInTheDocument();
  })

  it('renders the Produce header', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Produce' })).toBeInTheDocument();
  });
  
  it('Renders a search button', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /Search/})).toBeInTheDocument();
  });

  it('Renders product element(s)', () => {
    render(<App />);

    expect(screen.getAllByLabelText('Produce item').length).toBeGreaterThanOrEqual(1);
  });

  it('goes to the Basket page when the Basket button is pressed', async () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /Basket(.)/})

    act(() => {
      userEvent.click(button);
    });
  
    await expect(window.location.href).toContain('/basket');

  })
  
  
});

