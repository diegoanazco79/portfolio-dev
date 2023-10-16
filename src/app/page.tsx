import Banner from './components/Banner';
import Companies from './components/Companies';
import IntroProjects from './components/IntroProjects';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home () {
  return (
    <main>
      <Banner />
      <Profile />
      <Skills />
      <Companies />
      <IntroProjects />
      <Projects />
    </main>
  );
}
