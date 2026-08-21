import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/mee.jpeg';

export default function Hero() {
  return (
    <header id="about" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '4rem', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px' }}
        >
          <p style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 500 }}>Hi, I'm</p>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem' }}>Nitin Keshava Hegde</h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 600 }}>Full Stack Developer</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
            I build modern, scalable web applications with a focus on seamless user experiences, premium design, and robust backend architectures.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#education" className="btn-outline">My Journey</a>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <img 
            src={profileImg} 
            alt="Nitin Keshava Hegde"
            style={{
               width: '100%', maxWidth: '280px', borderRadius: '50%', 
               boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
               border: '4px solid rgba(255,255,255,0.1)',
               objectFit: 'cover',
               aspectRatio: '1/1'
            }} 
          />
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, x: '-50%', y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.8, delay: 1 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.4rem',
        }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </header>
  );
}
