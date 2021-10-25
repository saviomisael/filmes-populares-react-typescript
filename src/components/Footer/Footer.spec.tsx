import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should matches with snapshot', () => {
    renderTheme(<Footer />);

    const footer = screen.getByTestId('footer');

    expect(footer).toMatchSnapshot();
  });
});
