import { screen } from '@testing-library/react';
import { movieListMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';
import { renderTheme } from 'utils/test-utils';
import { MovieCardList } from '.';

describe('<MovieCardList />', () => {
  const movies = movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview));

  it('should show many li elements', () => {
    renderTheme(<MovieCardList movies={movies} />);

    const liElements = screen.getAllByRole('listitem');

    expect(liElements).toHaveLength(4);
  });

  it('should matches with snapshot', () => {
    const { container } = renderTheme(<MovieCardList movies={movies} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
