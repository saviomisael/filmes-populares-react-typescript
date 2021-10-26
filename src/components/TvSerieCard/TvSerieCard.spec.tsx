import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { TvSerieCard } from '.';
import { tvSerieMock } from 'mocks/tv-serie-mock';
import { TvSerie } from 'models/TvSerie';

describe('<TvSerieCard />', () => {
  it('should matches with snapshot', () => {
    const tvSerie = new TvSerie(tvSerieMock.id, tvSerieMock.name, tvSerieMock.rating, tvSerieMock.poster);

    renderTheme(<TvSerieCard tvSerie={tvSerie} />);

    const card = screen.getByRole('article');

    expect(card).toMatchSnapshot();
  });
});
