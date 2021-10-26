import { WithChildren } from 'utils/with-children';
import * as Styled from './styles';

export interface TextComponentProps extends WithChildren {
  hasTextSmall?: boolean;
  hasTextCenter?: boolean;
}

export const TextComponent = ({ children, hasTextSmall = false, hasTextCenter = false }: TextComponentProps) => {
  return (
    <Styled.Paragraph textSmall={hasTextSmall} textCenter={hasTextCenter}>
      {children}
    </Styled.Paragraph>
  );
};
