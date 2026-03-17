import { useRef, useCallback, useEffect } from 'react';
import styles from './BeforeAfterSlider.module.css';

const SKEW = 8; // diagonal slant in %

export default function BeforeAfterSlider({ beforeImage, afterImage, objectFit = 'cover', containerStyle, naturalHeight = false }) {
  const containerRef = useRef(null);
  const beforeWrapRef = useRef(null);
  const svgLineRef = useRef(null);
  const hintRef = useRef(null);
  const posRef = useRef(50);
  const rafRef = useRef(null);

  const applyPosition = useCallback((percent) => {
    const p = Math.max(5, Math.min(95, percent));
    posRef.current = p;

    const clipPath = `polygon(0 0, ${p}% 0, ${p - SKEW}% 100%, 0 100%)`;
    if (beforeWrapRef.current) {
      beforeWrapRef.current.style.clipPath = clipPath;
    }
    if (svgLineRef.current) {
      svgLineRef.current.setAttribute('x1', p);
      svgLineRef.current.setAttribute('x2', p - SKEW);
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      const percent = ((e.clientX - rect.left) / rect.width) * 100;
      applyPosition(percent);
    });
  }, [applyPosition]);

  const handleMouseEnter = useCallback((e) => {
    if (hintRef.current) hintRef.current.style.opacity = '0';
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    applyPosition(percent);
  }, [applyPosition]);

  const handleMouseLeave = useCallback(() => {
    if (hintRef.current) hintRef.current.style.opacity = '1';
    // Smoothly animate back to center
    const start = posRef.current;
    const target = 50;
    const duration = 500;
    const startTime = performance.now();

    const ease = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (target - start) * ease(progress);
      applyPosition(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [applyPosition]);

  const handleTouchMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      const percent = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      applyPosition(percent);
    });
  }, [applyPosition]);

  // Set initial position on mount
  useEffect(() => {
    applyPosition(50);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyPosition]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={naturalHeight ? { height: 'auto', ...containerStyle } : containerStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => applyPosition(((e.touches[0].clientX - containerRef.current.getBoundingClientRect().left) / containerRef.current.getBoundingClientRect().width) * 100)}
    >
      {/* After image — bottom layer */}
      <img src={afterImage} alt="After" className={styles.image} draggable={false} style={naturalHeight ? { width: '100%', height: 'auto', objectFit: 'initial', display: 'block' } : { objectFit }} />

      {/* Before image — diagonally clipped */}
      <div ref={beforeWrapRef} className={styles.beforeWrap}>
        <img src={beforeImage} alt="Before" className={styles.image} draggable={false} style={{ objectFit }} />
      </div>

      {/* Diagonal SVG divider line */}
      <svg className={styles.dividerSvg} viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        <line
          ref={svgLineRef}
          x1="50" y1="0"
          x2={50 - SKEW} y2="100"
          className={styles.dividerLine}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Idle hint */}
      <div ref={hintRef} className={styles.hint}>
        <span>← Move cursor to compare →</span>
      </div>
    </div>
  );
}
