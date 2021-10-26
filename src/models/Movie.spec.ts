import { Movie } from './Movie';
import { movieMock } from 'mocks/movie-mock';

describe('Movie model', () => {
  it('should has poster that contain a url', () => {
    const movie = new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
    );

    expect(movie.poster).toMatch(/^https(.)+s9E9W77HS8zEQvsrpz5aEUTKnvD\.jpg$/);
  });
});
