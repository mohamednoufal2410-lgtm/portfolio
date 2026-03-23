import { useParams, Link } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { projects } from '../../data/content';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import { useTheme } from '../../context/ThemeContext';
import styles from '../../styles/components/CaseStudy.module.css';

function DesignToggleCard({ label, wireframeImage, finalImage }) {
  const [showFinal, setShowFinal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e) => { if (e.key === 'Escape') setExpanded(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const toggleBar = (
    <div className={styles.designToggleBar}>
      <span className={`${styles.toggleLabel} ${!showFinal ? styles.toggleLabelActive : ''}`}>Wireframe</span>
      <button
        className={`${styles.toggleSwitch} ${showFinal ? styles.toggleSwitchOn : ''}`}
        onClick={() => setShowFinal((f) => !f)}
        role="switch"
        aria-checked={showFinal}
      >
        <span className={styles.toggleThumb} />
      </button>
      <span className={`${styles.toggleLabel} ${showFinal ? styles.toggleLabelActive : ''}`}>Final Design</span>
    </div>
  );

  return (
    <>
      <div className={styles.featureCard}>
        <div className={styles.designToggleHeader}>
          <span className={styles.sliderCardLabel} style={{ border: 'none', padding: 0 }}>{label}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            {toggleBar}
            <button
              onClick={() => setExpanded(true)}
              title="View fullscreen"
              style={{
                background: 'none',
                border: '1px solid var(--white-10)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--white-40)',
                cursor: 'pointer',
                padding: '5px 7px',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--white-30)'; e.currentTarget.style.color = 'var(--white-70)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--white-10)'; e.currentTarget.style.color = 'var(--white-40)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
                <path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.designToggleImage}>
          <AnimatePresence mode="wait">
            <motion.img
              key={showFinal ? 'final' : 'wireframe'}
              src={showFinal ? finalImage : wireframeImage}
              alt={showFinal ? `${label} final design` : `${label} wireframe`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ width: '100%', display: 'block' }}
            />
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setExpanded(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--white-10)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                maxWidth: '1100px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Overlay header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 24px',
                borderBottom: '1px solid var(--white-10)',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--white)' }}>
                  {label}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                  {toggleBar}
                  <button
                    onClick={() => setExpanded(false)}
                    style={{
                      background: 'var(--white-10)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--white-70)',
                      cursor: 'pointer',
                      padding: '6px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.75rem',
                      gap: '6px',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--white-20)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--white-10)'; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    Close
                  </button>
                </div>
              </div>
              {/* Overlay image */}
              <div style={{ overflow: 'auto', flexGrow: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={showFinal ? 'final-exp' : 'wire-exp'}
                    src={showFinal ? finalImage : wireframeImage}
                    alt={showFinal ? `${label} final design` : `${label} wireframe`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: '100%', display: 'block' }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const sectionIds = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'design', label: 'Design' },
  { id: 'prototype', label: 'Prototype' },
  { id: 'features', label: 'Solutions' },
  { id: 'results', label: 'Results' },
  { id: 'learnings', label: 'Learnings' },
  { id: 'nextsteps', label: 'Next Steps' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug];
  const [activeSection, setActiveSection] = useState('overview');
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [imgScale, setImgScale] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePrototype, setActivePrototype] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const fillWidth = useTransform(scaleX, [0, 1], ['0%', '100%']);
  const sectionRefs = useRef({});

  // Scroll to top before paint when slug changes (useLayoutEffect = before paint, not after)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Reset zoom when lightbox opens/closes
  useEffect(() => {
    setImgScale(1);
  }, [lightboxSrc]);

  // Non-passive wheel listener for zoom (passive:false needed to preventDefault)
  useEffect(() => {
    if (!lightboxSrc) return;
    const handleWheel = (e) => {
      e.preventDefault();
      setImgScale((s) => Math.min(4, Math.max(0.5, s - e.deltaY * 0.001)));
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [lightboxSrc]);

  // Auto-advance testimonials
  useEffect(() => {
    if (!study?.testimonials?.length) return;
    const timer = setInterval(() => {
      setActiveTestimonial((i) => (i + 1) % study.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [study]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    sectionIds.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [study]);

  if (!study) {
    const project = projects.find((p) => p.id === slug);
    return (
      <div className={styles.page}>
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            <Link to="/" className={styles.topBarBack}>← Back</Link>
          </div>
        </div>
        <div className={styles.comingSoonWrap}>
          <motion.div
            className={styles.comingSoonCard}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.comingSoonLabel}>Coming Soon</span>
            <h1 className={styles.comingSoonTitle}>
              {project?.title || 'Case Study'}
            </h1>
            {project?.heading && (
              <p className={styles.comingSoonHeading}>{project.heading}</p>
            )}
            <p className={styles.comingSoonDesc}>
              This case study is currently being documented. Check back soon.
            </p>
            <div className={styles.comingSoonDots}>
              <span /><span /><span />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.page}>
      {/* ===== Top Bar ===== */}
      <div className={styles.topBar}>
        <motion.div className={styles.topBarFill} style={{ width: fillWidth }} />

        <div className={styles.topBarInner}>
          <Link to="/" className={styles.topBarBack}>
            <span>&#8592;</span> Back
          </Link>

          <div className={styles.topBarActions}>
            <button
              className={styles.topBarTheme}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {(study.prototypeUrl || study.prototypes?.length > 0) && (
              <button className={styles.topBarProto} onClick={() => scrollTo('prototype')}>
                View Prototype &#8599;
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Side nav dots */}
      <nav className={styles.sideNav}>
        {sectionIds.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.sideNavDot} ${activeSection === id ? styles.active : ''}`}
            onClick={() => scrollTo(id)}
          >
            <span className={styles.tooltip}>{label}</span>
          </button>
        ))}
      </nav>

      {/* ===== Hero ===== */}
      <motion.header
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p className={styles.heroLabel} variants={fadeUp}>
          Product Case Study &nbsp;·&nbsp; {study.title}
        </motion.p>
        <motion.h1 className={styles.heroTitle} variants={fadeUp}>
          {study.heading || study.title}
        </motion.h1>
        <motion.p className={styles.heroHeadline} variants={fadeUp}>{study.headline}</motion.p>

        <motion.div className={styles.heroImage} variants={fadeUp}>
          {study.heroImage ? (
            <img src={study.heroImage} alt={study.title} onClick={() => setLightboxSrc(study.heroImage)} className={styles.clickableImage} />
          ) : (
            <div className={styles.heroImagePlaceholder}>Add hero image</div>
          )}
        </motion.div>

        <motion.div className={styles.metaCard} variants={fadeUp}>
          {Object.entries(study.meta).map(([key, val]) => (
            <div key={key} className={styles.metaColumn}>
              <span className={styles.metaLabel}>{key.toUpperCase()}</span>
              {key === 'tools' && Array.isArray(val) ? (
                <span className={styles.metaTools}>
                  {val.map((tool) => {
                    const iconMap = {
                      figma: 'figma',
                      miro: 'miro',
                      figjam: 'figma',
                      mural: 'mural',
                    };
                    const slug = iconMap[tool.toLowerCase()] || tool.toLowerCase().replace(/\s+/g, '');
                    return (
                      <img
                        key={tool}
                        src={`https://cdn.simpleicons.org/${slug}`}
                        alt={tool}
                        title={tool}
                        className={styles.toolIcon}
                      />
                    );
                  })}
                </span>
              ) : (
                <span className={styles.metaValue}>{val}</span>
              )}
            </div>
          ))}
        </motion.div>
      </motion.header>

      {/* ===== Overview ===== */}
      <motion.section
        id="overview"
        ref={(el) => (sectionRefs.current.overview = el)}
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Overview</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Project Overview</motion.h2>

        {study.summary && (
          <motion.div className={styles.summaryCallout} variants={fadeUp}>
            <span className={styles.summaryQuote}>"</span>
            <p>{study.summary}</p>
          </motion.div>
        )}

        <motion.p className={styles.paragraph} variants={fadeUp}>{study.overview}</motion.p>
        <motion.p className={styles.paragraph} variants={fadeUp}>{study.background}</motion.p>

        {study.myRole && (
          <motion.div className={styles.roleBlock} variants={fadeUp}>
            <h3 className={styles.roleTitle}>My Role &amp; Team</h3>
            <p className={styles.paragraph} style={{ marginBottom: 'var(--space-lg)' }}>{study.myRole.description}</p>
            <div className={styles.roleResponsibilities}>
              {study.myRole.responsibilities.map((r, i) => (
                <span key={i} className={styles.rolePill}>{r}</span>
              ))}
            </div>
          </motion.div>
        )}

      </motion.section>

      {study.context && (
        <>
          <hr className={styles.divider} />
          <motion.section
            id="context"
            ref={(el) => (sectionRefs.current.context = el)}
            className={styles.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-yellow)', background: 'rgba(240,141,50,0.08)', borderColor: 'rgba(240,141,50,0.2)' }}>Context</motion.p>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>{study.context.headline}</motion.h2>

            <motion.div className={styles.contextLayout} variants={fadeUp}>
              <div className={styles.contextLeft}>
                <p className={styles.paragraph}>{study.context.description}</p>
                <ul className={styles.contextList}>
                  {study.context.currentReality.map((item, i) => (
                    <li key={i}>
                      <span className={styles.contextCheck}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.contextCard}>
                <div className={styles.contextCardHeader}>{study.context.contextCard.title}</div>
                <div className={styles.contextCardBody}>
                  {study.context.contextCard.items.map((item, i) => (
                    <div key={i} className={styles.contextCardRow}>
                      <span className={styles.contextCardLabel}>{item.label}</span>
                      <span className={styles.contextCardValue}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.contextCardNote}>{study.context.contextCard.note}</p>
              </div>
            </motion.div>

          </motion.section>
        </>
      )}

      {study.currentProcess && (
        <>
          <hr className={styles.divider} />
          <motion.section
            id="context"
            ref={(el) => (sectionRefs.current.context = el)}
            className={styles.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-yellow)', background: 'rgba(240,141,50,0.08)', borderColor: 'rgba(240,141,50,0.2)' }}>Context</motion.p>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>{study.currentProcess.headline}</motion.h2>

            {/* Log flow — 2 steps */}
            <motion.div variants={fadeUp}>
              <p className={styles.artifactFlowLabel}>{study.currentProcess.logFlow.label}</p>
              <div className={styles.artifactGrid}>
                {study.currentProcess.logFlow.steps.map((a, i) => (
                  <div key={i} className={styles.artifactCard}>
                    <div className={styles.artifactImageWrap}>
                      <img src={a.image} alt={a.label} onClick={() => setLightboxSrc(a.image)} className={styles.clickableImage} />
                    </div>
                    <span className={styles.artifactCaption}>{a.caption}</span>
                    <h4 className={styles.artifactLabel}>{a.label}</h4>
                    <p className={styles.artifactDesc}>{a.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SOP — separate block */}
            <motion.div className={styles.sopBlock} variants={fadeUp}>
              <p className={styles.artifactFlowLabel}>{study.currentProcess.sopProblem.label}</p>
              <div className={styles.sopInner}>
                <div className={styles.sopImageWrap}>
                  <img src={study.currentProcess.sopProblem.image} alt="SOP Manual" onClick={() => setLightboxSrc(study.currentProcess.sopProblem.image)} className={styles.clickableImage} />
                </div>
                <div className={styles.sopContent}>
                  <p className={styles.sopDesc}>{study.currentProcess.sopProblem.description}</p>
                  <div className={styles.sopSolution}>
                    <span className={styles.sopSolutionLabel}>The digital fix</span>
                    <p>{study.currentProcess.sopProblem.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Insight pull quote */}
            <motion.div className={styles.processInsight} variants={fadeUp}>
              <span className={styles.processInsightMark}>"</span>
              <p>{study.currentProcess.insight}</p>
            </motion.div>

            {/* What digital changes */}
            <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-3xl)' }}>
              <h3 className={styles.processShiftTitle}>What going digital changes</h3>
              <div className={styles.processShiftGrid}>
                {study.currentProcess.digitalShift.map((point, i) => (
                  <div key={i} className={styles.processShiftCard}>
                    <span className={styles.processShiftNumber}>{String(i + 1).padStart(2, '0')}</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.section>
        </>
      )}

      <hr className={styles.divider} />

      {/* ===== Problem ===== */}
      <motion.section
        id="problem"
        ref={(el) => (sectionRefs.current.problem = el)}
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-pink)', background: 'rgba(255,45,135,0.08)', borderColor: 'rgba(255,45,135,0.2)' }}>The Problem</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Challenges We Needed to Solve</motion.h2>
        <motion.p className={styles.paragraph} variants={fadeUp}>{study.problemIntro}</motion.p>

        <motion.div className={styles.painGrid} variants={stagger}>
          {study.painPoints.map((p, i) => (
            <motion.div key={i} className={styles.painCard} variants={fadeUp}>
              <span className={styles.painNumber}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {study.hmwStatement && (
          <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-3xl)' }}>
            <p className={styles.sectionLabel} style={{ color: 'var(--accent-purple)', background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)', display: 'inline-flex', marginBottom: 'var(--space-lg)' }}>
              How Might We
            </p>
            <div className={styles.hmwCard}>
              <span className={styles.hmwMark}>"</span>
              <p>{study.hmwStatement}</p>
            </div>
          </motion.div>
        )}

        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-3xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
            Project Goals
          </h3>
          <ul className={styles.bulletList}>
            {study.goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>

          {study.context?.comparison && (
            <div className={styles.comparisonBlock}>
              <div className={styles.comparisonTable}>
                <div className={styles.comparisonHeader}>
                  <span>{study.context.comparison.before}</span>
                  <span>{study.context.comparison.after}</span>
                </div>
                {study.context.comparison.rows.map((row, i) => (
                  <div key={i} className={styles.comparisonRow}>
                    <span className={styles.comparisonBefore}>{row.before}</span>
                    <span className={styles.comparisonAfter}>{row.after}</span>
                  </div>
                ))}
              </div>

              {study.context.comparison.pullQuote && (
                <div className={styles.pullQuote}>
                  <span className={styles.pullQuoteMark}>"</span>
                  <div>
                    <p className={styles.pullQuoteText}>"{study.context.comparison.pullQuote.quote}"</p>
                    <p className={styles.pullQuoteAuthor}>{study.context.comparison.pullQuote.author}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-3xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
            My Responsibilities
          </h3>
          <div className={styles.pillRow}>
            {study.responsibilities.map((r, i) => (
              <span key={i} className={styles.pill}>{r}</span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <hr className={styles.divider} />

      {/* ===== Research ===== */}
      <motion.section
        id="research"
        ref={(el) => (sectionRefs.current.research = el)}
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-blue)', background: 'rgba(77,91,255,0.08)', borderColor: 'rgba(77,91,255,0.2)' }}>Research</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Understanding the Users</motion.h2>

        {/* Research Method Cards */}
        <motion.div className={styles.methodGrid} variants={stagger}>

          {/* Interviews */}
          <motion.div className={`${styles.methodCard} ${styles.methodCardBlue}`} variants={fadeUp}>
            <div className={styles.methodCardHead}>
              <span className={styles.methodIcon}>◎</span>
              <div>
                <h4 className={styles.methodTitle}>User Interviews</h4>
                <span className={styles.methodMeta}>{study.research.interviews.count} participants</span>
              </div>
            </div>
            <p className={styles.methodDesc}>{study.research.interviews.description}</p>
            <ul className={styles.methodList}>
              {study.research.interviews.keyQuestions.map((q, i) => (
                <li key={i}>&ldquo;{q}&rdquo;</li>
              ))}
            </ul>
          </motion.div>

          {/* Contextual Inquiry */}
          <motion.div className={`${styles.methodCard} ${styles.methodCardGreen}`} variants={fadeUp}>
            <div className={styles.methodCardHead}>
              <span className={styles.methodIcon}>◈</span>
              <div>
                <h4 className={styles.methodTitle}>Contextual Inquiry</h4>
                <span className={styles.methodMeta}>Field observation</span>
              </div>
            </div>
            <p className={styles.methodDesc}>{study.research.contextualInquiry.description}</p>
            <ul className={styles.methodList}>
              {study.research.contextualInquiry.observations.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </motion.div>

          {/* Market Analysis */}
          <motion.div className={`${styles.methodCard} ${styles.methodCardYellow}`} variants={fadeUp}>
            <div className={styles.methodCardHead}>
              <span className={styles.methodIcon}>◉</span>
              <div>
                <h4 className={styles.methodTitle}>Market Analysis</h4>
                <span className={styles.methodMeta}>Competitive review</span>
              </div>
            </div>
            <p className={styles.methodDesc}>{study.research.marketAnalysis.description}</p>
            <ul className={styles.methodList}>
              {study.research.marketAnalysis.findings.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Personas */}
        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-3xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
            User Personas
          </h3>
          <div className={styles.personaGrid}>
            {study.personas.map((p, i) => (
              <div key={i} className={styles.personaCard}>
                <div className={styles.personaImageWrap}>
                  <img src={p.image} alt={p.title} className={styles.personaImage} />
                </div>
                <div className={styles.personaCardContent}>
                  <h4>{p.title}</h4>
                  <ul className={styles.personaTraits}>
                    {p.traits.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <hr className={styles.divider} />

      {/* ===== Design Process ===== */}
      <motion.section
        id="design"
        ref={(el) => (sectionRefs.current.design = el)}
        className={styles.sectionWide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-purple)', background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)' }}>Design Process</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>From Research to Solution</motion.h2>

        {/* Design Thinking Timeline */}
        {study.designPhases?.length > 0 && (
          <motion.div className={styles.designTimeline} variants={fadeUp}>
            {study.designPhases.map((step, i) => {
              const accentMap = {
                blue:   { color: 'var(--accent-blue)',   bg: 'rgba(77,91,255,0.08)',   border: 'rgba(77,91,255,0.2)' },
                purple: { color: 'var(--accent-purple)', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
                yellow: { color: 'var(--accent-yellow)', bg: 'rgba(240,141,50,0.08)', border: 'rgba(240,141,50,0.2)' },
                green:  { color: 'var(--accent-green)',  bg: 'rgba(0,255,102,0.08)',  border: 'rgba(0,255,102,0.2)' },
                pink:   { color: 'var(--accent-pink)',   bg: 'rgba(255,45,135,0.08)', border: 'rgba(255,45,135,0.2)' },
              };
              const a = accentMap[step.accent] || accentMap.blue;
              return (
                <div key={i} className={styles.designPhaseCard}>
                  <div className={styles.designPhaseTop} style={{ borderColor: a.color }}>
                    <span className={styles.designPhaseNumber} style={{ color: a.color }}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.designPhaseName} style={{ color: a.color }}>{step.phase}</span>
                  </div>
                  <ul className={styles.designPhaseList}>
                    {step.activities.map((act, j) => (
                      <li key={j}>{act}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Happy Paths — derived from features */}
        {study.features?.length > 0 && (
          <motion.div variants={fadeUp}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
              Happy Paths
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}>
              {study.features.map((f, i) => (
                <span key={i} style={{
                  display: 'inline-block',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--glass-02)',
                  background: 'var(--glass-01)',
                  fontSize: '0.875rem',
                  color: 'var(--white-70)',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {f.title}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Information Architecture */}
        {study.designProcess.iaImage && (
          <motion.div variants={fadeUp}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
              Information Architecture
            </h3>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'auto', border: '1px solid var(--glass-02)', background: 'var(--glass-01)' }}>
              <img
                src={study.designProcess.iaImage}
                alt={`${study.title} — Information Architecture`}
                style={{ minWidth: '1400px', display: 'block' }}
                onClick={() => setLightboxSrc(study.designProcess.iaImage)}
                className={styles.clickableImage}
              />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--white-40)', marginTop: 'var(--space-sm)', textAlign: 'center', fontStyle: 'italic' }}>
              Scroll horizontally to explore full architecture &rarr;
            </p>
          </motion.div>
        )}

        {/* Early Ideation Sketches */}
        {study.designProcess.ideation?.length > 0 && (
          <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
              Early Ideation
            </h3>
            <div className={styles.ideationGrid}>
              {study.designProcess.ideation.map((sketch, i) => (
                <div key={i} className={styles.ideationItem}>
                  <img
                    src={sketch.image}
                    alt={sketch.title}
                    onClick={() => setLightboxSrc(sketch.image)}
                    className={styles.clickableImage}
                    style={{ width: '100%', display: 'block', borderRadius: 'var(--radius-md)' }}
                  />
                  <p style={{ fontSize: '0.7rem', color: 'var(--white-40)', marginTop: '8px', textAlign: 'center', fontStyle: 'italic' }}>
                    {sketch.caption || sketch.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Wireframe vs Final Design */}
        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
            Wireframe to Final Design
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--white-40)', marginBottom: 'var(--space-lg)' }}>
            Toggle between the wireframe and the final UI to see how the design evolved.
          </p>

          <div className={styles.featureCards}>
            {study.designProcess.wireframes?.map((w, i) => (
              <DesignToggleCard
                key={i}
                label={w.label}
                wireframeImage={w.wireframeImage}
                finalImage={w.finalImage}
              />
            ))}
          </div>
        </motion.div>

        {/* Design Iteration Slider */}
        {study.designProcess.iterationSlider && (
          <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-sm)' }}>
              {study.designProcess.iterationSlider.label}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--white-40)', marginBottom: 'var(--space-lg)' }}>
              Drag the slider to compare the previous version with the redesigned interface.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--white-40)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ← {study.designProcess.iterationSlider.beforeLabel}
              </span>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--white-40)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {study.designProcess.iterationSlider.afterLabel} →
              </span>
            </div>
            <BeforeAfterSlider
              beforeImage={study.designProcess.iterationSlider.beforeImage}
              afterImage={study.designProcess.iterationSlider.afterImage}
              naturalHeight
            />
          </motion.div>
        )}
      </motion.section>

      <hr className={styles.divider} />

      {/* ===== Prototype ===== */}
      <motion.section
        id="prototype"
        ref={(el) => (sectionRefs.current.prototype = el)}
        className={styles.sectionWide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-blue)', background: 'rgba(77,91,255,0.08)', borderColor: 'rgba(77,91,255,0.2)' }}>Prototype</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Interactive Prototype</motion.h2>
        <motion.p className={styles.paragraph} variants={fadeUp}>
          Explore the full interactive prototype below. Click through the flows to experience the design as users would.
        </motion.p>

        <motion.div variants={fadeUp}>
          {study.prototypes?.length > 0 ? (
            <>
              <div className={styles.prototypeTabBar}>
                {study.prototypes.map((p, i) => (
                  <button
                    key={i}
                    className={`${styles.prototypeTab} ${activePrototype === i ? styles.prototypeTabActive : ''}`}
                    onClick={() => setActivePrototype(i)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className={styles.prototypeFrame}>
                <iframe
                  key={activePrototype}
                  src={study.prototypes[activePrototype].url}
                  allowFullScreen
                  title={study.prototypes[activePrototype].label}
                />
              </div>
            </>
          ) : study.prototypeUrl ? (
            <div className={styles.prototypeFrame}>
              <iframe
                src={study.prototypeUrl}
                allowFullScreen
                title={`${study.title} prototype`}
              />
            </div>
          ) : (
            <div className={styles.prototypePlaceholder}>
              <span className={styles.prototypePlaceholderIcon}>⬡</span>
              <p>Prototype embed coming soon</p>
              <span>Add a Figma embed URL to <code>prototypeUrl</code> in caseStudies.js</span>
            </div>
          )}
        </motion.div>
      </motion.section>

      <hr className={styles.divider} />

      {/* ===== Features / Design Solutions ===== */}
      <motion.section
        id="features"
        ref={(el) => (sectionRefs.current.features = el)}
        className={styles.sectionWide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-yellow)', background: 'rgba(240,141,50,0.08)', borderColor: 'rgba(240,141,50,0.2)' }}>Features</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Design Solutions in Detail</motion.h2>

        <div className={styles.featureCards}>
          {(() => {
            // Build a map: feature index → linked pain point (if it has issues/resultsIn)
            const linkedPainPoints = {};
            study.painPoints?.forEach((p, pi) => {
              if (p.linkedFeatureIndex != null && p.issues) {
                linkedPainPoints[p.linkedFeatureIndex] = { ...p, painIndex: pi };
              }
            });

            return study.features.map((feat, i) => {
              const linkedPain = linkedPainPoints[i];

              if (linkedPain) {
                return (
                  <motion.div key={i} className={styles.expandedProblemBlock} variants={fadeUp}>
                    <div className={styles.expandedProblemSection}>
                      <span className={styles.expandedProblemLabel} style={{ color: 'var(--accent-pink)', borderColor: 'rgba(255,45,135,0.3)' }}>
                        Problem {String(linkedPain.painIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className={styles.expandedProblemTitle}>{linkedPain.title}</h3>

                      <p className={styles.expandedSubheading}>Issue</p>
                      <ul className={styles.expandedList}>
                        {linkedPain.issues.map((issue, j) => (
                          <li key={j}>{issue}</li>
                        ))}
                      </ul>

                      <p className={styles.expandedSubheading}>This results in</p>
                      <ul className={styles.expandedList}>
                        {linkedPain.resultsIn.map((r, j) => (
                          <li key={j}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.expandedSolutionSection}>
                      <span className={styles.expandedSolutionLabel}>How we solved it</span>
                      {feat.image && (
                        <div className={styles.expandedSolutionImage}>
                          <img
                            src={feat.image}
                            alt={feat.title}
                            onClick={() => setLightboxSrc(feat.image)}
                            className={styles.clickableImage}
                          />
                        </div>
                      )}
                      <h4 className={styles.expandedSolutionTitle}>{feat.title}</h4>
                      <p className={styles.expandedSolutionText}>{feat.solution}</p>
                      <p className={styles.expandedSolutionImpact}>{feat.impact}</p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div key={i} className={styles.featureCard} variants={fadeUp}>
                  <div className={styles.featureCardHeader}>
                    <h3 className={styles.featureCardTitle}>{feat.title}</h3>
                  </div>
                  <div className={styles.featureCardImage}>
                    {feat.beforeImage && feat.afterImage ? (
                      <BeforeAfterSlider
                        beforeImage={feat.beforeImage}
                        afterImage={feat.afterImage}
                      />
                    ) : feat.image ? (
                      <img src={feat.image} alt={feat.title} onClick={() => setLightboxSrc(feat.image)} className={styles.clickableImage} />
                    ) : (
                      <div className={styles.featureCardPlaceholder} />
                    )}
                  </div>
                  <div className={styles.featureCardBody}>
                    <div className={styles.featureCardDetail}>
                      <span className={styles.featureDetailDot} style={{ background: 'var(--accent-pink)' }} />
                      <div>
                        <p className={styles.featureDetailLabel}>Problem</p>
                        <p>{feat.problem}</p>
                      </div>
                    </div>
                    <div className={styles.featureCardDetail}>
                      <span className={styles.featureDetailDot} style={{ background: 'var(--accent-blue)' }} />
                      <div>
                        <p className={styles.featureDetailLabel}>Solution</p>
                        <p>{feat.solution}</p>
                      </div>
                    </div>
                    <div className={styles.featureCardDetail}>
                      <span className={styles.featureDetailDot} style={{ background: 'var(--accent-green)' }} />
                      <div>
                        <p className={styles.featureDetailLabel}>Impact</p>
                        <p>{feat.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            });
          })()}
        </div>
      </motion.section>

      <hr className={styles.divider} />

      {/* ===== Results ===== */}
      <motion.section
        id="results"
        ref={(el) => (sectionRefs.current.results = el)}
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Results</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Measurable Impact</motion.h2>

        {Object.entries(study.results).map(([category, items]) => (
          <motion.div key={category} className={styles.resultsCategory} variants={fadeUp}>
            <h3 className={styles.resultsCategoryTitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)} Metrics
            </h3>
            <div className={styles.resultsGrid}>
              {items.map((item, i) => (
                <div key={i} className={styles.resultCard}>
                  <div className={styles.value}>{item.value}</div>
                  <div className={styles.label}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Testimonials */}
        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-lg)' }}>
            What Users Said
          </h3>
          <div className={styles.testimonialSlider}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className={styles.testimonialCard}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.testimonialQuoteMark}>"</span>
                <blockquote>{study.testimonials[activeTestimonial].quote}</blockquote>
                <cite>
                  — {study.testimonials[activeTestimonial].author}
                  {study.testimonials[activeTestimonial].company ? `, ${study.testimonials[activeTestimonial].company}` : ''}
                </cite>
              </motion.div>
            </AnimatePresence>

            {study.testimonials.length > 1 && (
              <div className={styles.testimonialDots}>
                {study.testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.testimonialDot} ${i === activeTestimonial ? styles.testimonialDotActive : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.section>

      <hr className={styles.divider} />

      {/* ===== Learnings ===== */}
      <motion.section
        id="learnings"
        ref={(el) => (sectionRefs.current.learnings = el)}
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-purple)', background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)' }}>Reflection</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Key Learnings</motion.h2>

        <motion.div variants={fadeUp}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--accent-green)', marginBottom: 'var(--space-md)' }}>
            What Worked Well
          </h3>
          <div className={styles.learningGrid}>
            {study.learnings.worked.map((l, i) => (
              <div key={i} className={`${styles.learningCard} ${styles.learningCardGood}`}>
                <h4>{l.title}</h4>
                <p>{l.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--accent-pink)', marginBottom: 'var(--space-md)' }}>
            Challenges Faced
          </h3>
          <div className={styles.learningGrid}>
            {study.learnings.challenges.map((l, i) => (
              <div key={i} className={`${styles.learningCard} ${styles.learningCardBad}`}>
                <h4>{l.title}</h4>
                <p>{l.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--white-70)', marginBottom: 'var(--space-md)' }}>
            What I'd Do Differently
          </h3>
          <ul className={styles.bulletList}>
            {study.learnings.differently.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {study.nextSteps && (
        <>
          <hr className={styles.divider} />
          <motion.section
            id="nextsteps"
            ref={(el) => (sectionRefs.current.nextsteps = el)}
            className={styles.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-green)', background: 'rgba(0,255,102,0.08)', borderColor: 'rgba(0,255,102,0.2)' }}>Next Steps</motion.p>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>What Comes Next</motion.h2>
            <motion.p className={styles.paragraph} variants={fadeUp}>{study.nextSteps.description}</motion.p>
            <motion.div className={styles.nextStepsGrid} variants={stagger}>
              {study.nextSteps.items.map((item, i) => (
                <motion.div key={i} className={styles.nextStepCard} variants={fadeUp}>
                  <span className={styles.nextStepNumber}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </>
      )}

      <hr className={styles.divider} />

      {/* ===== Ecosystem ===== */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp} style={{ color: 'var(--accent-blue)', background: 'rgba(77,91,255,0.08)', borderColor: 'rgba(77,91,255,0.2)' }}>Ecosystem</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Part of a Bigger Picture</motion.h2>
        <motion.p className={styles.paragraph} variants={fadeUp}>{study.ecosystem.description}</motion.p>

        <motion.div className={styles.ecosystemGrid} variants={fadeUp}>
          {study.ecosystem.platforms.map((p, i) => (
            <Link key={i} to={p.link} className={styles.ecosystemCard}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </Link>
          ))}
        </motion.div>
      </motion.section>

      {/* ===== Image Lightbox ===== */}
      {lightboxSrc && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxSrc(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightboxSrc(null)}>&times;</button>
          {imgScale !== 1 && (
            <button
              className={styles.lightboxReset}
              onClick={(e) => { e.stopPropagation(); setImgScale(1); }}
            >
              {Math.round(imgScale * 100)}% &nbsp;↺
            </button>
          )}
          <img
            src={lightboxSrc}
            alt="Zoomed view"
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
            style={{ transform: `scale(${imgScale})`, transformOrigin: 'center center' }}
          />
          <p className={styles.lightboxHint}>Scroll to zoom</p>
        </div>
      )}
    </div>
  );
}
