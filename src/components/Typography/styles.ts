import styled, { DefaultTheme, css } from 'styled-components'

import { TypographyProps } from '.'

type sizeWrapper = Pick<TypographyProps, 'size' | 'lineClamp'>

const sizeWrapper = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `
}

export const Wrapper = styled.div<sizeWrapper>`
  ${({ theme, size, lineClamp }) => css`
    ${!!size && sizeWrapper[size](theme)}
    display: -webkit-box;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`
