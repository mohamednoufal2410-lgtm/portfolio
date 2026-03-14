import { marqueeItems } from '../../data/content';
import styles from '../../styles/components/Hero.module.css';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {doubled.map((item, i) => (
          <span className={styles.marqueeItem} key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
