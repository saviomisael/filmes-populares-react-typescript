import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TvSerie } from 'models/TvSerie';

interface TvSerieState {
  tvSeries: TvSerie[];
}

const initialState: TvSerieState = {
  tvSeries: [],
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

export const { actions: tvSerieActions, reducer: tvSerieReducer } = tvSerieSlice;
