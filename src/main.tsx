import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import App from '@pages/App'

import GlobalStyles from '@styles/global.ts'
import theme from '@styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
)
