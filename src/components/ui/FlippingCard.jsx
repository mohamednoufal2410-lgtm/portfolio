import { useState } from 'react';
import styles from './FlippingCard.module.css';

export function FlippingCard({ frontContent, backContent, className = '' }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
        <div className={`${styles.face} ${styles.front}`}>
          <div className={styles.inner}>{frontContent}</div>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.inner}>{backContent}</div>
        </div>
      </div>
    </div>
  );
}
