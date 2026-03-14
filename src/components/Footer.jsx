import styles from '../styles/components/Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Designed & built by <span>Mohamed Noufal</span> &copy; {new Date().getFullYear()}
      </p>
      <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </footer>
  );
}
