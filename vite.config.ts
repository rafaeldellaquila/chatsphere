import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {},
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './assets'),
      '@components': resolve(__dirname, './components'),
      '@firebase': resolve(__dirname, './firebase'),
      '@i18n': resolve(__dirname, './i18n'),
      '@theme': resolve(__dirname, './theme')
    }
  }
})
