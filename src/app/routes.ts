import { createBrowserRouter } from 'react-router';
import { Decks } from '../pages/Decks/Decks';
import { Home } from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/decks',
    Component: Decks
  }
]);

export default router;
