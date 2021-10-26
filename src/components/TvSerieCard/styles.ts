import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 24rem;
`;

export const Caption = styled.figcaption`
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s;

  background: ${({ theme }) => `${theme.colors.second}88`};
`;

export const Figure = styled.figure`
  border-radius: 1.2rem;
  position: relative;

  &:hover ${Caption} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: inherit;
`;
