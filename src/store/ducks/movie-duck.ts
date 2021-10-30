import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'models/Movie';
import { getMovieById, getMoviesMostPopular } from 'services/movie-service';

export interface MovieState {
  movies: Movie[];
  singleMovie: Movie | undefined;
}

const initialState: MovieState = {
  movies: [],
  singleMovie: undefined,
};

export const fetchMoviesThunk = createAsyncThunk('movie/fetchMovies', async (_, { dispatch }) => {
  const response = await getMoviesMostPopular();

  dispatch(movieActions.addMovies(response));
});

export const fetchSingleMovieThunk = createAsyncThunk('movie/fetchSingleMovie', async (id: number, { dispatch }) => {
  const response = await getMovieById({ id });

  dispatch(movieActions.updateSingleMovie(response));
});

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

export const { actions: movieActions, reducer: movieReducer } = movieSlice;
