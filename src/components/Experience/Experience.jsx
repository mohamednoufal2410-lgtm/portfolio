import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experience, projects } from '../../data/content';
import ProjectCard from '../Projects/ProjectCard';
import styles from '../../styles/components/Experience.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const active = experience[activeIndex];
  const linkedProjects = projects.filter((p) => active.projectIds.includes(p.id));

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <p className="section-label">Journey</p>
      <h2 className="section-title">What I've worked</h2>

      {/* Horizontal Timeline */}
      <motion.div
        className={styles.timeline}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <div className={styles.timelineTrack}>
          <div className={styles.timelineLine} />
          {experience.map((exp, i) => (
            <button
              key={exp.company}
              className={`${styles.timelineNode} ${i === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className={styles.nodeDot} />
              <span className={styles.nodeCompany}>{exp.company}</span>
              <span className={styles.nodePeriod}>{exp.period}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Active Company Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className={styles.activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.activeHeader}>
            <div>
              <h3 className={styles.activeRole}>{active.role}</h3>
              <p className={styles.activeCompany}>{active.company}</p>
            </div>
            <div className={styles.activeMeta}>
              <span className={styles.activePeriod}>{active.period}</span>
              <span className={styles.activeLocation}>{active.location}</span>
            </div>
          </div>

          {/* Projects under this company */}
          {linkedProjects.length > 0 && (
            <div className={styles.projectsSection}>
              <p className={styles.projectsLabel}>Projects</p>
              <div className={styles.projectsGrid}>
                {linkedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {linkedProjects.length === 0 && (
            <div className={styles.noProjects}>
              <p>Projects under NDA — details available on request.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
