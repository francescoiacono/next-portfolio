import Image from 'next/image';
import styles from './hero.module.css';
import PrimaryButton from '@/components/ui/primaryButton/primaryButton';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Front End Developer</h1>
        <h2>
          Hi, I{`'`}m <span className={styles.name}>Francesco Iacono</span> 👋
        </h2>
        <p>
          I{`'`}m a front end developer based in London, United Kingdom. <br />I
          have a passion for web development and love to create for web and
          mobile devices.
        </p>
        <div className={styles.heroButtons}>
          <PrimaryButton>Get in touch</PrimaryButton>
          <PrimaryButton outlined>See my work</PrimaryButton>
        </div>
      </div>
      <div>
        <Image
          className={styles.heroImage}
          src='/placeholder_500.svg'
          width={250}
          height={250}
          alt='hero'
        />
      </div>
    </div>
  );
};

export default Hero;
