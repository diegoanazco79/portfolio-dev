'use client';

import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/redux/store';

import { getDictionary } from '../utils/functions';

const Banner = () => {
  const lang = useAppSelector((state) => state.uiSettings.language);
  const srcLang = getDictionary(lang).bannerSection;

  return (
    <section className='max-w-screen-xl mx-auto mt-14'>
      <div className='px-5 lg:px-0 xl:px-0'>
        <h1 className='text-5xl font-bold text-center'>{srcLang.title}</h1>
        <h5 className='text-center text-xl mt-4'> {srcLang.caption} </h5>
      </div>
      <div className='flex justify-center'>
        <Image
          className='mx-auto my-20'
          alt='Avatar'
          src='/svg/avatar.svg'
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default Banner;
