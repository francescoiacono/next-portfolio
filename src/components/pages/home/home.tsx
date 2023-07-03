import Navbar from '@/components/ui/navbar/navbar';
import Hero from './hero/hero';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
