import styled, { css } from 'styled-components';
import * as TvSerieStyles from 'components/TvSerieCard/styles';

export const Card = styled.article`
  width: 30rem;
  height: 56.8rem;
  border-collapse: separate;
  border-radius: 1.2rem;

  ${({ theme }) => css`
    border: 0.4rem solid ${theme.colors.third};
    box-shadow: 0 0 1rem ${theme.colors.third};
    transition: box-shadow 0.3s, transform 0.3s;

    &:hover {
      box-shadow: 0 0 3rem ${theme.colors.third};
      transform: translateY(-0.5rem);
    }

    &:active {
      transform: translateY(0.5rem);
    }
  `}
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
`;

export const Image = styled(TvSerieStyles.Image)`
  object-fit: cover;
`;

export const Caption = styled(TvSerieStyles.Caption)`
  visibility: visible;
  opacity: 1;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  border-radius: 10% 10% 0 0;
  transform: translateY(-1.2rem);

  background: ${({ theme }) => theme.colors.second};
`;
