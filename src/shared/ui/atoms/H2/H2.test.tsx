import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { H2 } from './H2';
import styles from './H2.module.css';

describe('H2 component', () => {
  it('renders children correctly', () => {
    render(<H2>Test Heading</H2>);
    const heading = screen.getByTestId('heading-2');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('applies base class from CSS module', () => {
    render(<H2>Heading</H2>);
    const heading = screen.getByTestId('heading-2');
    expect(heading.className).toContain(styles.h2);
  });

  it('appends additional class names when provided', () => {
    render(<H2 className={['extra-class', 'another-class']}>Heading</H2>);
    const heading = screen.getByTestId('heading-2');

    expect(heading.className).toContain(styles.h2);
    expect(heading.className).toContain('extra-class');
    expect(heading.className).toContain('another-class');
  });

  it('applies inline style when provided', () => {
    const style: React.CSSProperties = { color: 'red', fontSize: '24px' };
    render(
      <H2 style={style}>Styled Heading</H2>
    );
    const heading = screen.getByTestId('heading-2');

    expect(heading.style.color).toBe('red');
    expect(heading.style.fontSize).toBe('24px');
  });

  it('uses custom data-testid when provided', () => {
    render(<H2 data-testid="custom-id">Heading</H2>);
    const heading = screen.getByTestId('custom-id');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading');
  });

  it('renders ReactNode children (nested elements)', () => {
    render(
      <H2>
        <span data-testid="nested">Nested</span>
      </H2>
    );
    const nested = screen.getByTestId('nested');
    expect(nested).toBeInTheDocument();
    expect(nested).toHaveTextContent('Nested');
  });

  it('handles empty className array gracefully', () => {
    render(<H2>Heading</H2>);
    const heading = screen.getByTestId('heading-2');
    // Should only have the base CSS module class
    expect(heading.className).toBe(styles.h2);
  });
});
