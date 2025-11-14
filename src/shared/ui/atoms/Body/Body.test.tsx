import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Body } from './Body.tsx';
import styles from './Body.module.css';

const testClassName = 'custom-class';
const style = { letterSpacing: '10px' };

describe('Body 1', () => {
  it('style, no theme prop, className, children', () => {
    render(<Body style={style} className={testClassName}><h1>Title</h1></Body>);

    const layoutElement = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(layoutElement).toHaveClass(styles.layout);
    expect(layoutElement).toContainHTML('<h1>Title</h1>');

    const bodyElement = layoutElement?.parentElement;
    expect(bodyElement).toHaveClass(styles.body);
    expect(bodyElement).toHaveClass(testClassName);
    expect(bodyElement).toHaveStyle(style);
    expect(bodyElement).toHaveAttribute('data-theme', 'light');
  });
});

describe('Body 2', () => {
  it('theme darl', () => {
    render(<Body theme="dark"><h1>Title</h1></Body>);

    const bodyElement = screen.getByRole('heading', { level: 1 }).parentElement.parentElement;
    expect(bodyElement).toHaveAttribute('data-theme', 'dark');
  });
});

describe('Body 3', () => {
  it('theme light', () => {
    render(<Body theme="light"><h1>Title</h1></Body>);

    const bodyElement = screen.getByRole('heading', { level: 1 }).parentElement.parentElement;
    expect(bodyElement).toHaveAttribute('data-theme', 'light');
  });
});
