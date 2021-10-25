import * as Styled from './styles';

export type RatingBoxProps = {
  amount: number;
};

export const RatingBox = ({ amount }: RatingBoxProps) => {
  return <Styled.Box>{amount}</Styled.Box>;
};
