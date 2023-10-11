import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-14'>
      <div className='px-5 lg:px-0 xl:px-0'>
        <h1 className='text-5xl font-bold text-center'>
          Desarrollador Frontend & Diseñador
        </h1>
        <h5 className='text-center text-xl mt-4'>
          Diseño y desarrollo páginas web amigables, y amo lo que hago
        </h5>
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
