import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  border-radius: 0.6rem;
  padding: 1rem 2rem;
  text-align: center;
  font-weight: 400;

  ${({ theme }) => css`
    border: 0.2rem solid ${theme.colors.third};
    font-size: ${theme.fonts.sizes.default};
    color: ${theme.colors.white};
  `}
`;
