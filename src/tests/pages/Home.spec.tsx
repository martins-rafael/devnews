import { render, screen } from '@testing-library/react';
import Home from '../../pages';

jest.mock('next/router');
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false],
  };
});

describe('Home page', () => {
  it('should render correctly', () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />);

    expect(screen.getByText('por R$10,00/mês')).toBeInTheDocument();
  });
});