import React from 'react';
import styles from './H1.module.css';

interface H1Props {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  ['data-testid']?: string
}

export const H1: React.FC<H1Props> = ({ children, className, style, 'data-testid': dataTestId = 'heading' }) => {
  const cls = [styles.h1];
  if (className) cls.push(...className);
  const classes = cls.join(' ');

  return (
    <h1 style={style} className={classes} data-testid={dataTestId}>{children}</h1>
  );
};
