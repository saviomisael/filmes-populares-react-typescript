import { ExternalLink } from 'components/ExternalLink';
import { TextComponent } from 'components/TextComponent';
import { TMDBLogo } from 'components/TMDBLogo';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.FooterContainer data-testid="footer">
      <TextComponent>Dados providos por:</TextComponent>
      <ExternalLink to="https://developers.themoviedb.org/3/getting-started/introduction">
        <TMDBLogo />
      </ExternalLink>
    </Styled.FooterContainer>
  );
};
