import Link from 'next/link';
import Image from 'next/image';
import styles from './contactList.module.css';

const ContactList = () => {
  const iconsSize = 50;
  const message =
    'Please feel free to contact me if you have any questions or if you want to work with me.';

  return (
    <div className={styles.wrapper}>
      <h1>Contact Me</h1>

      <p>{message}</p>

      <ul className={styles.list}>
        <li>
          <a
            href='https://linkedin.com/in/cesco-iacono'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icons/linkedin.svg'
              alt='LindkedIn'
              width={iconsSize}
              height={iconsSize}
            />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/francescoiacono'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/icons/github.svg'
              alt='GitHub'
              width={iconsSize}
              height={iconsSize}
            />
          </a>
        </li>
        <li>
          <Link href='mailto:contact@francescoiacono.co.uk'>
            <Image
              src='/icons/email.svg'
              alt='Email'
              width={iconsSize}
              height={iconsSize}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
