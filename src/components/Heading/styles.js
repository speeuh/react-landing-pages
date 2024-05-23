import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFontSize(theme)};
  `,
};

const mediaFontSize = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleUppercase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, fontLight, size, uppercase }) => css`
    color: ${fontLight ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    ${titleUppercase(uppercase)}
  `}
`;
