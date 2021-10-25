import styled from 'styled-components';

type TitleProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  dark: boolean;
  textCenter: boolean;
  uppercase: boolean;
};

export const Title = styled.h1<TitleProps>`
  color: ${({ theme, dark }) => (dark ? theme.colors.second : theme.colors.white)};
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
