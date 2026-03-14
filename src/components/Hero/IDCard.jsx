import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { personal } from '../../data/content';
import styles from '../../styles/components/Hero.module.css';

export default function IDCard() {
  const [isDragging, setIsDragging] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-150, 0, 150], [180, 0, -180]);
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    if (Math.abs(currentX) > 60) {
      setIsFlipped((prev) => !prev);
    }
    x.set(0);
  };

  return (
    <div className={styles.cardSide}>
      <div className={`${styles.lanyardWrapper} ${!isDragging ? styles.swaying : ''}`}>
        <div className={styles.lanyardClip} />
        <div className={styles.lanyardString} />

        <motion.div
          ref={containerRef}
          className={styles.cardContainer}
          drag="x"
          dragConstraints={{ left: -150, right: 150 }}
          dragElastic={0.1}
          style={{ x }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className={styles.cardInner}
            style={{
              rotateY: isDragging
                ? smoothRotateY
                : isFlipped
                  ? 180
                  : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {/* Front Face */}
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
              <div className={styles.avatarCircle}>
                {personal.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div className={styles.cardName}>{personal.name}</div>
              <div className={styles.cardRole}>{personal.role}</div>
              <div className={styles.availablePill}>
                <span className={styles.availableDot} />
                Available for work
              </div>
            </div>

            {/* Back Face */}
            <div className={`${styles.cardFace} ${styles.cardBack}`}>
              <div className={styles.cardBackContent}>
                <h3>Let's Create</h3>
                <p>
                  Passionate about crafting intuitive, beautiful products that make a difference.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.dragHint}>← drag to flip →</div>
      </div>
    </div>
  );
}
