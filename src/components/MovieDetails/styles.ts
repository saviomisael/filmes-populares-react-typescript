import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 70vw;
  display: flex;
  padding: 3rem 0;
`;

export const LeftContent = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  row-gap: 1.3rem;
`;

export const Poster = styled.img`
  width: 50%;
  object-fit: cover;
`;
