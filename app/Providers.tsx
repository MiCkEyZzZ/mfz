'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'lib/theme';

export function Providers({ children }) {
  useEffect(() => {
    const key = localStorage.getItem('theme');
    if (!key) {
      document.documentElement.className = 'light';
    } else {
      document.documentElement.className = key === 'true' ? 'dark' : '';
    }
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
