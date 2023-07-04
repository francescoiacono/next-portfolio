import Section from '@/components/common/section/section';
import styles from './projects.module.css';
import SingleProject from './singleProject/singleProject';
import { projectsData } from '@/data';

const Projects = () => {
  return (
    <Section id='projects' primary singleColumn>
      <div className={styles.wrapper}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          {projectsData.map((project) => (
            <SingleProject key={project.name} project={project} />
          ))}
        </div>
      </div>
      <div></div>
    </Section>
  );
};

export default Projects;
