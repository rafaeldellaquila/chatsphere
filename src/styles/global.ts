import { DefaultTheme, GlobalStyleComponent, createGlobalStyle, css } from 'styled-components'

type GlobalStylesProps = {
  theme: DefaultTheme
}

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    list-style-type: none;
    list-style: none;
    &::before, &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.tertiary};
      color: ${theme.colors.white};

      #root {
        height: 100vh;
      }

      input {
        border: none;
        outline: none;
        background: none;
      }
    }
  `}
`

export default GlobalStyles
