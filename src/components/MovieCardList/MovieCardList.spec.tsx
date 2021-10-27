import { screen } from '@testing-library/react';
import { movieListMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';
import { renderTheme } from 'utils/test-utils';
import { MovieCardList } from '.';

describe('<MovieCardList />', () => {
  it('should show many li elements', () => {
    const movies = movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview));

    renderTheme(<MovieCardList movies={movies} />);

    const liElements = screen.getAllByRole('listitem');

    expect(liElements).toHaveLength(4);
  });
});
