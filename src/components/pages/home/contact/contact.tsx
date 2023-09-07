import Section from '@/components/common/section/section';
import Image from 'next/image';
import ContactList from './contactList/contactList';

const Contact = () => {
  return (
    <Section id='contact' right>
      <Image
        src='/images/contact/contact-memoji.png'
        alt='Placeholder'
        width={300}
        height={300}
      />

      <ContactList />
    </Section>
  );
};

export default Contact;
