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
            environment: 'jsdom',
            setupFiles: ['./test-setup.ts']
          }
        }),
        defineProject({
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: path.join(dirname, '.storybook'),
              // This should match your package.json script to run Storybook
              // The --no-open flag will skip the automatic opening of a browser
              storybookScript: 'yarn storybook --no-open'
            })
          ],
          test: {
            name: 'storybook',
            // Enable browser mode
            browser: {
              enabled: true,
              // Make sure to install Playwright
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
