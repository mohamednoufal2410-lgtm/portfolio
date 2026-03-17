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
  const [projectIndex, setProjectIndex] = useState(0);

  const active = experience[activeIndex];
  const linkedProjects = projects.filter((p) => active.projectIds.includes(p.id));
  const currentProject = linkedProjects[projectIndex] || null;

  const handleCompanyChange = (i) => {
    setActiveIndex(i);
    setProjectIndex(0);
  };

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
              onClick={() => handleCompanyChange(i)}
            >
              <span className={styles.nodeDot} />
              <span className={styles.nodeCompany}>
                {exp.company} <span className={styles.nodeYear}>{exp.period.match(/\d{4}/g)?.join('–')}</span>
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Container Card */}
      <div className={styles.outerCard}>
        <div className={styles.outerHeader}>
          <div>
            <h3 className={styles.outerRole}>{active.role}</h3>
            <p className={styles.outerCompany}>{active.company}</p>
          </div>
          <div className={styles.outerMeta}>
            <span className={styles.outerPeriod}>{active.period}</span>
            <span className={styles.outerLocation}>{active.location}</span>
          </div>
        </div>

        <div className={styles.projectArea}>
          {/* Side dots nav */}
          {linkedProjects.length > 1 && (
            <div className={styles.sideDots}>
              {linkedProjects.map((p, i) => (
                <button
                  key={p.id}
                  className={`${styles.sideDot} ${i === projectIndex ? styles.activeDot : ''}`}
                  onClick={() => setProjectIndex(i)}
                >
                  <span className={styles.sideDotTooltip}>{p.title}</span>
                </button>
              ))}
            </div>
          )}

          {/* Project card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-${projectIndex}`}
              className={styles.singleProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentProject ? (
                <ProjectCard project={currentProject} />
              ) : (
                <div className={styles.noProjects}>
                  <p>Projects under NDA — details available on request.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
