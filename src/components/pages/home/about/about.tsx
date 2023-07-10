import Section from '@/components/common/section/section';
import styles from './about.module.css';
import Image from 'next/image';
import Scene from '@/components/three/threeScene';
const About = () => {
  return (
    <Section id='about'>
      <div className={styles.aboutText}>
        <h1>About</h1>
        <p>
          {`Ciao! I'm Francesco, a passionate web and game developer originally
          from Ischia, Italy. In pursuit of my tech dreams, I moved to the
          vibrant city of London in 2015, subsequently graduating from
          Goldsmiths, University of London with a degree in Games Programming in
          2019.`}
          <br />
          <br />
          {`I love harnessing the power of technology to solve real-world
          problems, with a particular fondness for developing practical web
          applications for personal and communal use. Always eager to explore
          new tools and techniques, I continually strive to push the boundaries
          of innovation. When I'm not knee-deep in coding or tech trends, you
          can usually find me absorbed in a gripping video game, exploring new
          worlds and adventures. I also enjoy indulging in 3D modeling during my
          free time. It's a creative outlet that allows me to bring my
          imagination to life.`}
        </p>
      </div>
      <Scene />
    </Section>
  );
};

export default About;
