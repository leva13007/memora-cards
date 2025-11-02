import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should display default text "MEMORA CARDS"', () => {
    expect(screen.getByText('MEMORA CARDS')).toBeInTheDocument();
  });
});
