import styles from './projectTechnologies.module.css';

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className={styles.technologies}>
      {technologies.map((technology) => (
        <div key={technology} className={styles.technology}>
          {technology}
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
