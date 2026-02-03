import { describe, expect, it } from 'vitest';
import { getIconAccessibilityProps } from './iconProps';

describe('getIconAccessibilityProps', () => {
  it('returns presentation role and aria-hidden when no label is provided', () => {
    const result = getIconAccessibilityProps();
    expect(result).toEqual({
      'role': 'presentation',
      'aria-hidden': true
    });
  });

  it('returns img role and exposes aria-label when label is provided', () => {
    const result = getIconAccessibilityProps(' Watch Icon ');
    expect(result).toEqual({
      'role': 'img',
      'aria-label': 'Watch Icon',
      'aria-hidden': false
    });
  });

  it('respects explicit aria-hidden=true even with label', () => {
    const result = getIconAccessibilityProps('Decorative star', true);
    expect(result).toEqual({
      'aria-hidden': true,
      'aria-label': 'Decorative star'
    });
  });

  it('respects explicit aria-hidden=false and keeps the label', () => {
    const result = getIconAccessibilityProps('Settings gear', false);
    expect(result).toEqual({
      'role': 'img',
      'aria-hidden': false,
      'aria-label': 'Settings gear'
    });
  });

  it('parses string boolean values for aria-hidden', () => {
    expect(getIconAccessibilityProps(undefined, 'true')).toEqual({
      'aria-hidden': true
    });

    expect(getIconAccessibilityProps('Clock', 'false')).toEqual({
      'role': 'img',
      'aria-hidden': false,
      'aria-label': 'Clock'
    });
  });
});
