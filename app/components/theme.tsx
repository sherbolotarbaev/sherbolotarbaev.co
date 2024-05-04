'use client';

import { useEffect, useRef, useState } from 'react';

import {
  THEME_VALUES,
  Theme as ThemeEnum,
  useThemeContext,
} from '../lib/providers/theme/context';

import { BiChevronDown, BiDesktop, BiMoon, BiSun } from 'react-icons/bi';
import scss from './scss/theme.module.scss';

export default function Theme() {
  const { toggleTheme, theme } = useThemeContext();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const themeMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenThemeMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={isOpen ? `${scss.wrapper} ${scss.active}` : scss.wrapper}
        onClick={(e) => e.stopPropagation()}
        ref={themeMenuRef}
      >
        <div
          className={isOpen ? `${scss.theme} ${scss.active}` : scss.theme}
          onClick={handleOpenThemeMenu}
        >
          Theme
          <BiChevronDown size={20} className={scss.icon} />
        </div>

        <div className={scss.menu}>
          <div className={scss.list}>
            {THEME_VALUES.map((value, index) => (
              <span
                key={index}
                className={value === theme ? `${scss.item} ${scss.active}` : scss.item}
                onClick={() => {
                  toggleTheme(value as ThemeEnum);
                  handleOpenThemeMenu();
                }}
              >
                {value === ThemeEnum.LIGHT ? <BiMoon size={18} /> : <BiSun size={18} />}
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
