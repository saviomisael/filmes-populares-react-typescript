import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.first};
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
