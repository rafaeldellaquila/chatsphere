import { createElement } from 'react'

import * as S from './styles'

export type TypographyProps = {
  [key: string]: string | React.ReactNode | undefined
  size?: 'small' | 'medium' | 'large'
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  children?: React.ReactNode
}

export default function Typography({
  variant = 'span',
  children = 'add_text',
  size = 'medium'
}: TypographyProps) {
  return <S.Wrapper>{createElement(variant, size, undefined, children)}</S.Wrapper>
}
