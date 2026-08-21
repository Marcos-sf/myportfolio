import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    period: "Aug 2026 - Present",
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Work <span>Experience</span>
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px' }}>
        <div style={{ position: 'absolute', width: '2px', background: 'rgba(255,255,255,0.1)', top: 0, bottom: 0, left: '20px' }}></div>

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ position: 'relative', paddingLeft: '40px', marginBottom: '3rem' }}
          >
            <div style={{
              position: 'absolute', width: '16px', height: '16px', borderRadius: '50%',
              background: 'var(--accent-blue)', left: '-7px', top: '30px', boxShadow: '0 0 10px var(--accent-blue)'
            }}></div>

            <div className="glass-card">
              <span style={{ display: 'inline-block', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                {item.period}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.role}</h3>
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
