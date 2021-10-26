import { tvSerieMock } from 'mocks/tv-serie-mock';
import { TvSerie } from 'models/TvSerie';
import { tvSerieActions, tvSerieReducer, TvSerieState } from './tv-serie-duck';

describe('tv serie duck', () => {
  it('should add series to state', () => {
    const initialState: TvSerieState = {
      tvSeries: [],
    };

    const payload = [new TvSerie(tvSerieMock.id, tvSerieMock.name, tvSerieMock.rating, tvSerieMock.poster)];

    const stateModified = tvSerieReducer(initialState, tvSerieActions.addSeries(payload));

    expect(stateModified.tvSeries).toHaveLength(1);
  });
});
