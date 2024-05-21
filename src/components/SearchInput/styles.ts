import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 0.5rem;
  transition: border-color 0.3s;
  border-color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.tertiary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme.colors.gray};
    `}
`

export const InputElement = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.sizes.small};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-family: ${({ theme }) => theme.font.family};
  }
`

export const IconWrapper = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
