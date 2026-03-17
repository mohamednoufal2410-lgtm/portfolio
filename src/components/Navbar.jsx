import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Glasses,
  Tablet,
  Cpu,
  GraduationCap,
  ShoppingCart,
  LayoutDashboard,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personal } from '../data/content';
import MegaMenu from './ui/MegaMenu';
import styles from '../styles/components/Navbar.module.css';

const sectionItems = ['Experience', 'Testimonials', 'Contact'];

const projectSubMenus = [
  {
    title: 'CLONOS',
    items: [
      { label: 'CLONOS Desktop', description: 'Intelligent asset management', icon: Monitor, link: '/projects/clonos' },
      { label: 'CLONOS Tablet', description: 'Touch-first data collection', icon: Tablet, link: '/projects/clonos-tablet' },
      { label: 'CLONOS Digital Twin', description: 'Virtual simulation & 3D viz', icon: Cpu, link: '/projects/clonos-digital-twin' },
      { label: 'VR Training Simulator', description: 'Immersive safety training', icon: Glasses, link: '/projects/vr-training-simulator' },
    ],
  },
  {
    title: 'Other Projects',
    items: [
      { label: 'Taqumart', description: 'Intuitive shopping flow', icon: ShoppingCart, link: '/projects/taqumart' },
      { label: 'PARIKक्षा Guru Student', description: 'Exam prep onboarding', icon: GraduationCap, link: '/projects/pariksha-guru-student' },
      { label: 'PARIKक्षा Guru Admin', description: 'Admin platform for educators', icon: LayoutDashboard, link: '/projects/pariksha-guru-admin' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for home page to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const megaMenuItems = [
    { id: 1, label: 'Projects', subMenus: projectSubMenus },
    { id: 2, label: 'Experience', onClick: () => scrollToSection('experience') },
    { id: 3, label: 'Testimonials', onClick: () => scrollToSection('testimonials') },
    { id: 4, label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            {personal.name.split(' ')[0]}
            <span>.</span>
          </Link>

          <div className={styles.navLinks}>
            <MegaMenu items={megaMenuItems} />
          </div>

          <div className={styles.navActions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={personal.resumeUrl}
              className={styles.resumeBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="/projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              Projects
            </motion.a>
            {sectionItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 1) * 0.08 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick(item.toLowerCase());
                }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href={personal.resumeUrl}
              className={styles.resumeBtnMobile}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
