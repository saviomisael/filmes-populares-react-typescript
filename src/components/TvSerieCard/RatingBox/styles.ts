import styled, { css } from 'styled-components';
import { Heading } from 'components/Heading';
import Star from 'assets/star.svg';

export const Box = styled(Heading).attrs({ as: 'h4' })`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.4rem;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}

  &::before {
    content: url(${Star});
  }
`;
