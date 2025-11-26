import React from 'react';
import { TextMedium } from '../Text/Text.tsx';
import { Link } from '../Link/Link.tsx';

import styles from './Breadcrumbs.module.css';
import { cx } from '../../../../utils';

export interface BreadcrumbItem {
  label: string
  link?: string
}

export interface BreadcrumbsProps {
  className?: string[]
  style?: React.CSSProperties
  ['data-testid']?: string
  items: BreadcrumbItem[]
  variant?: 'truncate' | 'wrap'
  separator?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className,
  style,
  items,
  variant = 'truncate',
  separator = '/',
  'data-testid': dataTestId = 'breadcrumbs'
}) => {
  const classes = cx(
    styles.breadcrumbs,
    styles[`variant--${variant}`],
    ...(className || [])
  );

  return (
    <nav data-testid={dataTestId} aria-label="breadcrumbs">
      <ol style={style} className={classes}>
        {
          items.map((item, i) => (
            <li key={item.label} aria-current={i === items.length - 1 ? 'page' : undefined}>
              {i > 0
                ? (
                  <span className={styles.separator} aria-hidden="true">{separator}</span>
                )
                : undefined}
              {
                item.link
                  ? (
                    <Link to={item.link} className={[styles.label]} data-testid={`${dataTestId}-link-${i}`}>{item.label}</Link>
                  )
                  : (
                    <TextMedium className={[styles.label]} data-testid={`${dataTestId}-text`}>{item.label}</TextMedium>
                  )
              }
            </li>
          ))
        }
      </ol>
    </nav>
  );
};
