import Image from 'next/image';
import styles from './hero.module.css';
import Section from '@/components/common/section/section';
import HeroButtons from './heroButtons/heroButtons';

const Hero = () => {
  return (
    <Section primary id='hero'>
      <div className={styles.heroText}>
        <h1>Front-End Developer</h1>
        <h2>
          {`Hi, I'm `} <span className={styles.name}>Francesco Iacono</span> 👋
        </h2>
        <p>
          {`I'm a front-end developer based in London, United Kingdom.`}
          <br />
          {`I have a passion for web development and love to create for web and
          mobile devices.`}
        </p>
        <HeroButtons />
      </div>
      <div>
        <Image
          className={styles.heroImage}
          src='/images/hero/memoji.png'
          width={250}
          height={250}
          alt='hero'
        />
      </div>
    </Section>
  );
};

export default Hero;
