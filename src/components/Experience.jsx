import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    period: "Aug 2026 — Present",
    role: "Software Developer Trainee",
    company: "WeZake",
    highlights: [
      "Developing backend features for a Learning Management System (LMS) using the Frappe Framework and Python.",
      "Building and maintaining Vue.js frontend components for the LMS platform.",
      "Collaborating within a cross-functional team to ship production-ready features end-to-end."
    ]
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
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '20px' }}>
                {item.highlights.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', listStyle: 'disc' }}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
