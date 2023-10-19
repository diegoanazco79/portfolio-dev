const lang_en = {
  bannerSection: {
    title: 'Frontend Developer & Designer',
    caption: 'Design and development of friendly web pages, and I love what I do'
  },
  profileSection: {
    title: 'Hi, I\'m Diego. Nice to meet you',
    firstDescription: '3 years ago, I started my journey as a frontend developer. During this time, I have had the opportunity to work remotely for both software factories and startups.',
    secondDescription: 'I am patient and confident, naturally curious, which drives me to learn and improve my skills as a developer. Recently, I have begun to explore the world of backend using technologies such as NodeJs and Golang.'
  },
  skillsSection: {
    desing: {
      title: 'Design',
      description: 'I love it when the content is easy to follow, and when a design is intuitive',
      subtitle: 'Tools:',
      items: [
        'Figma',
        'Adobe XD',
        'Adobe Photoshop',
        'Adobe Illustrator'
      ]
    },
    frontEnd: {
      title: 'Front-end',
      description: 'I have fun creating code from scratch and I love seeing how ideas come to life in the browser.',
      subtitle: 'Technologies:',
      items: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'JavaScript',
        'TailwindCss',
        'CSS',
        'MaterialUI',
        'Bootstrap'
      ]
    },
    development: {
      title: 'Development',
      description: 'The keys behind my development process and management of software projects.',
      subtitle: 'Tools:',
      items: [
        'GitLab',
        'GitHub',
        'Scrum',
        'Kanban',
        'VsCode',
        'Postman',
        'Terminal'
      ]
    }
  },
  companiesSection: {
    title: 'I am proud to have collaborated with some amazing companies:'
  },
  educationSection: {
    title: 'My path to web development',
    firstDescription: 'I was guided by Lasallian values. I started my education in elementary and high school, attending I.E. San Juan Bautista de La Salle in Arequipa, Peru. Later, I continued my training by studying Software Engineering at Universidad La Salle, also in Arequipa, Peru, and obtained my degree in Software Engineering in 2022.',
    secondDescription: 'Thanks to the values that have been instilled in me, I have been able to develop always thinking first of people, and how I can help them through my work.'
  },
  projectsSection: {
    title: 'My personal projects',
    description: 'I encourage you to review some of my personal projects that show my journey in web development. Each of them demonstrates my commitment to technical quality, creativity in design and the ability to solve challenges.',
    roomProject: {
      title: 'ROOM',
      description: 'Landing page for an architecture and construction company, with a modern and minimalist design.',
      url: 'https://room-architecture.vercel.app/',
      githubUrl: 'https://github.com/diegoanazco79/room-architecture'
    },
    projects: [
      {
        title: 'Random Quote',
        description: 'Get inspired by the words of your favorite artists and writers, generate quotes that brighten your day.',
        image: '/img/quote-logo.png',
        url: 'https://quote-random-one.vercel.app/',
        githubUrl: 'https://github.com/diegoanazco79/quote-random'
      },
      {
        title: 'PassGenerator',
        description: 'Generate strong passwords instantly. Customize it as you like, and evaluate its strength.',
        image: '/img/pass-generator.png',
        url: 'https://password-generator-dun-one.vercel.app/',
        githubUrl: 'https://github.com/diegoanazco79/password-generator'
      },
      {
        title: 'MathDragon',
        description: 'My first project for my degree. Learn mathematics in a fun way with Kalh the dragon.',
        note: 'Only desktop version.',
        image: '/img/math-game.png',
        url: 'https://diegoanazco79.github.io/MathDragon/',
        githubUrl: 'https://github.com/diegoanazco79/MathDragon',
        className: 'lg:col-start-2'
      }
    ]
  }
};

export default lang_en;
