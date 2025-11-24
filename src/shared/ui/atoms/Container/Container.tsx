import React from 'react';
import styles from './Container.module.css';
import { cx } from '../../../../utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string[];
  style?: React.CSSProperties;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className, style, fluid }) => {
  const classes = cx(
    styles.container,
    ...(className || []),
    fluid ? styles['container-fluid'] : undefined
  );

  return (
    <div style={style} className={classes}>{children}</div>
  );
};
