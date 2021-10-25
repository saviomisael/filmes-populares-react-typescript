import { Heading } from 'components/Heading';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header data-testid="header">
      <Heading hasColorDark hasTextCenter hasTextUppercase>
        Filmes populares
      </Heading>
    </Styled.Header>
  );
};
