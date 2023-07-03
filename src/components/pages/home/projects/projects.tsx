import Section from '@/components/common/section/section';
import styles from './projects.module.css';
import Image from 'next/image';
import SingleProject from './singleProject/singleProject';
import Divider from '@/components/ui/divider/divider';

const Projects = () => {
  return (
    <Section id='projects' primary singleColumn>
      <div className={styles.wrapper}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          <SingleProject />
          <Divider />
          <SingleProject />
        </div>
      </div>
      <div></div>
    </Section>
  );
};

export default Projects;
