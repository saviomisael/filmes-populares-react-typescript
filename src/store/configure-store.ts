import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './ducks/movie-duck';
import { tvSerieReducer } from './ducks/tv-serie-duck';

export const store = configureStore({
  reducer: {
    tvSeries: tvSerieReducer,
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
