import { WithChildren } from 'utils/with-children';
import * as Styled from './styles';

export interface ExternalLinkProps extends WithChildren {
  to: string;
}

export const ExternalLink = ({ children, to }: ExternalLinkProps) => {
  return (
    <Styled.Anchor href={to} rel="noopener" target="_blank">
      {children}
    </Styled.Anchor>
  );
};
