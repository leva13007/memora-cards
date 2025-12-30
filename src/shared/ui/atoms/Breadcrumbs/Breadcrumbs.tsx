import React from 'react';
import { TextMedium } from '../Text/Text.tsx';
import { TextLink } from '../TextLink/TextLink.tsx';

import styles from './Breadcrumbs.module.css';
import { clx } from '../../../../utils';

export interface BreadcrumbItem {
  label: string
  link?: string
}

export interface BreadcrumbsProps {
  className?: string[]
  style?: React.CSSProperties
  ['data-testid']?: string
  items: BreadcrumbItem[]
  separator?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className,
  style,
  items,
  separator = '/',
  'data-testid': dataTestId = 'breadcrumbs'
}) => {
  const classes = clx(
    styles,
    'breadcrumbs',
    ...(className || [])
  );

  return (
    <nav data-testid={dataTestId} aria-label="breadcrumbs">
      <ol style={style} className={classes}>
        {
          items.map((item, i) => (
            <li key={item.label}>
              {i > 0
                ? (
                  <TextMedium className={[styles.separator]} aria-hidden="true" data-testid={`${dataTestId}-separator-${i}`}>
                    {separator}
                  </TextMedium>
                )
                : undefined}
              {
                item.link && i !== items.length - 1
                  ? (
                    <TextLink
                      to={item.link}
                      className={[styles.label]}
                      data-testid={`${dataTestId}-link-${i}`}
                      content={item.label}
                    />
                  )
                  : (
                    <TextMedium
                      as="span"
                      tabIndex={-1}
                      aria-current={i === items.length - 1 ? 'page' : undefined}
                      className={[styles.label]}
                      data-testid={`${dataTestId}-text`}
                    >
                      {item.label}
                    </TextMedium>
                  )
              }
            </li>
          ))
        }
      </ol>
    </nav>
  );
};
