import { Heading } from 'components/Heading';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Header data-testid="header">
      <Link to="/">
        <Heading hasColorDark hasTextCenter hasTextUppercase>
          Filmes populares
        </Heading>
      </Link>
    </Styled.Header>
  );
};
