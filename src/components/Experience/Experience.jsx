import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { experience, projects } from '../../data/content';
import ProjectCard from '../Projects/ProjectCard';
import styles from '../../styles/components/Experience.module.css';

const ITEMS_PER_PAGE = 2;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(0);

  const active = experience[activeIndex];
  const linkedProjects = projects.filter((p) => active.projectIds.includes(p.id));
  const totalPages = Math.ceil(linkedProjects.length / ITEMS_PER_PAGE);
  const visibleProjects = linkedProjects.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handleCompanyChange = (i) => {
    setActiveIndex(i);
    setPage(0);
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

        {linkedProjects.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndex}-${page}`}
                className={styles.projectGrid}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <div className={styles.pageNav}>
                <button
                  className={styles.pageBtn}
                  onClick={() => setPage((p) => p - 1)}
                  disabled={page === 0}
                >
                  ← Prev
                </button>
                <span className={styles.pageCount}>
                  {page + 1} / {totalPages}
                </span>
                <button
                  className={styles.pageBtn}
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === totalPages - 1}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.noProjects}>
            <p>Projects under NDA — details available on request.</p>
          </div>
        )}
      </div>
    </section>
  );
}
