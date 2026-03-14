import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/content';
import { staggerContainer } from '../../hooks/useScrollReveal';
import ExperienceCard from './ExperienceCard';
import styles from '../../styles/components/Experience.module.css';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className={styles.experience}>
      <p className="section-label">Journey</p>
      <h2 className="section-title">Where I've worked</h2>

      <motion.div
        ref={ref}
        className={styles.timeline}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer(0.12)}
      >
        {experience.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </motion.div>
    </section>
  );
}
