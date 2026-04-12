import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header id="about" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 20px', maxWidth: '1200px', margin: '0 auto'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px', marginTop: '50px' }}
      >
        <p style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 500 }}>Hi, I'm</p>
        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem' }}>Nitin Hegde</h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 600 }}>Full Stack Developer</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
          I build modern, scalable web applications with a focus on seamless user experiences, premium design, and robust backend architectures.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#documents" style={{
            display: 'inline-block', padding: '0.8rem 2rem', background: 'linear-gradient(135deg, var(--accent-light), var(--accent-blue))',
            color: '#000', fontWeight: 600, fontFamily: 'var(--font-heading)', borderRadius: '30px'
          }}>View My Work</a>
          <a href="#education" style={{
             display: 'inline-block', padding: '0.8rem 2rem', background: 'transparent', border: '1px solid var(--text-secondary)',
             color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-heading)', borderRadius: '30px'
          }}>My Journey</a>
        </div>
      </motion.div>
    </header>
  );
}
