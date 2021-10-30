import styled, { css } from 'styled-components';

type ContainerProps = {
  image: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, image }) => css`
    background: linear-gradient(to right, ${theme.colors.second} 50%, transparent 100%), url(${image});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
  `}

  margin: 3rem auto;
  width: 55vw;
  height: 90vh;
  display: flex;
  filter: brightness(1.2);
  border-radius: 1.2rem;
`;

export const LeftContent = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  row-gap: 1.3rem;
`;
