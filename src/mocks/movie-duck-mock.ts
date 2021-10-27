import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'models/Movie';
import { movieListMock } from './movie-mock';

export interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview)),
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { actions: movieMockActions, reducer: movieMockReducer } = movieSlice;
