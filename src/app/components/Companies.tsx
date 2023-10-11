'use client';

import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/redux/store';

import { getDictionary } from '../utils/functions';

const Companies = () => {
  const lang = useAppSelector((state) => state.uiSettings.language);
  const srcLang = getDictionary(lang).companiesSection;

  return (
    <section className='max-w-screen-xl my-28 mx-auto'>
      <h5 className='text-center text-3xl font-bold max-w-screen-md mx-auto px-5 xl:px-0'>
        {srcLang.title}
      </h5>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 px-5 xl:px-0 mt-16 justify-items-center'>
        <a
          href='https://www.vozy.co/'
          target='_blank'
          className='flex items-center'
        >
          <Image
            className='mx-auto'
            src='/img/vozy-logo.png'
            alt='vozy'
            width={200}
            height={200}
          />
        </a>
        <a
          href='https://inka-labs.com/'
          target='_blank'
          className='flex items-center'
        >
          <Image
            className='mx-auto'
            src='/img/inka-labs.png'
            alt='inka-labs'
            width={200}
            height={200}
          />
        </a>
        <a
          href='https://gomademascar.pe/'
          target='_blank'
          className='flex items-center'
        >
          <Image
            className='mx-auto'
            src='/img/goma-logo.png'
            alt='goma-de-mascar'
            width={200}
            height={200}
          />
        </a>
      </div>
    </section>
  );
};

export default Companies;
