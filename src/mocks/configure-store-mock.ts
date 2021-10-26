import { configureStore } from '@reduxjs/toolkit';
import { tvSerieMockReducer } from './tv-serie-duck-mock';

export const storeMock = configureStore({
  reducer: {
    tvSeries: tvSerieMockReducer,
  },
});
