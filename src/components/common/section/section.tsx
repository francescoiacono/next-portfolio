import styles from './section.module.css';

interface SectionProps {
  children: React.ReactNode;
  primary?: boolean;
  right?: boolean;
  id?: string;
  singleColumn?: boolean;
  className?: string;
}

const Section = ({
  children,
  primary,
  right,
  id,
  singleColumn,
  className,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={
        primary
          ? `${styles.sectionContainer} ${styles.primary} ${className}}`
          : `${styles.sectionContainer} ${styles.secondary} ${className}`
      }
    >
      <div
        className={
          singleColumn
            ? `${styles.wrapper} ${styles.singleColumn}`
            : right
            ? `${styles.wrapper} ${styles.wrapperRight}`
            : `${styles.wrapper} ${styles.wrapperLeft}`
        }
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
