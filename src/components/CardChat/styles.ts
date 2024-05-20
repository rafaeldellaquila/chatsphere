import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: top;
    padding: ${theme.font.sizes.medium};
    border-radius: ${theme.border.radius};

    img {
      margin-right: ${theme.font.sizes.medium};
      width: ${theme.font.sizes.huge};
      height: ${theme.font.sizes.huge};
    }

    div {
      display: flex;
      flex-direction: column;
      max-width: ${theme.sizes.xlarge};
    }

    &:hover {
      background: ${theme.colors.secondary};
    }
  `}
`
