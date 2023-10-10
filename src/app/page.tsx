import Image from 'next/image';

import AvatarLight from '@/assets/svg/AvatarLight';

export default function Home () {
  return (
    <main>
      <section className='max-w-screen-xl mx-auto mt-24'>
        <div className='px-5 lg:px-0 xl:px-0'>
          <h1 className='text-5xl font-bold text-center'>
            Frontend Developer & Diseñador
          </h1>
          <h5 className='text-center text-xl mt-4'>
            Diseño y desarrollo páginas web amigables, y amo lo que hago
          </h5>
        </div>
        <div className='flex justify-center'>
          <AvatarLight className='w-[200px] h-[200px] my-14' />
        </div>
      </section>
      <section className='bg-main-blue h-fit py-20'>
        <div className='max-w-screen-md mx-auto px-5 lg:px-0 xl:px-0'>
          <h5 className='text-center text-white text-3xl font-bold'>
            Hola, soy Diego. Encantado de conocerte
          </h5>
          <p className='text-center text-white text-base mt-8'>
            Hace 3 años, inicié mi trayecto como desarrollador frontend. Durante
            este tiempo, he tenido la oportunidad de trabajar de manera remota
            tanto para fábricas de software como para startups.
          </p>
          <p className='text-center text-white text-base mt-8'>
            Soy paciente y confiado, naturalmente curioso, lo que me impulsa a
            aprender y mejorar mis habilidades como desarrollador,
            Recientemente, he comenzado a explorar el mundo del backend
            utilizando tecnologías como NodeJs y Golang.
          </p>
        </div>
      </section>
      <section className='max-w-screen-xl my-14 mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-5 xl:px-0'>
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
              Me encanta cuando el contenido es fácil de seguir, y un diseño es
              intuitivo.
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
            <h4 className='text-2xl font-bold text-center mt-6'>
              Frontend
            </h4>
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
          <div className='border rounded-lg border-gray-200 p-10 md:col-span-1 lg:col-span-1'>
            <Image
              className='mx-auto'
              alt='Design'
              src='/svg/development.svg'
              width={75}
              height={75}
            />
            <h4 className='text-2xl font-bold text-center mt-6'>
              Desarrollo
            </h4>
            <p className='text-center text-base mt-4'>
              Las claves detrás de mi proceso de desarrollo y gestión de proyectos de software.
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
    </main>
  );
}
