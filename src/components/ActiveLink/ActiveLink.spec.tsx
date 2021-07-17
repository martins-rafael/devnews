import { render } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      };
    }
  };
});

describe('ActiveLink component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    );

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should add active class if the link as correctly active', () => {
    const { getByText } = render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    );

    expect(getByText('Home')).toHaveClass('active');
  });
});