import PrimaryButton from '@/components/ui/primaryButton/primaryButton';
import Image from 'next/image';
import styles from './singleProject.module.css';
import { Project } from '@/data';
import ProjectButtons from '../projectButtons/projectButtons';
import ProjectTechnologies from '../projectTechnologies/projectTechnologies';
import Divider from '@/components/ui/divider/divider';

interface SingleProjectProps {
  project: Project;
}

const SingleProject = ({ project }: SingleProjectProps) => {
  return (
    <div className={styles.singleProjectContainer}>
      <div className={styles.singleProjectInfo}>
        <div className={styles.text}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectButtons
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
