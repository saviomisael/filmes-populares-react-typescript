import { movieListMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';
import { movieReducer, movieActions, MovieState } from './movie-duck';

describe('movie duck', () => {
  it('should add movies', () => {
    const initialState: MovieState = {
      movies: [],
    };

    const payload = movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview));

    const stateModified = movieReducer(initialState, movieActions.addMovies(payload));

    expect(stateModified.movies).toHaveLength(4);
  });
});
