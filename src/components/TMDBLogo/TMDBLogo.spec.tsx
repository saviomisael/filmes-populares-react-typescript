import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { TMDBLogo } from '.';

describe('<TMDBLogo />', () => {
  it('should renders image with alt text correct', () => {
    renderTheme(<TMDBLogo />);

    const image = screen.getByAltText(/the movie db logo/i);

    expect(image).toBeInTheDocument();
  });

  it('should matches with snapshot', () => {
    renderTheme(<TMDBLogo />);

    const image = screen.getByAltText(/the movie db logo/i);

    expect(image).toMatchSnapshot();
  });
});
