import { configureStore } from '@reduxjs/toolkit';
import { movieMockReducer } from './movie-duck-mock';
import { tvSerieMockReducer } from './tv-serie-duck-mock';

export const storeMock = configureStore({
  reducer: {
    tvSeries: tvSerieMockReducer,
    movies: movieMockReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
