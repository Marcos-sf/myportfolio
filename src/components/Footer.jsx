import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 20px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's <span>Connect</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto', background: 'radial-gradient(circle at center, rgba(25,25,25,0.8), rgba(20,20,20,0.4))' }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <a href="mailto:nitinkh27@gmail.com" className="btn-primary">Say Hello</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '4rem', marginBottom: '2rem' }}
        >
          <a href="https://www.linkedin.com/in/nitin-hegde-12b062322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Marcos-sf" aria-label="GitHub" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <Github size={24} />
          </a>
        </motion.div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Nitin Hegde.
        </p>
      </div>
    </footer>
  );
}
