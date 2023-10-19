'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useAppSelector } from '@/redux/store';

import { getDictionary } from '../utils/functions';

const Skills = () => {
  const lang = useAppSelector((state) => state.uiSettings.language);
  const srcLang = getDictionary(lang).skillsSection;

  const { theme } = useTheme();

  return (
    <section className='max-w-screen-xl my-28 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-12 px-5 xl:px-0 justify-items-center'>
        <div className='border rounded-lg border-gray-200 dark:border-[#4b4b4b]  p-10 shadow'>
          <Image
            className='mx-auto'
            alt='design-section'
            src={theme === 'light' ? '/img/light-design.png' : '/img/dark-design.png'}
            width={75}
            height={75}
          />
          <h4 className='text-2xl font-bold dark:text-dark-text text-center mt-6'>
            {srcLang.desing.title}
          </h4>
          <p className='text-center text-base dark:text-dark-text mt-4'>
            {srcLang.desing.description}
          </p>

          <h3 className='text-lg font-semibold dark:text-dark-text text-center mt-8'>
            {srcLang.desing.subtitle}
          </h3>
          <ul className='text-center mt-1 dark:text-dark-text'>
            {srcLang.desing.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='border rounded-lg border-gray-200 dark:border-[#4b4b4b] p-10 shadow'>
          <Image
            className='mx-auto'
            alt='front-code'
            src={theme === 'light' ? '/img/light-code.png' : '/img/dark-code.png'}
            width={75}
            height={75}
          />
          <h4 className='text-2xl font-bold dark:text-dark-text text-center mt-6'>
            {srcLang.frontEnd.title}
          </h4>
          <p className='text-center text-base dark:text-dark-text mt-4'>
            {srcLang.frontEnd.description}
          </p>

          <h3 className='text-lg font-semibold dark:text-dark-text text-center mt-8'>
            {srcLang.frontEnd.subtitle}
          </h3>
          <ul className='text-center mt-1 dark:text-dark-text'>
            {srcLang.frontEnd.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='border rounded-lg border-gray-200 dark:border-[#4b4b4b] p-10 col-auto shadow'>
          <Image
            className='mx-auto'
            alt='development'
            src={theme === 'light' ? '/img/light-settings.png' : '/img/dark-settings.png'}
            width={75}
            height={75}
          />
          <h4 className='text-2xl font-bold dark:text-dark-text text-center mt-6'>
            {srcLang.development.title}
          </h4>
          <p className='text-center text-base dark:text-dark-text mt-4'>
            {srcLang.development.description}
          </p>

          <h3 className='text-lg font-semibold dark:text-dark-text text-center mt-8'>
            {srcLang.development.subtitle}
          </h3>
          <ul className='text-center mt-1 dark:text-dark-text'>
            {srcLang.development.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
