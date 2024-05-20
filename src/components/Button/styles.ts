import { darken } from 'polished'
import styled, { DefaultTheme, css } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'color' | 'centered'>

function handleColor(color: string, theme: DefaultTheme) {
  if (color === 'transparent') return theme.colors.gray
  if (color === 'white') return theme.colors.tertiary
  return theme.colors.white
}

function handleBackground(color: string, theme: DefaultTheme) {
  if (color === 'transparent') return theme.colors.gray
  return color && darken(0.05, theme.colors[color!])
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, color, centered }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.medium};
    background: ${color === 'transparent' ? 'transparent' : theme.colors[color!]};
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: ${centered ? 'center' : 'flex-start'};
    color:  ${handleColor(color!, theme)};
    border-radius: ${theme.border.radius};
    padding ${theme.spacings.xxsmall};
    transition: 0.5s;

    &:hover {
      background: ${handleBackground(color!, theme)};
      color: ${theme.colors.white};
    }


    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
