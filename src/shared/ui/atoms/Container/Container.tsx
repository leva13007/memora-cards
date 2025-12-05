import React from 'react';
import styles from './Container.module.css';
import { clx } from '../../../../utils';

interface ContainerProps {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  fluid?: boolean
}

export const Container: React.FC<ContainerProps> = ({ children, className, style, fluid }) => {
  const classes = clx(
    styles,
    'container',
    ...(className || []),
    fluid ? 'container-fluid' : undefined
  );

  return (
    <div style={style} className={classes}>{children}</div>
  );
};
