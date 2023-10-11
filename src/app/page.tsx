import Banner from './components/Banner';
import Companies from './components/Companies';
import Profile from './components/Profile';
import Skills from './components/Skills';

export default function Home () {
  return (
    <main>
      <Banner />
      <Profile />
      <Skills />
      <Companies />
    </main>
  );
}
