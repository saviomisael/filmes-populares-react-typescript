import { screen } from '@testing-library/react';
import { movieMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';
import { renderTheme } from 'utils/test-utils';
import { MovieDetails } from '.';

describe('<MovieDetails />', () => {
  it('should renders release date with custom text', () => {
    const movie = new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
    );

    renderTheme(<MovieDetails movie={movie} />);

    const releaseDateText = screen.getByText(/^lançou em:(.)+2021$/i);

    expect(releaseDateText).toBeInTheDocument();
  });
});
