import React from 'react';
import styles from './Text.module.css';
import { clx } from '../../../../utils';

type TextAs = 'span' | 'p';

type PolymorphicProps<TAs extends TextAs, TOwnProps>
  = TOwnProps
    & Omit<React.ComponentPropsWithoutRef<TAs>, keyof TOwnProps | 'as'>
    & {
      as?: TAs
    };

export type TextProps<TAs extends TextAs = TextAs> = PolymorphicProps<
  TAs,
  {
    children: React.ReactNode
    className?: string[]
    style?: React.CSSProperties
    variant?: 'primary' | 'warning'
    ['data-testid']?: string
  }
>;

type CssVariantKey = 'text-medium' | 'text-light' | 'text-bold';

type TextBaseOwnProps = {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  as?: TextAs
  variant?: 'primary' | 'warning'
  ['data-testid']?: string
  cssVariantKey: CssVariantKey
};

type TextBaseProps<TAs extends TextAs>
  = TextBaseOwnProps
    & Omit<React.ComponentPropsWithoutRef<TAs>, keyof TextBaseOwnProps | 'as'>
    ;

const TextBase = <TAs extends TextAs = 'span'>({ children, className, style, variant, as, 'data-testid': dataTestId = 'text-base', cssVariantKey, ...rest }: TextBaseProps<TAs>) => {
  const As: TextAs = as ?? 'span';

  const classes = clx(
    styles,
    'text',
    styles[cssVariantKey],
    variant === 'warning' ? 'warning' : 'primary',
    ...(className || [])
  );

  if (As === 'p') {
    return (
      <p style={style} className={classes} data-testid={dataTestId} {...(rest as React.ComponentPropsWithoutRef<'p'>)}>
        {children}
      </p>
    );
  };

  return (
    <span style={style} className={classes} data-testid={dataTestId} {...(rest as React.ComponentPropsWithoutRef<'span'>)}>
      {children}
    </span>
  );
};

export const TextMedium = <TAs extends TextAs = 'span'>(
  { children, className, style, variant, as, 'data-testid': dataTestId = 'text-medium', ...rest }: TextProps<TAs>
) => {
  return (
    <TextBase<TAs>
      children={children}
      className={className}
      style={style}
      variant={variant}
      as={as}
      data-testid={dataTestId}
      cssVariantKey="text-medium"
      {...(rest as React.ComponentPropsWithoutRef<TAs>)}
    />
  );
};
export const TextLight = <TAs extends TextAs = 'span'>(
  { children, className, style, variant, as, 'data-testid': dataTestId = 'text-light', ...rest }: TextProps<TAs>
) => {
  return (
    <TextBase<TAs>
      children={children}
      className={className}
      style={style}
      variant={variant}
      as={as}
      data-testid={dataTestId}
      cssVariantKey="text-light"
      {...(rest as React.ComponentPropsWithoutRef<TAs>)}
    />
  );
};
export const TextBold = <TAs extends TextAs = 'span'>(
  { children, className, style, variant, as, 'data-testid': dataTestId = 'text-bold', ...rest }: TextProps<TAs>
) => {
  return (
    <TextBase<TAs>
      children={children}
      className={className}
      style={style}
      variant={variant}
      as={as}
      data-testid={dataTestId}
      cssVariantKey="text-bold"
      {...(rest as React.ComponentPropsWithoutRef<TAs>)}
    />
  );
};
