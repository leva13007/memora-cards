import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router/dom';
import router from './app/routes.ts';
import { CssProvider } from './providers/CssProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssProvider>
      <RouterProvider router={router} />
    </CssProvider>
  </StrictMode>
);
