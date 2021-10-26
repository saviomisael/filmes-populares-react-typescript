import { TvSerieCard } from 'components/TvSerieCard';
import { TvSerie } from 'models/TvSerie';
import * as Styled from './styles';

export type TvSerieCardListProps = {
  series: TvSerie[];
};

export const TvSerieCardList = ({ series }: TvSerieCardListProps) => {
  const renderSeries = series.map((x) => <TvSerieCard key={x.id} tvSerie={x} />);

  return <Styled.Container data-testid="tvserielistcontainer">{renderSeries}</Styled.Container>;
};
