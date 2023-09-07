import styles from './singleProject.module.css';
import { Project } from '@/data';
import ProjectButtons from '../projectButtons/projectButtons';
import ProjectTechnologies from '../projectTechnologies/projectTechnologies';

interface SingleProjectProps {
  project: Project;
}

const SingleProject = ({ project }: SingleProjectProps) => {
  return (
    <div className={styles.singleProjectContainer}>
      <div className={styles.singleProjectInfo}>
        <div className={styles.text}>
          <h2>{project.name}</h2>
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
