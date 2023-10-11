import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <section className='max-w-screen-xl my-28 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 px-5 xl:px-0 justify-items-center'>
        <div className='border rounded-lg border-gray-200 p-10'>
          <Image
            className='mx-auto'
            alt='Design'
            src='/svg/desing-section.svg'
            width={75}
            height={75}
          />
          <h4 className='text-2xl font-bold text-center mt-6'>Diseño</h4>
          <p className='text-center text-base mt-4'>
            Me encanta cuando el contenido es fácil de seguir, y cuando un
            diseño es intuitivo.
          </p>

          <h3 className='text-lg font-semibold text-center mt-8'>
            Herramientas:
          </h3>
          <ul className='text-center mt-1'>
            <li>Figma</li>
            <li>Adobe Premier</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div className='border rounded-lg border-gray-200 p-10'>
          <Image
            className='mx-auto'
            alt='Design'
            src='/svg/front-code.svg'
            width={75}
            height={75}
          />
          <h4 className='text-2xl font-bold text-center mt-6'>Front-end</h4>
          <p className='text-center text-base mt-4'>
            Me divierte crear código desde cero y me encanta ver cómo las
            ideas cobran vida en el navegador.
          </p>

          <h3 className='text-lg font-semibold text-center mt-8'>
            Tecnologías:
          </h3>
          <ul className='text-center mt-1'>
            <li>NextJS</li>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>JavaScript</li>
            <li>TailwindCss</li>
            <li>CSS</li>
            <li>MaterialUI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className='border rounded-lg border-gray-200 p-10 col-auto'>
          <Image
            className='mx-auto'
            alt='Design'
            src='/svg/development.svg'
            width={75}
            height={75}
          />
          <h4 className='text-2xl font-bold text-center mt-6'>Desarrollo</h4>
          <p className='text-center text-base mt-4'>
            Las claves detrás de mi proceso de desarrollo y gestión de
            proyectos de software.
          </p>

          <h3 className='text-lg font-semibold text-center mt-8'>
            Herramientas:
          </h3>
          <ul className='text-center mt-1'>
            <li>GitLab</li>
            <li>GitHub</li>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>VsCode</li>
            <li>Terminal</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
