import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isFocused: boolean }>`
  ${({ theme, isFocused }) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: 0.5rem;
    transition: border-color 0.3s;
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.tertiary};
    border-color: ${isFocused && theme.colors.gray};
  `}
`

export const InputElement = styled.input`
  ${({ theme }) => css`
    flex: 1;
    padding: 0.5rem;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    &::placeholder {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
    }
  `}
`

export const IconWrapper = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
