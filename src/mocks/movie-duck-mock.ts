import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'models/Movie';
import { MovieState } from 'store/ducks/movie-duck';
import { genresMock } from './genre-mock';
import { movieListMock, movieMock } from './movie-mock';

const initialState: MovieState = {
  movies: movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview)),
  singleMovie: new Movie(
    movieMock.id,
    movieMock.name,
    movieMock.rating,
    movieMock.releaseDate,
    movieMock.poster,
    movieMock.overview,
    [...genresMock],
  ),
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    updateSingleMovie: (state, action: PayloadAction<Movie>) => {
      state.singleMovie = action.payload;
    },
  },
});

export const { actions: movieMockActions, reducer: movieMockReducer } = movieSlice;
