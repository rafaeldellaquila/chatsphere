import styled, { DefaultTheme, css } from 'styled-components'

import { TypographyProps } from '.'

type sizeWrapper = Pick<TypographyProps, 'size'>

const sizeWrapper = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `
}

export const Wrapper = styled.div<sizeWrapper>`
  ${({ theme, size }) => css`
    span {
      ${!!size && sizeWrapper[size](theme)}
    }
  `}
`
