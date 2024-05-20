import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      regular: number
      medium: number
      bold: number
      sizes: {
        xxxsmall: string
        xxsmall: string
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
        xxxlarge: string
        huge: string
      }
    }
    sizes: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      huge: string
    }
    colors: {
      [key: string]: string
      primary: string
      secondary: string
      tertiary: string
      white: string
      gray: string
      red: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
    transition: {
      default: string
      fast: string
    }
  }
}
