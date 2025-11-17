import React from 'react';
import type { Preview } from '@storybook/react-vite';
import {
  createHashRouter,
  RouterProvider
} from 'react-router';

import './preview.css';

import { CssProvider } from '../src/providers/CssProvider.tsx';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' }
      ],
      showName: true
    }
  }
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const router = createHashRouter([
        {
          path: '/',
          Component: Story
        }
      ]);

      return (
        <CssProvider theme={theme}>
          <RouterProvider router={router} />
        </CssProvider>
      );
    }
  ]
};

export default preview;
