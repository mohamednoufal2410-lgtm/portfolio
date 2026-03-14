import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MegaMenu({ items }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [isHover, setIsHover] = React.useState(null);

  return (
    <ul style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 0 }}>
      {items.map((navItem) => (
        <li
          key={navItem.label}
          style={{ position: 'relative' }}
          onMouseEnter={() => setOpenMenu(navItem.label)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button
            onClick={() => {
              if (navItem.onClick) navItem.onClick();
            }}
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
            style={{
              position: 'relative',
              display: 'flex',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '6px 16px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: openMenu === navItem.label ? '#fff' : 'rgba(255,255,255,0.5)',
              transition: 'color 0.3s ease',
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span>{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                size={16}
                style={{
                  transition: 'transform 0.3s ease',
                  transform: openMenu === navItem.label ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="hover-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 99,
                }}
              />
            )}
          </button>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '100%',
                  width: 'auto',
                  paddingTop: '8px',
                  zIndex: 10,
                }}
              >
                <motion.div
                  layoutId="menu"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: 'max-content',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: '#0A0A0A',
                    padding: '20px',
                    borderRadius: 16,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '36px', flexShrink: 0 }}>
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout key={sub.title} style={{ width: '100%' }}>
                        <h3
                          style={{
                            marginBottom: '16px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--accent-green)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {sub.title}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <Link
                                  to={item.link || '/'}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    textDecoration: 'none',
                                  }}
                                  onMouseEnter={(e) => {
                                    const iconBox = e.currentTarget.querySelector('[data-icon-box]');
                                    if (iconBox) {
                                      iconBox.style.background = 'var(--accent-green)';
                                      iconBox.style.color = '#0A0A0A';
                                      iconBox.style.borderColor = 'var(--accent-green)';
                                    }
                                    const desc = e.currentTarget.querySelector('[data-desc]');
                                    if (desc) desc.style.color = 'rgba(255,255,255,0.7)';
                                  }}
                                  onMouseLeave={(e) => {
                                    const iconBox = e.currentTarget.querySelector('[data-icon-box]');
                                    if (iconBox) {
                                      iconBox.style.background = 'transparent';
                                      iconBox.style.color = '#fff';
                                      iconBox.style.borderColor = 'rgba(255,255,255,0.2)';
                                    }
                                    const desc = e.currentTarget.querySelector('[data-desc]');
                                    if (desc) desc.style.color = 'rgba(255,255,255,0.4)';
                                  }}
                                >
                                  <div
                                    data-icon-box=""
                                    style={{
                                      display: 'flex',
                                      width: 36,
                                      height: 36,
                                      flexShrink: 0,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      borderRadius: 8,
                                      border: '1px solid rgba(255,255,255,0.2)',
                                      color: '#fff',
                                      transition: 'all 0.3s ease',
                                    }}
                                  >
                                    <Icon size={18} />
                                  </div>
                                  <div style={{ lineHeight: 1.4 }}>
                                    <p
                                      style={{
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        color: '#fff',
                                        whiteSpace: 'nowrap',
                                      }}
                                    >
                                      {item.label}
                                    </p>
                                    <p
                                      data-desc=""
                                      style={{
                                        fontSize: '0.75rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        transition: 'color 0.3s ease',
                                        whiteSpace: 'nowrap',
                                      }}
                                    >
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
