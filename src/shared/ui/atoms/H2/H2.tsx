import React from 'react';
import styles from './H2.module.css';
import { clx } from '../../../../utils';

interface H1Props {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  ['data-testid']?: string
}

export const H2: React.FC<H1Props> = ({ children, className, style, 'data-testid': dataTestId = 'heading-2' }) => {
  const classes = clx(
    styles,
    'h2',
    ...(className || [])
  );

  return (
    <h2 style={style} className={classes} data-testid={dataTestId}>{children}</h2>
  );
};
