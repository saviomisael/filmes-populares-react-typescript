import { GenreBadgeList } from 'components/GenreBadgeList';
import { Heading } from 'components/Heading';
import { RatingBox } from 'components/RatingBox';
import { TextComponent } from 'components/TextComponent';
import { Movie } from 'models/Movie';
import { formatDate } from 'utils/format-date';
import * as Styled from './styles';

export type MovieDetailsProps = {
  movie?: Movie;
};

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const showReleaseDate = movie?.releaseDate ? `Lançou em: ${formatDate(movie.releaseDate)}` : '';
  const content = movie && (
    <Styled.Container image={movie.poster}>
      <Styled.LeftContent>
        <Heading as="h2" hasTextCenter>
          {movie.name}
        </Heading>
        <GenreBadgeList genres={movie.genres} />
        <TextComponent hasTextCenter>{showReleaseDate}</TextComponent>
        <RatingBox amount={movie.rating} />
        <TextComponent hasTextCenter>{movie.overview}</TextComponent>
      </Styled.LeftContent>
    </Styled.Container>
  );

  return <>{content}</>;
};
