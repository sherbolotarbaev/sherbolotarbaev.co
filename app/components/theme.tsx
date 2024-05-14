'use client';

import { Theme as ThemeEnum, useThemeContext } from '../lib/providers/theme/context';

import Button from './button';

import { BiMoon, BiSun } from 'react-icons/bi';

export default function Theme() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Button width={40} onClick={toggleTheme}>
      {theme !== ThemeEnum.LIGHT ? <BiSun size={18} /> : <BiMoon size={18} />}
    </Button>
  );
}
