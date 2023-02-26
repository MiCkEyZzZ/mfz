'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { IThemeProps, ThemeProviderProps } from 'interfaces';

export const ThemeContext = createContext<IThemeProps>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const key = localStorage.getItem('theme');

    setIsDarkMode(!key || key === 'true');
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
