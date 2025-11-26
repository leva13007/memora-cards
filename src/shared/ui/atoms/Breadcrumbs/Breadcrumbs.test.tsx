import React from 'react';
import { screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';
import { renderWithProviders } from '../../../../test-setup/renderWithProviders';

// Mock CSS module
vi.mock('./Breadcrumbs.module.css', () => ({
  default: {
    'breadcrumbs': 'breadcrumbs',
    'variant--truncate': 'variant--truncate',
    'variant--wrap': 'variant--wrap',
    'separator': 'separator',
    'label': 'label'
  }
}));

describe('Breadcrumbs', () => {
  const baseItems: BreadcrumbItem[] = [
    { label: 'Home', link: '/' },
    { label: 'Library', link: '/library' },
    { label: 'Current' }
  ];

  it('renders with default props and items', () => {
    renderWithProviders(<Breadcrumbs items={baseItems} />);

    const nav = screen.getByTestId('breadcrumbs');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'breadcrumbs');

    const list = nav.querySelector('ol');
    expect(list).toBeInTheDocument();

    const items = list!.querySelectorAll('li');
    expect(items.length).toBe(3);

    // First item has no separator
    expect(items[0].querySelector(`.${'separator'}`)).toBeNull();

    // Subsequent items have separator
    expect(items[1].querySelector(`.${'separator'}`)).toHaveTextContent('/');
    expect(items[2].querySelector(`.${'separator'}`)).toHaveTextContent('/');

    // Last item has aria-current="page"
    expect(items[2]).toHaveAttribute('aria-current', 'page');
    expect(items[0].getAttribute('aria-current')).toBeNull();
  });

  it('uses custom data-testid when provided', () => {
    renderWithProviders(<Breadcrumbs items={baseItems} data-testid="custom-breadcrumbs" />);
    expect(screen.getByTestId('custom-breadcrumbs')).toBeInTheDocument();
  });

  it('applies variant class names - truncate', () => {
    renderWithProviders(
      <Breadcrumbs items={baseItems} variant="truncate" />
    );
    const list = screen.getByRole('navigation').querySelector('ol')!;
    expect(list.className).toContain('breadcrumbs');
    expect(list.className).toContain('variant--truncate');
  });

  it('applies variant class names - wrap', () => {
    renderWithProviders(
      <Breadcrumbs items={baseItems} variant="wrap" />
    );

    const list2 = screen.getByRole('navigation').querySelector('ol')!;
    expect(list2.className).toContain('variant--wrap');
  });

  it('applies custom className and style to the list', () => {
    renderWithProviders(
      <Breadcrumbs
        items={baseItems}
        className={['extra-class']}
        style={{ marginTop: '10px' }}
      />
    );

    const list = screen.getByRole('navigation').querySelector('ol')!;
    expect(list.className).toContain('extra-class');
    expect(list).toHaveStyle({ marginTop: '10px' });
  });

  it('renders links for items with link and text for items without link', () => {
    renderWithProviders(<Breadcrumbs items={baseItems} />);

    const links0 = screen.getByTestId('breadcrumbs-link-0');

    expect(links0).toHaveAttribute('href', '/');
    expect(links0).toHaveTextContent('Home');

    const links1 = screen.getByTestId('breadcrumbs-link-1');

    expect(links1).toHaveAttribute('href', '/library');
    expect(links1).toHaveTextContent('Library');

    const texts0 = screen.getByTestId('breadcrumbs-text');

    expect(texts0).toHaveTextContent('Current');
  });

  it('uses provided separator', () => {
    renderWithProviders(<Breadcrumbs items={baseItems} separator=">" />);

    const separators = screen
      .getByRole('navigation')
      .querySelectorAll(`.${'separator'}`);
    expect(separators.length).toBe(2);
    separators.forEach((sep) => {
      expect(sep).toHaveTextContent('>');
      expect(sep).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('handles single item without separators', () => {
    renderWithProviders(<Breadcrumbs items={[{ label: 'Only' }]} />);

    const items = screen
      .getByRole('navigation')
      .querySelectorAll('li');
    expect(items.length).toBe(1);

    expect(items[0]).toHaveAttribute('aria-current', 'page');
    expect(items[0].querySelector(`.${'separator'}`)).toBeNull();
  });
});
