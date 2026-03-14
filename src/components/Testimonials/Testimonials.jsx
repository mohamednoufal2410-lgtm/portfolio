import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '../../data/content';
import { staggerContainer } from '../../hooks/useScrollReveal';
import TestimonialCard from './TestimonialCard';
import styles from '../../styles/components/Testimonials.module.css';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className={styles.testimonials}>
      <p className="section-label">Kind Words</p>
      <h2 className="section-title">What people say</h2>

      <motion.div
        ref={ref}
        className={styles.carousel}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer(0.12)}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} testimonial={t} />
        ))}
      </motion.div>
    </section>
  );
}
