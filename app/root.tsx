import './reset.css';
import './variables.css';
import { createRoot } from 'react-dom/client';
import App from '../src/App.tsx';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
