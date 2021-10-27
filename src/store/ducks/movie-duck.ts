import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'models/Movie';

export interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
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

export const { actions: movieActions, reducer: movieReducer } = movieSlice;
