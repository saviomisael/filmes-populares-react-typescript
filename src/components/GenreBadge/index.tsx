import { Genre } from 'models/Genre';
import * as Styled from './styles';

export type GenreBadgeProps = {
  genre: Genre;
};

export const GenreBadge = ({ genre: { name } }: GenreBadgeProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>{name}</Styled.Text>
    </Styled.Wrapper>
  );
};
