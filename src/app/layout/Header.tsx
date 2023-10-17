'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'next-themes';

import { Button } from '@nextui-org/button';

import { setLanguage } from '@/redux/slices/uiSettings-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';

import { BsFillMoonStarsFill, BsSunFill, BsLinkedin, BsGithub } from 'react-icons/bs';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { theme, setTheme } = useTheme();

  const lang = useAppSelector((state) => state.uiSettings.language);
  const dispatch = useDispatch<AppDispatch>();

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) setScrolling(true);
      else setScrolling(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
    <nav className={`fixed top-0 left-0 z-20 w-full bg-white ${scrolling ? 'shadow-sm' : ''}`}>
      <div className='max-w-screen-xl mx-auto py-2 flex justify-end px-5 lg:px-0 xl:px-0'>
        <Button
          variant='light'
          isIconOnly
          onClick={onChangeTheme}
          className='hidden mr-2'
        >
          {theme === 'light' ? <BsFillMoonStarsFill /> : <BsSunFill />}
        </Button>
        <a href='https://github.com/diegoanazco79' target='_blank'>
          <Button variant='light' className='mr-1' isIconOnly>
            <BsGithub className='h-[18px] w-[18px]' />
          </Button>
        </a>
        <a href='https://www.linkedin.com/in/djanazcob/' target='_blank'>
          <Button variant='light' className='mr-1' isIconOnly>
            <BsLinkedin className='h-[18px] w-[18px]' />
          </Button>
        </a>
        <Button variant='light' className='font-semibold text-sm' isIconOnly onClick={onChangeLanguage}>
          {lang === 'es' ? 'ES' : 'EN'}
        </Button>
      </div>
    </nav>
  );
};

export default Header;
