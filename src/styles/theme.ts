export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.5rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xxxsmall: '.8rem',
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3.0rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#355788',
    secondary: '#161B22',
    tertiary: '#0D1117',
    quartenary: '#21262D',
    white: '#FFFFFF',
    gray: '#A5ACB2',
    red: '#D23325'
  },
  sizes: {
    xsmall: '12rem',
    small: '14rem',
    medium: '16rem',
    large: '18rem',
    xlarge: '20rem',
    xxlarge: '28rem',
    huge: '52rem'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
