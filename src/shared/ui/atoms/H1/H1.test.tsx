import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { H1 } from './H1';
import styles from './H1.module.css';

describe('H1 component', () => {
  it('renders children correctly', () => {
    render(<H1>Test Heading</H1>);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('applies base class from CSS module', () => {
    render(<H1>Heading</H1>);
    const heading = screen.getByTestId('heading');
    expect(heading.className).toContain(styles.h1);
  });

  it('appends additional class names when provided', () => {
    render(<H1 className={['extra-class', 'another-class']}>Heading</H1>);
    const heading = screen.getByTestId('heading');

    expect(heading.className).toContain(styles.h1);
    expect(heading.className).toContain('extra-class');
    expect(heading.className).toContain('another-class');
  });

  it('applies inline style when provided', () => {
    const style: React.CSSProperties = { color: 'red', fontSize: '24px' };
    render(
      <H1 style={style}>Styled Heading</H1>
    );
    const heading = screen.getByTestId('heading');

    expect(heading.style.color).toBe('red');
    expect(heading.style.fontSize).toBe('24px');
  });

  it('uses custom data-testid when provided', () => {
    render(<H1 data-testid="custom-id">Heading</H1>);
    const heading = screen.getByTestId('custom-id');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading');
  });

  it('renders ReactNode children (nested elements)', () => {
    render(
      <H1>
        <span data-testid="nested">Nested</span>
      </H1>
    );
    const nested = screen.getByTestId('nested');
    expect(nested).toBeInTheDocument();
    expect(nested).toHaveTextContent('Nested');
  });

  it('handles empty className array gracefully', () => {
    render(<H1 className={[]}>Heading</H1>);
    const heading = screen.getByTestId('heading');
    // Should only have the base CSS module class
    expect(heading.className).toBe(styles.h1);
  });
});
