module.exports = {
  root: true,
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  env: { browser: true, es2020: true },
  plugins: ['react-refresh', 'import', 'prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx']
      },
      typescript: {
        project: './tsconfig.json'
      },
      alias: {
        map: [
          ['@', './src'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@firebase', './src/firebase'],
          ['@i18n', './src/i18n'],
          ['@theme', './src/theme']
        ],
        extensions: ['.js', '.jsx', '.tsx', '.ts']
      }
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      }
    ],
    'import/no-unresolved': 'error'
  }
}
