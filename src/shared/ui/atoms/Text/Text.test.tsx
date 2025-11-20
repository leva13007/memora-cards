import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextMedium, TextLight, TextBold, type TextProps } from './Text';

describe('Text components', () => {
  const content = 'Sample text';

  const sharedTests = (
    Component: React.FC<TextProps>,
    defaultTestId: string,
    cssModuleClass: string
  ) => {
    it('renders children', () => {
      render(<Component>{content}</Component>);
      expect(screen.getByTestId(defaultTestId)).toHaveTextContent(content);
    });

    it('uses span as default element', () => {
      render(<Component>{content}</Component>);
      const el = screen.getByTestId(defaultTestId);
      expect(el.tagName.toLowerCase()).toBe('span');
    });

    it('allows changing element via "as" prop', () => {
      render(
        <Component as="p">
          {content}
        </Component>
      );
      const el = screen.getByTestId(defaultTestId);
      expect(el.tagName.toLowerCase()).toBe('p');
    });

    it('applies primary variant by default', () => {
      render(<Component>{content}</Component>);
      const el = screen.getByTestId(defaultTestId);
      expect(el.className).toContain('primary');
      expect(el.className).not.toContain('warning');
    });

    it('applies warning variant when specified', () => {
      render(
        <Component variant="warning">
          {content}
        </Component>
      );
      const el = screen.getByTestId(defaultTestId);
      expect(el.className).toContain('warning');
    });

    it('applies base and variant-specific classes', () => {
      render(<Component>{content}</Component>);
      const el = screen.getByTestId(defaultTestId);
      expect(el.className).toContain('text');
      expect(el.className).toContain(cssModuleClass);
    });

    it('appends additional classes from className array', () => {
      render(
        <Component className={['extra-class-1', 'extra-class-2']}>
          {content}
        </Component>
      );
      const el = screen.getByTestId(defaultTestId);
      expect(el.className).toContain('extra-class-1');
      expect(el.className).toContain('extra-class-2');
    });

    it('applies inline styles', () => {
      const style: React.CSSProperties = { color: 'rgb(255, 0, 0)', fontSize: '20px' };
      render(
        <Component style={style}>
          {content}
        </Component>
      );
      const el = screen.getByTestId(defaultTestId);
      expect(el).toHaveStyle({ color: 'rgb(255, 0, 0)', fontSize: '20px' });
    });

    it('supports custom data-testid', () => {
      render(
        <Component data-testid="custom-id">
          {content}
        </Component>
      );
      expect(screen.getByTestId('custom-id')).toBeInTheDocument();
    });
  };

  describe('TextMedium', () => {
    sharedTests(TextMedium, 'text-medium', 'text-medium');
  });

  describe('TextLight', () => {
    sharedTests(TextLight, 'text-light', 'text-light');
  });

  describe('TextBold', () => {
    sharedTests(TextBold, 'text-bold', 'text-bold');
  });
});
