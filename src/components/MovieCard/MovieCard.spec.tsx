import { Movie } from 'models/Movie';
import { renderTheme } from 'utils/test-utils';
import { MovieCard } from '.';
import { movieMock } from 'mocks/movie-mock';

describe('<MovieCard />', () => {
  it('should matches with snapshot', () => {
    const movie = new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
    );

    const { container } = renderTheme(<MovieCard movie={movie} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
