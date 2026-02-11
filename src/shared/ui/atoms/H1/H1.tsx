import React from 'react';
import styles from './H1.module.css';
import { clx } from '../../../../utils';

interface H1Props {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  ['data-testid']?: string
}

export const H1: React.FC<H1Props> = ({ children, className, style, 'data-testid': dataTestId = 'heading-1' }) => {
  const classes = clx(
    styles,
    'h1',
    ...(className || [])
  );

  return (
    <h1 style={style} className={classes} data-testid={dataTestId}>{children}</h1>
  );
};
