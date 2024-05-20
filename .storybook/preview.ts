import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: theme.colors.tertiary
        },
        {
          name: 'light',
          value: theme.colors.white
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme
      },
      defaultTheme: 'dark',
      Provider: ThemeProvider,
      GlobalStyles
    })
  ]
}

export default preview
