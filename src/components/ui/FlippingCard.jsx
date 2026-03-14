import styles from './FlippingCard.module.css';

export function FlippingCard({ frontContent, backContent, className = '' }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.card}>
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
