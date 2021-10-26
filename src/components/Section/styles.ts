import styled, { css, DefaultTheme } from 'styled-components';

type SectionStyledProps = {
  background: 'orange' | 'black';
};

const bgColors = {
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.third};
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.second};
  `,
};

export const SectionStyled = styled.section<SectionStyledProps>`
  padding: 1rem;

  ${({ background, theme }) => bgColors[background](theme)};
`;
