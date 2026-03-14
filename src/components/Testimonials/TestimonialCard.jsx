import { motion } from 'framer-motion';
import { fadeUpItem } from '../../hooks/useScrollReveal';
import styles from '../../styles/components/Testimonials.module.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div className={styles.card} variants={fadeUpItem}>
      <span className={styles.quoteIcon}>"</span>
      <p className={styles.quote}>{testimonial.quote}</p>
      <div className={styles.author}>
        <span className={styles.authorName}>{testimonial.author}</span>
        <span className={styles.authorTitle}>{testimonial.title}</span>
      </div>
    </motion.div>
  );
}
