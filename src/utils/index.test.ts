import { describe, it, expect } from 'vitest';
import { clx } from './index';

describe('clx', () => {
  const cssModule = {
    'a': 'hashed_a',
    'b': 'hashed_b',
    'with-dash': 'hashed_with_dash'
  };

  it('returns empty string when no classes are provided', () => {
    expect(clx(cssModule)).toBe('');
  });

  it('maps known keys from css module and keeps unknown as-is', () => {
    expect(clx(cssModule, 'a', 'b', 'c')).toBe('hashed_a hashed_b c');
  });

  it('filters out falsy values', () => {
    expect(clx(cssModule, 'a', undefined, null, false, '', 'b')).toBe(
      'hashed_a hashed_b'
    );
  });

  it('handles a single valid class', () => {
    expect(clx(cssModule, 'a')).toBe('hashed_a');
  });

  it('handles only falsy values', () => {
    expect(clx(cssModule, undefined, null, false, '')).toBe('');
  });

  it('handles duplicate class names (after mapping)', () => {
    expect(clx(cssModule, 'a', 'a', 'b')).toBe('hashed_a hashed_a hashed_b');
  });

  it('falls back to raw class if not present in css module', () => {
    expect(clx(cssModule, 'unknown', 'a')).toBe('unknown hashed_a');
  });

  it('handles keys that include dashes', () => {
    expect(clx(cssModule, 'with-dash')).toBe('hashed_with_dash');
  });

  it('flattens nested arrays of classes', () => {
    const nested = ['a', ['b', ['c', 'd']]] as unknown as never;
    expect(clx(cssModule, 'hashed_a', 'hashed_b', nested)).toBe('hashed_a hashed_b hashed_a hashed_b c d');
  });

  it('filters falsy values inside nested arrays', () => {
    const nested = ['a', [undefined, null, false, '', 'b']] as unknown as never;
    expect(clx(cssModule, nested)).toBe('hashed_a hashed_b');
  });

  it('handles mix of top-level and nested class names', () => {
    const nested = ['a', ['b', 'c']] as unknown as never;
    expect(clx(cssModule, 'start', nested, 'end' as unknown as never)).toBe(
      'start hashed_a hashed_b c end'
    );
  });

  it('returns empty string for nested arrays with only falsy values', () => {
    const nested = [[undefined, null], [false, '']] as unknown as never;
    expect(clx(cssModule, nested)).toBe('');
  });

  it('preserves order with nested arrays and duplicates', () => {
    const nested = ['a', ['b', 'a', 'c']] as unknown as never;
    expect(clx(cssModule, 'x', nested, 'y' as unknown as never)).toBe(
      'x hashed_a hashed_b hashed_a c y'
    );
  });

  it('ignores extra keys not used in arguments', () => {
    const bigCssModule = { ...cssModule, extra: 'extra_hashed' };
    expect(clx(bigCssModule, 'a')).toBe('hashed_a');
  });
});
