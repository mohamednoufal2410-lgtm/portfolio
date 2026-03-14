import { Link } from 'react-router-dom';
import { FlippingCard } from '../ui/FlippingCard';

function CardFront({ project }) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}08)`,
      }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%' }} />
      )}

      {/* Gradient overlay + heading at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '48px 24px 24px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.0625rem',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.4,
          }}
        >
          {project.heading}
        </h3>
      </div>
    </div>
  );
}

function CardBack({ project }) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px 28px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-secondary)',
        textAlign: 'center',
        gap: '20px',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--white)',
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: '0.9375rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.7,
          maxWidth: '380px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {project.description}
      </p>

      <Link
        to={project.link}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          background: 'var(--accent-green)',
          color: 'var(--bg-primary)',
          fontWeight: 600,
          fontSize: '0.875rem',
          borderRadius: 'var(--radius-full)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 255, 102, 0.25)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        View Case Study <span>→</span>
      </Link>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <FlippingCard
      frontContent={<CardFront project={project} />}
      backContent={<CardBack project={project} />}
    />
  );
}
