import { useParams, Link } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { caseStudies } from '../../data/caseStudies';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import styles from '../../styles/components/CaseStudy.module.css';

const sectionIds = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'design', label: 'Design' },
  { id: 'features', label: 'Solutions' },
  { id: 'results', label: 'Results' },
  { id: 'learnings', label: 'Learnings' },
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
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
    return (
      <div className={styles.page} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--white)', marginBottom: '16px' }}>
            Project not found
          </h1>
          <Link to="/" style={{ color: 'var(--accent-green)', fontSize: '0.875rem' }}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.page}>
      {/* Progress bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {/* Back link */}
      <Link to="/" className={styles.backLink}>
        <span>&larr;</span> Back
      </Link>

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
        <motion.p className={styles.heroLabel} variants={fadeUp}>Case Study</motion.p>
        <motion.h1 className={styles.heroTitle} variants={fadeUp}>{study.title}</motion.h1>
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
        <motion.p className={styles.paragraph} variants={fadeUp}>{study.overview}</motion.p>
        <motion.p className={styles.paragraph} variants={fadeUp}>{study.background}</motion.p>

      </motion.section>

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
        <motion.p className={styles.sectionLabel} variants={fadeUp}>The Problem</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Challenges We Needed to Solve</motion.h2>
        <motion.p className={styles.paragraph} variants={fadeUp}>{study.problemIntro}</motion.p>

        <motion.div className={styles.painGrid} variants={stagger}>
          {study.painPoints.map((p, i) => (
            <motion.div key={i} className={styles.painCard} variants={fadeUp}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
            Project Goals
          </h3>
          <ul className={styles.bulletList}>
            {study.goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
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
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Research</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Understanding the Users</motion.h2>

        {/* Research Method Cards */}
        <motion.div className={styles.methodGrid} variants={stagger}>

          {/* Interviews */}
          <motion.div className={styles.methodCard} variants={fadeUp}>
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
          <motion.div className={styles.methodCard} variants={fadeUp}>
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
          <motion.div className={styles.methodCard} variants={fadeUp}>
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
        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-sm)' }}>
            User Personas
          </h3>
          <div className={styles.personaGrid}>
            {study.personas.map((p, i) => (
              <div key={i} className={styles.personaCard}>
                <div className={styles.personaImageWrap}>
                  <img src={p.image} alt={p.title} className={styles.personaImage} />
                </div>
                <h4>{p.title}</h4>
                <ul className={styles.personaTraits}>
                  {p.traits.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
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
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Design Process</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>From Research to Solution</motion.h2>

        {/* Happy Paths */}
        {study.designProcess.happyPaths?.length > 0 && (
          <motion.div variants={fadeUp}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-md)' }}>
              Happy Paths
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}>
              {study.designProcess.happyPaths.map((label, i) => (
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
                  {label}
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
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-sm)' }}>
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

        {/* User Flows */}
        {study.designProcess.userFlows?.length > 0 && (
          <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-sm)' }}>
              Key User Flows
            </h3>

            {study.designProcess.userFlows.map((flow, i) => (
              <motion.div key={i} variants={fadeUp} style={{ marginTop: i > 0 ? 'var(--space-xl)' : 'var(--space-md)' }}>
                {flow.image && (
                  <div className={styles.screenCardImage} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--glass-02)' }}>
                    <img
                      src={flow.image}
                      alt={flow.caption || flow.title}
                      style={{ width: '100%', display: 'block' }}
                      onClick={() => setLightboxSrc(flow.image)}
                      className={styles.clickableImage}
                    />
                  </div>
                )}
                <p style={{ fontSize: '0.75rem', color: 'var(--white-40)', marginTop: 'var(--space-sm)', textAlign: 'center', fontStyle: 'italic' }}>
                  {flow.caption || flow.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Wireframe vs Final Design */}
        <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-2xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--white)', marginBottom: 'var(--space-sm)' }}>
            Wireframe to Final Design
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--white-40)', marginBottom: 'var(--space-lg)' }}>
            Move your cursor across the image to compare the low-fidelity wireframe with the final UI.
          </p>

          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <div className={styles.sliderCardLabel}>Log Management</div>
              <div className={styles.featureCardImage}>
                <BeforeAfterSlider
                  beforeImage="/images/projects/Logs-Wireframe.png"
                  afterImage="/images/projects/Logs-Final.png"
                  containerStyle={{ marginBottom: 0 }}
                />
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.sliderCardLabel}>Dashboard</div>
              <div className={styles.featureCardImage}>
                <BeforeAfterSlider
                  beforeImage="/images/projects/Dashboard-Wireframe.png"
                  afterImage="/images/projects/Dashboard-Final.png"
                  naturalHeight
                  containerStyle={{ marginBottom: 0 }}
                />
              </div>
            </div>
          </div>
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
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Features</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Design Solutions in Detail</motion.h2>

        <div className={styles.featureCards}>
          {study.features.map((feat, i) => (
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
                  <span className={styles.featureDetailDot} style={{ background: 'var(--accent-red)' }} />
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
          ))}
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
          {study.testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialBlock}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <cite>
                {t.author}
                {t.company ? `, ${t.company}` : ''}
              </cite>
            </div>
          ))}
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
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Reflection</motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Key Learnings</motion.h2>

        <motion.div variants={fadeUp}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--accent-green)', marginBottom: 'var(--space-md)' }}>
            What Worked Well
          </h3>
          <div className={styles.learningGrid}>
            {study.learnings.worked.map((l, i) => (
              <div key={i} className={styles.learningCard}>
                <h4>{l.title}</h4>
                <p>{l.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--accent-yellow, var(--accent-red))', marginBottom: 'var(--space-md)' }}>
            Challenges Faced
          </h3>
          <div className={styles.learningGrid}>
            {study.learnings.challenges.map((l, i) => (
              <div key={i} className={styles.learningCard}>
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

      <hr className={styles.divider} />

      {/* ===== Ecosystem ===== */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.p className={styles.sectionLabel} variants={fadeUp}>Ecosystem</motion.p>
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
