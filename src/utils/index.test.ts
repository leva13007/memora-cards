import { describe, it, expect } from 'vitest';
import { cx } from './index';

describe('cx', () => {
  it('returns empty string when no arguments are provided', () => {
    expect(cx()).toBe('');
  });

  it('joins multiple string class names with a space', () => {
    expect(cx('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values (undefined, null, false, empty string)', () => {
    // Note: empty string is falsy and should be filtered as well
    expect(cx('a', undefined, null, false, '', 'b')).toBe('a b');
  });

  it('handles a single valid class name', () => {
    expect(cx('only-one')).toBe('only-one');
  });

  it('handles only falsy values', () => {
    expect(cx(undefined, null, false, '')).toBe('');
  });

  it('handles duplicate class names', () => {
    expect(cx('a', 'a', 'b')).toBe('a a b');
  });

  it('flattens a simple nested array of class names', () => {
    expect(cx(['a', 'b'] as unknown as never)).toBe('a b');
  });

  it('flattens deeply nested arrays of class names', () => {
    const nested = ['a', ['b', ['c', 'd']]] as unknown as never;
    expect(cx(nested)).toBe('a b c d');
  });

  it('filters falsy values inside nested arrays', () => {
    const nested = ['a', [undefined, null, false, '', 'b']] as unknown as never;
    expect(cx(nested)).toBe('a b');
  });

  it('handles mix of top-level and nested array class names', () => {
    const nested = ['a', ['b', 'c']] as unknown as never;
    expect(cx('start', nested, 'end' as unknown as never)).toBe('start a b c end');
  });

  it('returns empty string for nested arrays with only falsy values', () => {
    const nested = [[undefined, null], [false, '']] as unknown as never;
    expect(cx(nested)).toBe('');
  });

  it('preserves order with nested arrays and duplicates', () => {
    const nested = ['a', ['b', 'a', 'c']] as unknown as never;
    expect(cx('x', nested, 'y' as unknown as never)).toBe('x a b a c y');
  });
});
