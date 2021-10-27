import { TvSerieCard } from 'components/TvSerieCard';
import { TvSerie } from 'models/TvSerie';
import * as Styled from './styles';

export type TvSerieCardListProps = {
  series: TvSerie[];
};

export const TvSerieCardList = ({ series }: TvSerieCardListProps) => {
  const renderSeries = series.map((x) => (
    <li key={x.id}>
      <TvSerieCard tvSerie={x} />
    </li>
  ));

  return <Styled.Container data-testid="tvserielistcontainer">{renderSeries}</Styled.Container>;
};
