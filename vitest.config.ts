import { defineConfig, defineProject, mergeConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'dist/',
          '**/*.d.ts',
          'vite.config.ts',
          'vitest.config.ts',
          'src/**/*.stories.tsx',
          '.storybook/**'
        ]
      },
      projects: [
        defineProject({
          test: {
            name: 'react',
            globals: true,
            environment: 'jsdom'
          }
        }),
        defineProject({
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
              storybookScript: 'pnpm storybook --no-open'
            })
          ],
          optimizeDeps: {
            include: [
              'react',
              'react/jsx-dev-runtime',
              'react-dom',
              'react/jsx-runtime'
            ]
          },
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              provider: playwright({}),
              headless: true,
              instances: [{ browser: 'chromium' }]
            },
            setupFiles: ['./.storybook/vitest.setup.ts']
          }
        })
      ]
    }
  })
);
