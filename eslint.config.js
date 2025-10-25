import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import rules from './eslint.rules.js'
import globals from 'globals'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx,js,mts,cts}'],
    plugins: {
      '@typescript-eslint': tseslint.configs.recommended[0].plugins['@typescript-eslint'],
      'react-hooks': reactHooks.configs['recommended-latest'].plugins['react-hooks'],
      '@stylistic': stylistic.configs['recommended'].plugins['@stylistic'],
      'react-refresh': reactRefresh.configs.vite.plugins['react-refresh']
    },
    rules: {
      ...rules.ts,
      ...rules.js,
      ...rules.reactHooks,
      ...rules.stylistic,
      ...reactRefresh.configs.vite.rules
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        ...globals.browser
      }
    }
  }
])
