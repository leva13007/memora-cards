import './reset.css';
import './variables.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
