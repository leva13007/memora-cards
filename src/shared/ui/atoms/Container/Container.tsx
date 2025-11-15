import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode
  className?: string[]
  style?: React.CSSProperties
  fluid?: boolean
}

export const Container: React.FC<ContainerProps> = ({ children, className, style, fluid }) => {
  const cls = [styles.container];
  if (className) cls.push(...className);
  if (fluid) cls.push(styles['container-fluid']);
  const classes = cls.join(' ');

  return (
    <div style={style} className={classes}>{children}</div>
  );
};
