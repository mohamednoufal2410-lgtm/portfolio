import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/content';
import styles from '../../styles/components/Skills.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className={styles.skills}>
      <p className="section-label">Capabilities</p>
      <h2 className="section-title">What I bring to the table</h2>

      <motion.div
        ref={ref}
        className={styles.track}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} className={styles.card} variants={fadeUp}>
            <div className={styles.imageWrapper}>
              <img src={skill.image} alt={skill.name} className={styles.image} />
            </div>
            <h3 className={styles.cardName}>{skill.name}</h3>
            <p className={styles.cardDesc}>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
