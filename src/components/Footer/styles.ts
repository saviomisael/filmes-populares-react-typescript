import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.first};
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.2rem;
`;
