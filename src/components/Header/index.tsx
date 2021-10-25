import { Heading } from 'components/Heading';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header>
      <Heading hasColorDark hasTextCenter hasTextUppercase>
        Filmes populares
      </Heading>
    </Styled.Header>
  );
};
