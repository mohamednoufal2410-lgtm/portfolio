import { motion } from 'framer-motion';
import { personal } from '../../data/content';
import { BackgroundCells } from '../ui/BackgroundRippleEffect';
import styles from '../../styles/components/Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.rippleBg}>
        <BackgroundCells />
      </div>

      <div className={styles.heroContent}>
        <motion.div
          className={styles.textSide}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} custom={0} variants={fadeUp}>
            {personal.greeting}
          </motion.p>

          <motion.h1 className={styles.headline} custom={1} variants={fadeUp}>
            {personal.headline}
          </motion.h1>

          <motion.p className={styles.subtext} custom={2} variants={fadeUp}>
            {personal.subtext}
          </motion.p>

          <motion.div className={styles.ctaRow} custom={3} variants={fadeUp}>
            <a href="#contact" className={styles.ctaPrimary}>
              Get in touch
              <span>→</span>
            </a>
            <a href="#projects" className={styles.ctaSecondary}>
              View work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
