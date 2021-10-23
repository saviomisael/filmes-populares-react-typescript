import { ReactNode } from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  hasColorDark?: boolean;
  children: ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4';
  hasTextCenter: boolean;
};

export const Heading = ({ children, hasColorDark = false, as = 'h1', hasTextCenter = false }: HeadingProps) => {
  return (
    <Styled.Title dark={hasColorDark} as={as} textCenter={hasTextCenter}>
      {children}
    </Styled.Title>
  );
};
