import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const filters = ['All', 'Full Stack', 'AI & ML', 'Case Study'];

const projects = [
  {
    title: 'Finance Dashboard',
    description: 'Production-grade backend API for finance data processing with role-based access control, JWT auth, and CSV import/export.',
    tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
    category: 'Full Stack',
    github: 'https://github.com/Marcos-sf/finance-dashboard',
    demo: 'https://finance-dashboard-phi-flame.vercel.app/login',
  },
  {
    title: 'Agri Rental',
    description: 'Full stack platform connecting farmers to rent agricultural equipment, with separate backend and frontend services.',
    tech: ['TypeScript', 'React', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/Marcos-sf/agri-rental',
    demo: 'https://agri-rental-pied.vercel.app/',
  },
  {
    title: 'Smart Property Management',
    description: 'PropTech app on the Frappe Framework automating lease agreements, tenant onboarding, monthly rent invoicing, and overdue tracking.',
    tech: ['Python', 'Frappe Framework', 'MariaDB'],
    category: 'Full Stack',
    github: 'https://github.com/Marcos-sf/frappe',
  },
  {
    title: 'Crop Price Prediction',
    description: 'Machine learning system forecasting crop prices using an ensemble of LSTM and XGBoost models, served through a FastAPI backend.',
    tech: ['Python', 'LSTM', 'XGBoost', 'FastAPI', 'React'],
    category: 'AI & ML',
    github: 'https://github.com/Marcos-sf/crop-price-prediction',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Dark-themed glassmorphic chat app with live messaging, typing indicators, online presence, and read receipts.',
    tech: ['React', 'Node.js', 'Socket.io', 'SQLite'],
    category: 'Full Stack',
    github: 'https://github.com/Marcos-sf/vedaz',
  },
  {
    title: 'Composio App Research Dashboard',
    description: 'AI-powered analysis of 100 SaaS applications across 10 categories, evaluating auth methods, API surface, and agent buildability.',
    tech: ['Python', 'AI Research', 'Data Viz'],
    category: 'AI & ML',
    github: 'https://github.com/Marcos-sf/composio',
    demo: 'https://composio-research.vercel.app',
  },
  {
    title: 'YouTube DPDP Case Study',
    description: 'A case study examining YouTube through the lens of India’s Digital Personal Data Protection Act, presented as an interactive deck.',
    tech: ['Case Study', 'Compliance', 'HTML/CSS'],
    category: 'Case Study',
    github: 'https://github.com/Marcos-sf/vedantu',
  },
  {
    title: 'Satyanarayana Leaf Cup',
    description: 'Customer storefront and admin prototype for an areca leaf plate and cup manufacturer, with automatic bulk pricing tiers, a pickup/delivery booking flow, and a mock operations dashboard.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
];

function statusFor(project) {
  if (project.demo) return { label: 'Shipped', live: true };
  if (project.github) return { label: 'Prototype', live: false };
  return { label: 'Internal', live: false };
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}
      >
        {projects.length} projects I've built, several improvised with Claude Code.
      </motion.p>

      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const status = statusFor(project);
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  borderTop: '2px solid var(--accent)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{project.title}</h3>
                  <span className={`status-chip ${status.live ? 'live' : ''}`}>
                    <span className="dot" /> {status.label}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="mono-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sm btn-sm-outline"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sm btn-sm-accent"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
