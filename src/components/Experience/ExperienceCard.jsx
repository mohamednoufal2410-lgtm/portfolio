import { motion } from 'framer-motion';
import { fadeUpItem } from '../../hooks/useScrollReveal';
import styles from '../../styles/components/Experience.module.css';

export default function ExperienceCard({ exp }) {
  return (
    <motion.div className={styles.card} variants={fadeUpItem}>
      <div className={styles.cardMain}>
        <h3 className={styles.role}>{exp.role}</h3>
        <p className={styles.company}>{exp.company}</p>
        <p className={styles.description}>{exp.description}</p>
      </div>
      <div className={styles.meta}>
        <span className={styles.period}>{exp.period}</span>
        <span className={styles.location}>{exp.location}</span>
      </div>
    </motion.div>
  );
}
