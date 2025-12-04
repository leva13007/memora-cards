import React from 'react';
import styles from './Text.module.css';
import { cx } from '../../../../utils';

export interface TextProps {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  as?: 'span' | 'p'
  variant?: 'primary' | 'warning'
  ['data-testid']?: string
}

type CssVariantKey = 'text-medium' | 'text-light' | 'text-bold';

const TextBase: React.FC<TextProps & { cssVariantKey: CssVariantKey }> = ({ children, className, style, variant, as, 'data-testid': dataTestId = 'text-base', cssVariantKey }) => {
  const As = as || 'span';

  const classes = cx(
    styles.text,
    styles[cssVariantKey],
    variant === 'warning' ? styles.warning : styles.primary,
    ...(className || [])
  );

  return (
    <As style={style} className={classes} data-testid={dataTestId}>{children}</As>
  );
};

export const TextMedium: React.FC<TextProps> = ({ children, className, style, variant, as, 'data-testid': dataTestId = 'text-medium' }) => {
  return (
    <TextBase
      children={children}
      className={className}
      style={style}
      variant={variant}
      as={as}
      data-testid={dataTestId}
      cssVariantKey="text-medium"
    />
  );
};
export const TextLight: React.FC<TextProps> = ({ children, className, style, variant, as, 'data-testid': dataTestId = 'text-light' }) => {
  return (
    <TextBase
      children={children}
      className={className}
      style={style}
      variant={variant}
      as={as}
      data-testid={dataTestId}
      cssVariantKey="text-light"
    />
  );
};
export const TextBold: React.FC<TextProps> = ({ children, className, style, variant, as, 'data-testid': dataTestId = 'text-bold' }) => {
  return (
    <TextBase
      children={children}
      className={className}
      style={style}
      variant={variant}
      as={as}
      data-testid={dataTestId}
      cssVariantKey="text-bold"
    />
  );
};
