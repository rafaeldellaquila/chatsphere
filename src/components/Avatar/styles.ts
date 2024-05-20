import styled, { DefaultTheme, css } from 'styled-components'

import { AvatarProps } from '.'

const sizeWrapper = {
  medium: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.large};
    height: ${theme.font.sizes.large};
    border-radius: 100%;
  `,
  large: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.xxxlarge};
    height: ${theme.font.sizes.xxxlarge};
    border-radius: ${theme.border.radius};
  `
}

export const Wrapper = styled.img<AvatarProps>`
  ${({ theme, size }) => css`
    ${!!size && sizeWrapper[size](theme)}
  `}
`
