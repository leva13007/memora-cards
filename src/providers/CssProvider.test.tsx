import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { CssProvider } from './CssProvider';

describe('CssProvider', () => {
  const originalSetAttribute = document.documentElement.setAttribute;

  beforeEach(() => {
    document.documentElement.setAttribute = vi.fn();
  });

  afterEach(() => {
    document.documentElement.setAttribute = originalSetAttribute;
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders children', () => {
    const { getByText } = render(
      <CssProvider>
        <div>Child content</div>
      </CssProvider>
    );

    expect(getByText('Child content')).toBeDefined();
  });

  it('sets data-theme to light by default', () => {
    render(
      <CssProvider>
        <div>Child</div>
      </CssProvider>
    );

    expect(document.documentElement.setAttribute).toHaveBeenCalledWith(
      'data-theme',
      'light'
    );
  });

  it('sets data-theme to dark when theme="dark"', () => {
    render(
      <CssProvider theme="dark">
        <div>Child</div>
      </CssProvider>
    );

    expect(document.documentElement.setAttribute).toHaveBeenCalledWith(
      'data-theme',
      'dark'
    );
  });

  it('updates data-theme when theme changes', () => {
    const { rerender } = render(
      <CssProvider theme="light">
        <div>Child</div>
      </CssProvider>
    );

    expect(document.documentElement.setAttribute).toHaveBeenLastCalledWith(
      'data-theme',
      'light'
    );

    rerender(
      <CssProvider theme="dark">
        <div>Child</div>
      </CssProvider>
    );

    expect(document.documentElement.setAttribute).toHaveBeenLastCalledWith(
      'data-theme',
      'dark'
    );
  });
});
