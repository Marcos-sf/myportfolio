import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    period: "2023 — 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "Bangalore Institute of Technology",
    highlights: [
      "Advanced Studies in Software Engineering and Architecture.",
      "Specialization in Full Stack Web Development.",
      "Built complex, data-driven applications."
    ]
  },
  {
    period: "2020 — 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "JSS SMI UG and PG Studies Dharwad",
    highlights: [
      "Strong foundation in Computer Science and Programming.",
      "Developed logical problem-solving and algorithmic skills.",
      "Extensive coursework in databases and web technologies."
    ]
  }
];

export default function EducationJourney() {
  return (
    <section id="education" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Education Journey
      </motion.h2>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {timelineData.map((item, index) => (
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
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{item.degree}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1rem', fontWeight: 500 }}>{item.institution}</p>
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
