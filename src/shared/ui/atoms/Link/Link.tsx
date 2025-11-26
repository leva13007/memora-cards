import React from 'react';
import styles from './Link.module.css';
import { Link as RouterLink } from 'react-router';
import { cx } from '../../../../utils';

interface LinkProps {
  children: React.ReactNode;
  className?: string[];
  style?: React.CSSProperties;
  ['data-testid']?: string;
  to: string;
  ['aria-label']?: string;
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  style,
  to,
  'aria-label': ariaLabel,
  'data-testid': dataTestId = 'link'
}) => {
  const classes = cx(
    styles.link,
    ...(className || [])
  );

  return (
    <RouterLink to={to} style={style} className={classes} data-testid={dataTestId} aria-label={ariaLabel}>
      {children}
    </RouterLink>
  );
};
