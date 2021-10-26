import { WithChildren } from 'utils/with-children';
import * as Styled from './styles';

export interface HeadingProps extends WithChildren {
  hasColorDark?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  hasTextCenter?: boolean;
  hasTextUppercase?: boolean;
}

export const Heading = ({
  children,
  hasColorDark = false,
  as = 'h1',
  hasTextCenter = false,
  hasTextUppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title dark={hasColorDark} as={as} textCenter={hasTextCenter} uppercase={hasTextUppercase}>
      {children}
    </Styled.Title>
  );
};
