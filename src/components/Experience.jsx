import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    period: "Aug 2026 — Present",
    role: "Software Developer Trainee",
    company: "WeZake",
    summary: "Collaborating within a cross-functional team to ship production-ready features end-to-end, across two parallel products.",
    projects: [
      {
        name: "LMS Platform",
        description: "Developing backend features and maintaining the Vue.js frontend for a Learning Management System.",
        tech: ["Frappe Framework", "Vue.js", "Python"],
      },
      {
        name: "Worddoc",
        description: "A publishing and discovery platform for medical students to publish and find journals and thesis, with 7 tools integrated into the workflow — 5 of them AI-assisted.",
        tech: ["Next.js", "Node.js", "Express", "Supabase"],
      },
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Work Experience
      </motion.h2>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: '1.5rem', marginBottom: '2rem' }}
          >
            <span className="mono-tag" style={{ marginBottom: '0.9rem', display: 'inline-block' }}>
              {item.period}
            </span>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{item.role}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1rem', fontWeight: 500 }}>{item.company}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{item.summary}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {item.projects.map((project) => (
                  <div key={project.name} style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1.25rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{project.name}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{project.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tech.map((t) => (
                        <span key={t} className="mono-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
