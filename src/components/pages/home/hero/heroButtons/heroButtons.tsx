'use client';
import PrimaryButton from '@/components/ui/primaryButton/primaryButton';
import { scrollTo } from '@/utils';
import styles from './heroButtons.module.css';

const heroButtons = () => {
  return (
    <div className={styles.heroButtons}>
      <PrimaryButton
        onClick={() => {
          scrollTo('contact');
        }}
      >
        Get in touch
      </PrimaryButton>
      <PrimaryButton
        outlined
        onClick={() => {
          scrollTo('projects');
        }}
      >
        See my work
      </PrimaryButton>
    </div>
  );
};

export default heroButtons;
