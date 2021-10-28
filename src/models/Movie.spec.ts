import { Movie } from './Movie';
import { movieMock } from 'mocks/movie-mock';
import { genreMock } from 'mocks/genre-mock';

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

  it('should has a empty array when genres are nullish', () => {
    const movie = new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
    );

    expect(movie.genres).toHaveLength(0);
  });

  it('should does not have a empty array when genres are not nullish', () => {
    const movie = new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
      [...genreMock],
    );

    expect(movie.genres).toHaveLength(1);
  });
});
