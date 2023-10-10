'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@nextui-org/button';

import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /**
   * Change the theme of the app
   */
  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className='max-w-screen-xl mx-auto py-2 flex justify-end'>
      <Button variant='light' isIconOnly onClick={onChangeTheme}>
        {theme === 'light' ? <BsFillMoonStarsFill /> : <BsSunFill />}
      </Button>
    </header>
  );
};

export default Header;
