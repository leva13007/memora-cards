import React from 'react';
import styles from './Body.module.css';

interface BodyProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  theme?: 'light' | 'dark'
}

export const Body: React.FC<BodyProps> = ({ children, className, style, theme }) => {
  const bodyStyle = `${styles.body} ${className || ''}`;
  const themeStyle = theme === 'dark' ? 'dark' : 'light';
  return (
    <div style={style} className={bodyStyle} data-theme={themeStyle}>
      <div className={styles.layout}>
        {children}
      </div>
    </div>
  );
};
