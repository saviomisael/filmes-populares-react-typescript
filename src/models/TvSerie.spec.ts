import { TvSerie } from './TvSerie';

describe('TvSerie model', () => {
  it('should has poster that contain a url', () => {
    const tvSerie = new TvSerie(1, 'breaking bad', 9.5, 'image.png');

    expect(tvSerie.poster).toContain('https');

    expect(tvSerie.poster).toContain('image.png');
  });
});
