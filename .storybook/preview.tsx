import React from 'react';
import type { Preview } from '@storybook/react-vite';
import {
  createHashRouter,
  RouterProvider
} from 'react-router';

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
    (Story) => {
      const router = createHashRouter([
        {
          path: '/',
          Component: Story
        }
      ]);

      return <RouterProvider router={router} />;
    }
  ]
};

export default preview;
