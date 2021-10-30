import { movieListMock, movieMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';
import { movieReducer, movieActions, MovieState } from './movie-duck';

describe('movie duck', () => {
  const initialState: MovieState = {
    movies: [],
    singleMovie: null,
  };

  it('should add movies', () => {
    const payload = movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview));

    const stateModified = movieReducer(initialState, movieActions.addMovies(payload));

    expect(stateModified.movies).toHaveLength(4);
  });

  it('should update single movie', () => {
    const payload = new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
    );

    const { singleMovie } = movieReducer(initialState, movieActions.updateSingleMovie(payload));

    expect(singleMovie?.id).toBe(1);
    expect(singleMovie?.name).toBe('Duna');
    expect(singleMovie?.rating).toBe(9);
    expect(singleMovie?.releaseDate).toEqual(new Date(2021, 1, 15));
    expect(singleMovie?.poster).toMatch(/\.jpg$/);
    expect(singleMovie?.overview).toMatch(/^Lorem ipsum(.)+consequat\.$/);
    expect(singleMovie?.genres).toHaveLength(0);
  });
});
