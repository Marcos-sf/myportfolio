import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ScrollText, Award, X } from 'lucide-react';

const documents = [
  {
    title: "Resume",
    description: "Comprehensive overview of my skills, experience, and projects.",
    link: "assets/resume.pdf",
    icon: <FileText size={32} />
  },
  {
    title: "MCA Marks Card",
    description: "Post Graduation Transcripts and Grades.",
    link: "assets/mca_marks.pdf",
    icon: <ScrollText size={32} color="var(--accent-light)" />
  },
  {
    title: "BCA Marks Card",
    description: "Under Graduation Transcripts and Grades.",
    link: "assets/bca_marks.pdf",
    icon: <ScrollText size={32} color="var(--accent-light)" />
  },
  {
    title: "Certifications",
    description: "Industry-recognized professional certifications.",
    links: [
      { label: "Professional", url: "assets/certification_professional.pdf" },
      { label: "Standard", url: "assets/certification.pdf" }
    ],
    icon: <Award size={32} color="#ffb86c" />
  }
];

export default function DocumentGrid() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section id="documents" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Documents & <span>Certifications</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '-2rem', marginBottom: '4rem' }}
      >
        Verified academic credentials and professional achievements.
      </motion.p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem' }}
          >
            <div style={{
              width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)'
            }}>
              {doc.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{doc.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{doc.description}</p>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {doc.link && (
                <button 
                  onClick={() => setSelectedDoc(doc)}
                  style={{
                    display: 'inline-block', padding: '0.6rem 1.5rem',
                    border: '1px solid var(--accent-light)', color: 'var(--accent-light)',
                    borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s',
                    background: 'transparent', cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#000'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-light)'; }}
                >
                  View PDF
                </button>
              )}
              {doc.links && doc.links.map((linkItem, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedDoc({ title: `${doc.title} - ${linkItem.label}`, link: linkItem.url })}
                  style={{
                    display: 'inline-block', padding: '0.6rem 1.2rem',
                    border: '1px solid var(--accent-light)', color: 'var(--accent-light)',
                    borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s',
                    background: 'transparent', cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.color = '#000'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-light)'; }}
                >
                  {linkItem.label}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{
                width: '100%', maxWidth: '1000px', height: '100%', maxHeight: '800px',
                backgroundColor: 'var(--bg-secondary)', borderRadius: '16px',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: '#1E1E24' // Default header color, change if needed via css variables
              }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{selectedDoc.title}</h3>
                <button
                  onClick={() => setSelectedDoc(null)}
                  style={{
                    background: 'transparent', border: 'none', color: '#ccc',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '0.5rem', borderRadius: '50%', transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <X size={24} />
                </button>
              </div>
              <div style={{ flex: 1, backgroundColor: '#e2e8f0', display: 'flex' }}>
                <iframe
                  src={`${selectedDoc.link}#toolbar=0`}
                  title={selectedDoc.title}
                  style={{ width: '100%', height: '100%', border: 'none', flex: 1 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
