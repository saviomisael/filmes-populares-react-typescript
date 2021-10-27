import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { TvSerieCardList } from '.';
import { tvSerieListMock } from 'mocks/tv-serie-mock';
import { TvSerie } from 'models/TvSerie';

describe('<TvSerieCardList />', () => {
  const series = tvSerieListMock.map((x) => new TvSerie(x.id, x.name, x.rating, x.poster));

  it('should render many list item elements', () => {
    renderTheme(<TvSerieCardList series={series} />);

    const liElements = screen.getAllByRole('listitem');

    expect(liElements).toHaveLength(5);
  });

  it('should matches with snapshot', () => {
    renderTheme(<TvSerieCardList series={series} />);

    const container = screen.getByTestId('tvserielistcontainer');

    expect(container).toMatchSnapshot();
  });
});
