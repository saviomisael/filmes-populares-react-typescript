import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TvSerie } from 'models/TvSerie';
import { tvSerieListMock } from 'mocks/tv-serie-mock';

export interface TvSerieState {
  tvSeries: TvSerie[];
}

const initialState: TvSerieState = {
  tvSeries: tvSerieListMock.map((x) => new TvSerie(x.id, x.name, x.rating, x.poster)),
};

const tvSerieSlice = createSlice({
  name: 'tvserie',
  initialState,
  reducers: {
    addSeries: (state, action: PayloadAction<TvSerie[]>) => {
      state.tvSeries = action.payload;
    },
  },
});

export const { actions: tvSerieMockActions, reducer: tvSerieMockReducer } = tvSerieSlice;
