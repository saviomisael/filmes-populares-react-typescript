import styled, { css } from 'styled-components';

type ParagraphProps = {
  textSmall: boolean;
  textCenter: boolean;
};

export const Paragraph = styled.p<ParagraphProps>`
  font-weight: 400;

  ${({ theme, textSmall, textCenter }) => css`
    font-size: ${textSmall ? theme.fonts.sizes.small : theme.fonts.sizes.default};
    color: ${theme.colors.white};

    text-align: ${textCenter ? 'center' : 'left'};
  `}
`;
