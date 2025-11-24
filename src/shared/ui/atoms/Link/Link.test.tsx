import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from './Link';
import { renderWithProviders } from '../../../../test-setup/renderWithProviders';
import styles from './Link.module.css';

describe('Link', () => {
  it('renders children and has correct href', () => {
    const text = 'Open cards';
    const to = '/cards';

    renderWithProviders(<Link to={to}>{text}</Link>, { route: '/' });

    const link = screen.getByText(text) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toContain(to);
  });

  it('applies provided className array and inline styles', () => {
    const text = 'Styled link';
    const to = '/styled';
    const extraClass1 = 'extra-1';
    const extraClass2 = 'extra-2';
    const style: React.CSSProperties = { color: 'red' };

    renderWithProviders(
      <Link to={to} className={[extraClass1, extraClass2]} style={style}>
        {text}
      </Link>,
      { route: '/' }
    );

    const link = screen.getByText(text) as HTMLAnchorElement;
    const classes = link.className.split(' ');
    expect(classes).toContain(styles.link);
    expect(classes).toContain(extraClass1);
    expect(classes).toContain(extraClass2);
    expect(link.style.color).toBe('red');
  });

  it('respects aria-label and custom data-testid', () => {
    const text = 'Aria link';
    const to = '/aria';

    renderWithProviders(
      <Link to={to} aria-label="go cards" data-testid="my-link">
        {text}
      </Link>,
      { route: '/' }
    );

    const link = screen.getByTestId('my-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-label', 'go cards');
  });
});
