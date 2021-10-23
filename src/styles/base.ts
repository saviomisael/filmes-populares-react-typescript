import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

export const BaseStyles = createGlobalStyle`
  ${normalize};

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html, body {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.redRose};
    max-width: 100vw;
    min-height: 100vh;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
    margin: 0;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.largest};
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  h4 {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }
`;
