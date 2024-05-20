import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quartenary'
    | 'white'
    | 'gray'
    | 'red'
    | 'transparent'
  centered?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

export default function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  color = 'primary',
  centered = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      centered={centered}
      color={color}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
