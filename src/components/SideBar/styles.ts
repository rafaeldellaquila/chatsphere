import { lighten } from 'polished'
import styled, { css } from 'styled-components'

type SidebarProps = {
  collapsed: boolean
}

export const Wrapper = styled.aside<SidebarProps>`
  ${({ theme, collapsed }) => css`
    background-color: ${theme.colors.secondary};
    height: 100%;
    padding: ${theme.spacings.xsmall};
    max-width: ${collapsed ? '20rem' : '8rem'};
    transition: max-width 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid ${lighten(0.1, theme.colors.secondary)};
    .logo {
      display: flex;
      flex-direction: ${collapsed ? 'row' : 'column'};
      justify-content: space-between;
      align-items: center;

      img {
        margin-bottom: ${collapsed ? 0 : theme.spacings.xsmall};
      }
    }
  `}
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    text-align: left;
  }
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
    border-color: ${lighten(0.1, theme.colors.secondary)};
    opacity: 0.2;
  `}
`

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
    }
    span {
      margin-left: ${theme.spacings.xxsmall};
      font-weight: ${theme.font.bold};
      flex: 1;
    }
  `}
`
