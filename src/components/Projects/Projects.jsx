import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/content';
import ProjectCard from './ProjectCard';
import styles from '../../styles/components/Projects.module.css';

const INITIAL_COUNT = 4;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const hasMore = projects.length > INITIAL_COUNT;
  const firstBatch = projects.slice(0, INITIAL_COUNT);
  const extraBatch = projects.slice(INITIAL_COUNT);

  return (
    <section id="projects" className={styles.projects}>
      <p className="section-label">Selected Work</p>
      <h2 className="section-title">Projects that made an impact</h2>

      <motion.div
        ref={ref}
        className={styles.grid}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
      >
        {firstBatch.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}

        {showAll && extraBatch.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <div className={styles.moreWrapper}>
          <button
            className={styles.moreButton}
            onClick={() => setShowAll((prev) => !prev)}
          >
            <span>{showAll ? 'Show Less' : 'More Projects'}</span>
            <span className={`${styles.moreArrow} ${showAll ? styles.flipped : ''}`}>
              &darr;
            </span>
          </button>
          {!showAll && (
            <p className={styles.moreHint}>
              +{projects.length - INITIAL_COUNT} more projects
            </p>
          )}
        </div>
      )}
    </section>
  );
}
