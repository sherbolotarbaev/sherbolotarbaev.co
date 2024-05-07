'use client';

import { useContext, createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const THEME_LOCAL_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = Theme.DARK;
export const THEME_VALUES: string[] = Object.values(Theme);

export const DEFAULT_VALUE: ThemeContextData = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
};

export type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextData>(DEFAULT_VALUE);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }

  return context;
};
