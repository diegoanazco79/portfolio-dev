'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'next-themes';

import { Button } from '@nextui-org/button';

import { setLanguage } from '@/redux/slices/uiSettings-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';

import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const lang = useAppSelector((state) => state.uiSettings.language);
  const dispatch = useDispatch<AppDispatch>();

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

  /**
   * Change the language of the app
   */
  const onChangeLanguage = () => {
    dispatch(setLanguage(lang === 'es' ? 'en' : 'es'));
  };

  return (
    <header className='max-w-screen-xl mx-auto py-2 flex justify-end px-5 lg:px-0 xl:px-0'>
      <Button
        variant='light'
        isIconOnly
        onClick={onChangeTheme}
        className='hidden mr-2'
      >
        {theme === 'light' ? <BsFillMoonStarsFill /> : <BsSunFill />}
      </Button>
      <Button variant='light' className='font-semibold' isIconOnly onClick={onChangeLanguage}>
        {lang === 'es' ? 'ES' : 'EN'}
      </Button>
    </header>
  );
};

export default Header;
