import { TextComponent } from 'components/TextComponent';
import { TMDBLogo } from 'components/TMDBLogo';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.FooterContainer>
      <TextComponent>Dados providos por:</TextComponent>
      <TMDBLogo />
    </Styled.FooterContainer>
  );
};
