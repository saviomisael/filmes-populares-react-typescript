import { TvSerie } from './TvSerie';
import { tvSerieMock } from 'mocks/tv-serie-mock';

describe('TvSerie model', () => {
  it('should has poster that contain a url', () => {
    const tvSerie = new TvSerie(tvSerieMock.id, tvSerieMock.name, tvSerieMock.rating, tvSerieMock.poster);

    expect(tvSerie.poster).toMatch(/^https(.)+6gcHdboppvplmBWxvROc96NJnmm\.jpg$/);
  });
});
