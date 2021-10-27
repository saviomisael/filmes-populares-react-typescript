import { Heading } from 'components/Heading';
import { RatingBox } from 'components/RatingBox';
import { TextComponent } from 'components/TextComponent';
import { Movie } from 'models/Movie';
import { formatDate } from 'utils/format-date';
import * as Styled from './styles';

export type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie: { name, rating, releaseDate, poster } }: MovieCardProps) => {
  const showDate = formatDate(releaseDate);

  return (
    <Styled.Card>
      <Styled.Figure>
        <Styled.Image src={poster} />
        <Styled.Caption>
          <RatingBox amount={rating} />
        </Styled.Caption>
      </Styled.Figure>

      <Styled.Details>
        <Heading as="h4" hasTextCenter>
          {name}
        </Heading>
        <TextComponent hasTextSmall hasTextCenter>
          Lançou em: {showDate}
        </TextComponent>
      </Styled.Details>
    </Styled.Card>
  );
};
