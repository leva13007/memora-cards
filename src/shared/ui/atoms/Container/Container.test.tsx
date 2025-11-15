import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';
import styles from './Container.module.css';

describe('Container', () => {
  it('renders children content', () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default container class', () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstElementChild as HTMLDivElement;
    expect(div.className.split(' ')).toContain(styles.container);
  });

  it('applies additional classNames from props', () => {
    const { container } = render(
      <Container className={['extra-class-1', 'extra-class-2']}>Content</Container>
    );
    const div = container.firstElementChild as HTMLDivElement;
    const classes = div.className.split(' ');
    expect(classes).toContain(styles.container);
    expect(classes).toContain('extra-class-1');
    expect(classes).toContain('extra-class-2');
  });

  it('applies fluid class when fluid prop is true', () => {
    const { container } = render(<Container fluid>Content</Container>);
    const div = container.firstElementChild as HTMLDivElement;
    const classes = div.className.split(' ');
    expect(classes).toContain(styles.container);
    expect(classes).toContain(styles['container-fluid']);
  });

  it('does not apply fluid class when fluid prop is false', () => {
    const { container } = render(<Container fluid={false}>Content</Container>);
    const div = container.firstElementChild as HTMLDivElement;
    const classes = div.className.split(' ');
    expect(classes).toContain(styles.container);
    expect(classes.includes(styles['container-fluid'])).toBe(false);
  });

  it('applies inline styles correctly', () => {
    const style: React.CSSProperties = { backgroundColor: 'red', padding: '10px' };
    const { container } = render(<Container style={style}>Content</Container>);
    const div = container.firstElementChild as HTMLDivElement;
    expect(div.style.backgroundColor).toBe('red');
    expect(div.style.padding).toBe('10px');
  });

  it('accepts ReactNode children (not only strings)', () => {
    render(
      <Container>
        <span data-testid="child-span">Child</span>
      </Container>
    );
    expect(screen.getByTestId('child-span')).toBeInTheDocument();
  });
});
