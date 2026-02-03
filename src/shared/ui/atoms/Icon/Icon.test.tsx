import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Close,
  Delete,
  Edit,
  Settings,
  Star,
  StarFill,
  Watch
} from './index';
import type { IconProps } from './iconProps';

const iconTestMatrix = [
  { name: 'Close', Component: Close, defaultTestId: 'icon-close' },
  { name: 'Delete', Component: Delete, defaultTestId: 'icon-delete' },
  { name: 'Edit', Component: Edit, defaultTestId: 'icon-edit' },
  { name: 'Settings', Component: Settings, defaultTestId: 'icon-settings' },
  { name: 'Star', Component: Star, defaultTestId: 'icon-star' },
  { name: 'StarFill', Component: StarFill, defaultTestId: 'icon-star-fill' },
  { name: 'Watch', Component: Watch, defaultTestId: 'icon-watch' }
] satisfies Array<{
  name: string
  Component: React.FC<IconProps>
  defaultTestId: string
}>;

describe('Icon components', () => {
  describe.each(iconTestMatrix)('$name', ({ name, Component, defaultTestId }) => {
    it('renders with default data-testid and is hidden from assistive tech', () => {
      render(<Component />);
      const icon = screen.getByTestId(defaultTestId);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('aria-hidden', 'true');
      expect(icon).toHaveAttribute('role', 'presentation');
    });

    it('allows overriding data-testid', () => {
      render(<Component data-testid="custom-icon" />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('exposes accessible label when aria-label is provided', () => {
      const accessibleLabel = `${name} icon`;
      render(<Component aria-label={accessibleLabel} />);
      const icon = screen.getByLabelText(accessibleLabel);
      expect(icon).toHaveAttribute('role', 'img');
      expect(icon).toHaveAttribute('aria-hidden', 'false');
    });
  });
});
