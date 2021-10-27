import { MovieCard } from 'components/MovieCard';
import { Movie } from 'models/Movie';
import * as Styled from './styles';

export type MovieCardListProps = {
  movies: Movie[];
};

export const MovieCardList = ({ movies }: MovieCardListProps) => {
  const renderMovies = movies.map((x) => <MovieCard key={x.id} movie={x} />);

  return <Styled.Container>{renderMovies}</Styled.Container>;
};
