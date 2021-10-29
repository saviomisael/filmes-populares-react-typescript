import { GenreBadgeList } from 'components/GenreBadgeList';
import { Heading } from 'components/Heading';
import { RatingBox } from 'components/RatingBox';
import { TextComponent } from 'components/TextComponent';
import { Movie } from 'models/Movie';
import { formatDate } from 'utils/format-date';
import * as Styled from './styles';

export type MovieDetailsProps = {
  movie: Movie;
};

export const MovieDetails = ({ movie: { name, overview, rating, poster, releaseDate, genres } }: MovieDetailsProps) => {
  const showDate = formatDate(releaseDate);

  return (
    <Styled.Container>
      <Styled.LeftContent>
        <Heading as="h2" hasTextCenter>
          {name}
        </Heading>
        <GenreBadgeList genres={genres} />
        <TextComponent hasTextCenter>Lançou em: {showDate}</TextComponent>
        <RatingBox amount={rating} />
        <TextComponent hasTextCenter>{overview}</TextComponent>
      </Styled.LeftContent>
      <Styled.Poster src={poster} alt={`poster do filme ${name}`} />
    </Styled.Container>
  );
};
