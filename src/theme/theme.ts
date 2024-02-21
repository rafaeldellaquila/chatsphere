import '@fontsource/roboto'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#355788'
    },
    secondary: {
      main: '#2b3138'
    },
    background: {
      default: '#0d1117',
      paper: '#21262d'
    },
    text: {
      secondary: '#A5ACB2',
      disabled: '#A5ACB2'
    },
    error: {
      main: '#d23325'
    },
    warning: {
      main: '#fcc22c'
    },
    info: {
      main: '#039ee1'
    },
    success: {
      main: '#54D979'
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 5
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: 'transparent'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: true
      }
    }
  }
})

export default theme
