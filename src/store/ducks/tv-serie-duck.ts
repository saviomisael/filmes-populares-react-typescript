import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TvSerie } from 'models/TvSerie';
import { getTvSeriesMostPopular } from 'services/tv-serie-service';

export interface TvSerieState {
  tvSeries: TvSerie[];
}

const initialState: TvSerieState = {
  tvSeries: [],
};

export const fetchTvSeriesThunk = createAsyncThunk('tvserie/fetchTvSeries', async (_, { dispatch }) => {
  const response = await getTvSeriesMostPopular();

  dispatch(tvSerieActions.addSeries(response));
});

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
