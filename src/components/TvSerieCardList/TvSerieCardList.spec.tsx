import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { TvSerieCardList } from '.';
import { tvSerieListMock } from 'mocks/tv-serie-mock';
import { TvSerie } from 'models/TvSerie';

describe('<TvSerieCardList />', () => {
  it('should matches with snapshot', () => {
    const series = tvSerieListMock.map((x) => new TvSerie(x.id, x.name, x.rating, x.poster));

    renderTheme(<TvSerieCardList series={series} />);

    const container = screen.getByTestId('tvserielistcontainer');

    expect(container).toMatchSnapshot();
  });
});
