import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Decks } from './Decks.tsx';
import { renderWithProviders } from '../../test-setup/renderWithProviders.tsx';

describe('Decks page', () => {
  it('renders Decks page with correct content', async ({ expect }) => {
    renderWithProviders(<Decks />, { route: '/decks' });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Decks Page')).toBeInTheDocument();
    expect(screen.getByText('Go to Home')).toBeInTheDocument();
  });
});
