'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useAppSelector } from '@/redux/store';

import { Button } from '@nextui-org/react';

import { getDictionary } from '../utils/functions';

import { AiFillGithub } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';

interface ProjectProps {
  className?: string;
  title: string;
  description: string;
  note?: string;
  image: string;
  url: string;
  githubUrl: string;
}

const Project = ({
  className = '', title, description, note, image, url, githubUrl
}: ProjectProps) => {
  return (
    <div className={`${className} border rounded-lg border-gray-200 dark:border-[#4b4b4b] p-10 shadow`}>
      <div className='flex items-center justify-center'>
        <Image
          src={image}
          alt={`${title}-logo`}
          width={30}
          height={30}
        />
        <h4 className='font-semibold text-2xl text-center dark:text-dark-text ml-2'>{title}</h4>
      </div>
      <p className='text-base text-center dark:text-dark-text mt-6'>
        {description} {' '}
        <small className='text-center text-sm italic'>{note}</small>
      </p>
      <div className='flex items-center justify-center mt-6'>
        <a className='mr-2' href={url} target='_blank'>
          <Button variant='ghost' className='font-semibold' isIconOnly>
            <TbExternalLink className='h-[20px] w-[20px]' />
          </Button>
        </a>
        <a href={githubUrl} target='_blank'>
          <Button variant='ghost' className='font-semibold' isIconOnly>
            <AiFillGithub className='h-[20px] w-[20px]' />
          </Button>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const lang = useAppSelector((state) => state.uiSettings.language);
  const srcLang = getDictionary(lang).projectsSection;

  const { theme } = useTheme();
  const roomProject = srcLang.roomProject;

  return (
    <section className='max-w-screen-xl mt-20 mb-28 mx-auto'>
      <div className='max-w-screen-md mx-auto px-5 lg:px-0 xl:px-0'>
        <h5 className='text-center text-3xl dark:text-dark-text font-bold'>
          {srcLang.title}
        </h5>
        <p className='text-center text-base dark:text-dark-text mt-8'>
          {srcLang.description}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 xl:px-0 justify-items-center mt-10'>
        <Project
          title={roomProject.title}
          description={roomProject.description}
          image={theme === 'light' ? '/img/room-architecture.png' : '/img/dark-room.png'}
          url={roomProject.url}
          githubUrl={roomProject.githubUrl}
        />
        {srcLang.projects.map((project, idx) => (
          <Project
            key={idx}
            title={project.title}
            description={project.description}
            note={project.note}
            image={project.image}
            url={project.url}
            githubUrl={project.githubUrl}
            className={project.className}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
