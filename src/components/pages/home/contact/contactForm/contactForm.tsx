'use client';
import React, { useState, FormEvent } from 'react';
import styles from './contactForm.module.css';
import PrimaryButton from '@/components/ui/primaryButton/primaryButton';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., make an HTTP request
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            id='name'
            name='name'
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='email'>
          Email:
          <input
            type='email'
            id='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='message'>
          Message:
          <textarea
            id='message'
            name='message'
            value={values.message}
            onChange={handleChange}
            required
          />
        </label>

        <PrimaryButton outlined>Send Message</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
