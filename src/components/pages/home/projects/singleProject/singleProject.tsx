import PrimaryButton from '@/components/ui/primaryButton/primaryButton';
import Image from 'next/image';
import styles from './singleProject.module.css';

const SingleProject = () => {
  return (
    <div className={styles.singleProjectContainer}>
      <div className={styles.singleProjectInfo}>
        <div className={styles.text}>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            labore, repellat laborum itaque eius mollitia cumque incidunt, enim
            est accusantium nostrum alias, aperiam in molestias quas dolorum
            dolore sint accusamus!
          </p>
        </div>
        <Image
          src='placeholder_200x200.svg'
          width={200}
          height={200}
          alt=''
          className={styles.image}
        />
      </div>

      <div className={styles.buttons}>
        <PrimaryButton>
          Code{' '}
          <Image
            src='icons/github.svg'
            height={20}
            width={20}
            alt='Link to code'
          />
        </PrimaryButton>
        <PrimaryButton outlined>
          Live Demo{' '}
          <Image src='icons/new-window.svg' height={20} width={20} alt='' />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SingleProject;
