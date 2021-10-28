import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'models/Movie';
import { getMoviesMostPopular } from 'services/movie-service';

export interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

export const fetchMoviesThunk = createAsyncThunk('movie/fetchMovies', async (_, { dispatch }) => {
  const response = await getMoviesMostPopular();

  dispatch(movieActions.addMovies(response));
});

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
