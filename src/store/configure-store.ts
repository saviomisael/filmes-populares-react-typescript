import { configureStore } from '@reduxjs/toolkit';
import { tvSerieReducer } from './ducks/tv-serie-duck';

export const store = configureStore({
  reducer: {
    tvSeries: tvSerieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
