import styled, { css } from 'styled-components';

export const Anchor = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.default};
  `}
`;
