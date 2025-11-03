import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Home } from './Home.tsx';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../test-setup/renderWithProviders.tsx';

describe('Home page', () => {
  it('renders Home page with correct content', () => {
    renderWithProviders(<Home />, { route: '/' });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByText('Go to Decks')).toBeInTheDocument();
  });
});
