import { screen } from '@testing-library/react';
import { renderWithRouter } from 'utils/test-utils';
import { Header } from '.';

describe('<Header />', () => {
  it('should matches with snapshot', () => {
    renderWithRouter(<Header />, {
      pathname: '/',
    });

    const header = screen.getByTestId('header');

    expect(header).toMatchSnapshot();
  });
});
