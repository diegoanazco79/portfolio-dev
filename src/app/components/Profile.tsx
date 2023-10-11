import React from 'react';

const Profile = () => {
  return (
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
  );
};

export default Profile;
