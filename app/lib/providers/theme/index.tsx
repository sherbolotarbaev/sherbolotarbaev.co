'use client';

import { useEffect, useState } from 'react';

import {
  ThemeContext,
  Theme,
  THEME_VALUES,
  DEFAULT_THEME,
  THEME_LOCAL_STORAGE_KEY,
} from './context';

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const isValidTheme = (value: string): value is Theme => THEME_VALUES.includes(value);

const getThemeFromLocalStorage = (): Theme => {
  if (typeof window === 'undefined') return DEFAULT_THEME;

  const themeValue = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  if (themeValue && isValidTheme(themeValue)) return themeValue;

  return DEFAULT_THEME;
};

export default function ThemeContextProvider({
  children,
}: Readonly<ThemeContextProviderProps>) {
  const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage);

  const toggleTheme = () =>
    setTheme((oldTheme) => (oldTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);

    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
