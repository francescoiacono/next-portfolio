'use client';
import styles from './navbar.module.css';
import { scrollTo } from '@/utils';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
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
          <li className={styles.link} onClick={() => scrollTo('projects')}>
            Projects
          </li>
          <li className={styles.link} onClick={() => scrollTo('contact')}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
