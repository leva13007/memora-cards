import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { TextLink } from './TextLink';
import { renderWithProviders } from '../../../../test-setup/renderWithProviders';

describe('TextLink', () => {
  it('renders link with given content', () => {
    renderWithProviders(<TextLink content="Click me" to="/test" />);

    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Click me');
  });

  it('uses provided data-testid', () => {
    renderWithProviders(
      <TextLink content="Click me" to="/test" data-testid="custom-link" />
    );

    const link = screen.getByTestId('custom-link');
    expect(link).toBeInTheDocument();
  });

  it('applies style prop to the link', () => {
    const style: React.CSSProperties = { color: 'red' };

    renderWithProviders(<TextLink content="Styled" to="/test" style={style} />);

    const link = screen.getByTestId('link');
    // JSDOM normalizes named colors to rgb(), so compare against the normalized value
    expect(link).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('applies aria-label when provided', () => {
    renderWithProviders(
      <TextLink content="Hidden text" to="/test" aria-label="Accessible label" />
    );

    const link = screen.getByLabelText('Accessible label');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-label', 'Accessible label');
  });

  it('sets correct "to" attribute on RouterLink', () => {
    renderWithProviders(<TextLink content="Navigate" to="/target-route" />);

    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('href', '/target-route');
  });

  // TODO: Add tests for classes from css.module and global CSS
});
