import Section from '@/components/common/section/section';
import styles from './contact.module.css';
import ContactForm from './contactForm/contactForm';

const Contact = () => {
  return (
    <Section id='contact' singleColumn>
      <div className={styles.wrapper}>
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
