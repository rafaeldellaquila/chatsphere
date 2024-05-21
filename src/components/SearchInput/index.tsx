import { Icon } from '@iconify/react'
import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string
}

export default function SearchInput({ icon, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <S.Wrapper isFocused={isFocused}>
      {icon && (
        <S.IconWrapper>
          <Icon icon={icon} />
        </S.IconWrapper>
      )}
      <S.InputElement
        placeholder='Search'
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </S.Wrapper>
  )
}
