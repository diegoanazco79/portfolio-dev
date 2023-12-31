'use client';

import React from 'react';
import { useAppSelector } from '@/redux/store';

import { getDictionary } from '../utils/functions';

const Education = () => {
  const lang = useAppSelector((state) => state.uiSettings.language);
  const srcLang = getDictionary(lang).educationSection;

  return (
    <section className='bg-main-blue dark:bg-dark-bg-green h-fit py-20'>
      <div className='max-w-screen-md mx-auto px-5 lg:px-0 xl:px-0'>
        <h5 className='text-center text-white dark:text-dark-text text-3xl font-bold'>
          {srcLang.title}
        </h5>
        <p className='text-center text-white dark:text-dark-text text-base mt-8'>
          {srcLang.firstDescription}
        </p>
        <p className='text-center text-white dark:text-dark-text text-base mt-8'>
          {srcLang.secondDescription}
        </p>
      </div>
    </section>
  );
};

export default Education;
