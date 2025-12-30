import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';

type TextMediumProps = React.ComponentPropsWithoutRef<'span'> & {
  className?: string | string[]
};

type TextLinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'children'> & {
  to: string
  content: React.ReactNode
  className?: string | string[]
};

// Mock CSS modules to predictable classnames
vi.mock('./Breadcrumbs.module.css', () => ({
  default: {
    breadcrumbs: 'breadcrumbs',
    separator: 'separator',
    label: 'label'
  }
}));

// Mock Text primitives to simple components
vi.mock('../Text/Text.tsx', () => ({
  TextMedium: ({ children, className, ...rest }: TextMediumProps) => (
    <span className={Array.isArray(className) ? className.join(' ') : className} {...rest}>
      {children}
    </span>
  )
}));

vi.mock('../TextLink/TextLink.tsx', () => ({
  TextLink: ({ to, className, content, ...rest }: TextLinkProps) => (
    <a href={to} className={Array.isArray(className) ? className.join(' ') : className} {...rest}>
      {content}
    </a>
  )
}));

describe('Breadcrumbs', () => {
  it('renders nav with default test id and aria-label', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', link: '/' },
          { label: 'Library' }
        ]}
      />
    );

    const nav = screen.getByTestId('breadcrumbs');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'breadcrumbs');
  });

  it('applies className and style to the <ol>', () => {
    render(
      <Breadcrumbs
        data-testid="bc"
        className={['extra-a', 'extra-b']}
        style={{ marginTop: 12 }}
        items={[
          { label: 'Home', link: '/' },
          { label: 'Page' }
        ]}
      />
    );

    const nav = screen.getByTestId('bc');
    const ol = within(nav).getByRole('list');

    expect(ol.className).toContain('breadcrumbs');
    expect(ol.className).toContain('extra-a');
    expect(ol.className).toContain('extra-b');
    expect(ol).toHaveStyle({ marginTop: '12px' });
  });

  it('renders separators for items after the first with default separator "/"', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', link: '/' },
          { label: 'Section', link: '/section' },
          { label: 'Current' }
        ]}
      />
    );

    const sep1 = screen.getByTestId('breadcrumbs-separator-1');
    const sep2 = screen.getByTestId('breadcrumbs-separator-2');

    expect(sep1).toHaveTextContent('/');
    expect(sep2).toHaveTextContent('/');
    expect(sep1).toHaveAttribute('aria-hidden', 'true');
    expect(sep2).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders custom separator', () => {
    render(
      <Breadcrumbs
        separator=">"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Current' }
        ]}
      />
    );

    expect(screen.getByTestId('breadcrumbs-separator-1')).toHaveTextContent('>');
  });

  it('renders links for non-last items when link is provided, and text for last item', () => {
    render(
      <Breadcrumbs
        data-testid="bc"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Section', link: '/section' },
          { label: 'Current', link: '/current' }
        ]}
      />
    );

    expect(screen.getByTestId('bc-link-0')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('bc-link-1')).toHaveAttribute('href', '/section');

    // last item should render as text, even if link exists
    expect(screen.queryByTestId('bc-link-2')).toBeNull();
    expect(screen.getByTestId('bc-text')).toHaveTextContent('Current');
  });

  it('renders first item without a separator (covers the ": undefined" branch)', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Only', link: '/' },
          { label: 'Current' }
        ]}
      />
    );

    expect(screen.queryByTestId('breadcrumbs-separator-0')).toBeNull();
  });

  it('sets aria-current="page" only on the last breadcrumb item', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', link: '/' },
          { label: 'Section', link: '/section' },
          { label: 'Current' }
        ]}
      />
    );

    const nav = screen.getByTestId('breadcrumbs');

    const listItems = within(nav).getAllByRole('listitem');

    // aria-current is on the current crumb element itself
    const currentCrumb = within(listItems[2]).getByTestId('breadcrumbs-text');
    expect(currentCrumb).toHaveAttribute('aria-current', 'page');
  });

  it('renders the last breadcrumb as not focusable text (tabIndex=-1)', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', link: '/' },
          { label: 'Current' }
        ]}
      />
    );

    const currentCrumb = screen.getByTestId('breadcrumbs-text');
    expect(currentCrumb).toHaveAttribute('tabindex', '-1');
  });

  it('uses provided data-testid prefix for link and separator test ids', () => {
    render(
      <Breadcrumbs
        data-testid="custom"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Current' }
        ]}
      />
    );

    expect(screen.getByTestId('custom')).toBeInTheDocument();
    expect(screen.getByTestId('custom-link-0')).toBeInTheDocument();
    expect(screen.getByTestId('custom-separator-1')).toBeInTheDocument();
  });
});
