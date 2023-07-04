import PrimaryButton from '@/components/ui/primaryButton/primaryButton';
import Image from 'next/image';
import styles from './projectButtons.module.css';

interface ProjectButtonsProps {
  githubUrl: string;
  liveUrl: string;
}

const ProjectButtons = ({ githubUrl, liveUrl }: ProjectButtonsProps) => {
  return (
    <div className={styles.buttons}>
      <PrimaryButton href={githubUrl}>
        Code{' '}
        <Image
          src='icons/github.svg'
          height={20}
          width={20}
          alt='Link to code'
        />
      </PrimaryButton>
      <PrimaryButton outlined href={liveUrl}>
        Demo <Image src='icons/new-window.svg' height={20} width={20} alt='' />
      </PrimaryButton>
    </div>
  );
};

export default ProjectButtons;
