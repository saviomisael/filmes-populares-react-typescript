import { TextComponent } from 'components/TextComponent';
import { TvSerie } from 'models/TvSerie';
import { RatingBox } from './RatingBox';
import * as Styled from './styles';

export type TvSerieCardProps = {
  tvSerie: TvSerie;
};

export const TvSerieCard = ({ tvSerie: { name, rating, poster } }: TvSerieCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Figure>
        <Styled.Image src={poster} alt={`poster da série ${name}`} />
        <Styled.Caption>
          <TextComponent hasTextCenter>{name}</TextComponent>
          <RatingBox amount={rating} />
        </Styled.Caption>
      </Styled.Figure>
    </Styled.Wrapper>
  );
};
