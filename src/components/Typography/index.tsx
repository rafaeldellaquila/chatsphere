import * as S from './styles'

export type TypographyProps = {
  [key: string]: string | React.ReactNode | undefined
  size?: 'small' | 'medium' | 'large'
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  children?: React.ReactNode
  lineClamp?: string
}

export default function Typography({
  variant = 'span',
  children = 'add_text',
  size = 'medium',
  lineClamp = '0'
}: TypographyProps) {
  return (
    <S.Wrapper as={variant} size={size} lineClamp={lineClamp}>
      {children}
    </S.Wrapper>
  )
}
