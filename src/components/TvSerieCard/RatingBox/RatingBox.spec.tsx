import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { RatingBox } from '.';

describe('<RatingBox />', () => {
  it('should matches with snapshot', () => {
    renderTheme(<RatingBox amount={9.5} />);

    const rating = screen.getByRole('heading', { name: /9.5/ });

    expect(rating).toMatchSnapshot();
  });
});
