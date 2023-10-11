import Image from 'next/image';

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
          <Image
            className='mx-auto my-14'
            alt='Avatar'
            src='/svg/avatar.svg'
            width={200}
            height={200}
          />
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
      <section className='max-w-screen-xl my-28 mx-auto'>
        <h5 className='text-center text-3xl font-bold max-w-screen-md mx-auto px-5 xl:px-0'>
          Estoy orgulloso de haber colaborado con algunas empresas increíbles:
        </h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 px-5 xl:px-0 mt-16 justify-items-center'>
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
    </main>
  );
}
