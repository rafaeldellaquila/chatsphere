import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['styled-components'],
        babelrc: false,
        configFile: false
      }
    })
  ],
  build: {},
  resolve: {
    alias: [
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      { find: '@stories', replacement: resolve(__dirname, './src/stories') },
      { find: '@types', replacement: resolve(__dirname, './src/types') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@i18n', replacement: resolve(__dirname, './src/i18n') },
      { find: '@styles', replacement: resolve(__dirname, './src/styles') },
      { find: '@utils', replacement: resolve(__dirname, './src/utils') }
    ]
  }
})
