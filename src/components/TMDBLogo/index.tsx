import * as Styled from './styles';
import Logo from 'assets/tmdb-logo.svg';

export const TMDBLogo = () => {
  return <Styled.Image src={Logo} alt="The Movie DB logo" />;
};
