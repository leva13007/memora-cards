import React from 'react';
import styles from './TextLink.module.css';
import { Link as RouterLink } from 'react-router';
import { clx } from '../../../../utils';

interface TextLinkProps {
  content: string
  className?: string[]
  style?: React.CSSProperties
  ['data-testid']?: string
  to: string
  ['aria-label']?: string
}

export const TextLink: React.FC<TextLinkProps> = ({
  content,
  className,
  style,
  to,
  'aria-label': ariaLabel,
  'data-testid': dataTestId = 'link'
}) => {
  const classes = clx(
    styles,
    'link',
    ...(className || [])
  );

  return (
    <RouterLink
      to={to}
      style={style}
      className={classes}
      data-testid={dataTestId}
      aria-label={ariaLabel}
    >
      {content}
    </RouterLink>
  );
};
