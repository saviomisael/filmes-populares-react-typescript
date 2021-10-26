import { WithChildren } from 'utils/with-children';
import * as Styled from './styles';

export interface SectionProps extends WithChildren {
  bgColor: 'orange' | 'black';
}

export const Section = ({ children, bgColor }: SectionProps) => {
  return <Styled.SectionStyled background={bgColor}>{children}</Styled.SectionStyled>;
};
