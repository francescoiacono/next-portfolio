import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>FI</h1>
      <ul className={styles.navbarLinks}>
        <li>
          <Link className={styles.link} href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='about'>
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='projects'>
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
