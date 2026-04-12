import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    period: "2023 - 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "Bangalore Institute of Technology",
    highlights: [
      "Advanced Studies in Software Engineering and Architecture.",
      "Specialization in Full Stack Web Development.",
      "Built complex, data-driven applications."
    ]
  },
  {
    period: "2020 - 2023",
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Education <span>Journey</span>
      </motion.h2>
      
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', width: '2px', background: 'rgba(255,255,255,0.1)', top: 0, bottom: 0, left: '20px' }}></div>
        
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ position: 'relative', paddingLeft: '40px', marginBottom: '3rem' }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute', width: '16px', height: '16px', borderRadius: '50%',
              background: 'var(--accent-blue)', left: '-7px', top: '30px', boxShadow: '0 0 10px var(--accent-blue)'
            }}></div>
            
            <div className="glass-card">
              <span style={{ display: 'inline-block', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                {item.period}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.degree}</h3>
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
