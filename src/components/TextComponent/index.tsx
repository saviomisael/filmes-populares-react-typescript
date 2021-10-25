import { ReactNode } from 'react';
import * as Styled from './styles';

export type TextComponentProps = {
  children: ReactNode;
  hasTextSmall?: boolean;
  hasTextCenter?: boolean;
};

export const TextComponent = ({ children, hasTextSmall = false, hasTextCenter = false }: TextComponentProps) => {
  return (
    <Styled.Paragraph textSmall={hasTextSmall} textCenter={hasTextCenter}>
      {children}
    </Styled.Paragraph>
  );
};
