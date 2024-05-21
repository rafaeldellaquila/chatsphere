import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: top;
    padding: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    transition: 0.5s;
    width: 100%;

    > div {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }

    img {
      width: ${theme.font.sizes.huge};
      height: ${theme.font.sizes.huge};
    }

    &:hover {
      background: ${theme.colors.secondary};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 ${theme.font.sizes.small};
    width: 100%;
  `}
`
export const Timestamp = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: ${theme.font.sizes.xxsmall};
    }
  `}
`
