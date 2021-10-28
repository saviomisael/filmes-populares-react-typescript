import { GenreBadge } from 'components/GenreBadge';
import { Genre } from 'models/Genre';
import * as Styled from './styles';

export type GenreBadgeListProps = {
  genres: Genre[];
};

export const GenreBadgeList = ({ genres }: GenreBadgeListProps) => {
  const renderGenres = genres.map((x) => <GenreBadge key={x.id} genre={x} />);

  return <Styled.Container>{renderGenres}</Styled.Container>;
};
