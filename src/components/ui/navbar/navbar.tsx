'use client';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.logo} ${styles.link}`}
        onClick={() => scrollTo('hero')}
      >
        FI
      </div>
      <ul className={styles.navbarLinks}>
        <li></li>
        <li className={styles.link} onClick={() => scrollTo('about')}>
          About
        </li>
        <li className={styles.link} onClick={() => scrollTo('about')}>
          Projects
        </li>
        <li className={styles.link} onClick={() => scrollTo('about')}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
