import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { Header } from '.';

describe('<Header />', () => {
  it('should matches with snapshot', () => {
    renderTheme(<Header />);

    const header = screen.getByTestId('header');

    expect(header).toMatchSnapshot();
  });
});
