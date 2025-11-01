import { type RouteObject, createBrowserRouter } from 'react-router';
import Decks from './pages/decks/index.tsx';
import Home from './pages/home/index.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/decks',
    element: <Decks />
  }
];

const router = createBrowserRouter(routes);

export default router;
