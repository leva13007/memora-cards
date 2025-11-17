import React, { useEffect } from 'react';

import '../styles/fonts.css';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/global.css';

export const CssProvider = ({ children, theme = 'light' }: { children: React.ReactNode, theme?: 'light' | 'dark' }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};
