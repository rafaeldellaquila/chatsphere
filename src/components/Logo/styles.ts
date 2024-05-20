import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export type WrapperProps = Pick<LogoProps, 'variant'>

const sizeWrapper = {
  small: ({ variant }: WrapperProps) => css`
    width: ${variant === 'icon' ? '5rem' : '12rem'};
    height: 5rem;
  `,
  medium: ({ variant }: WrapperProps) => css`
    width: ${variant === 'icon' ? '16rem' : '24rem'};
    height: 12rem;
  `,
  large: ({ variant }: WrapperProps) => css`
    width: ${variant === 'icon' ? '26rem' : '32rem'};
  `
}

export const Wrapper = styled.img<LogoProps>`
  ${({ size, variant }) => css`
    ${!!size && sizeWrapper[size](variant as WrapperProps)}
  `}
`
