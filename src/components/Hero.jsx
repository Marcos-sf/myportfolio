import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/mee.jpeg';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <header id="about" style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden'
    }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '4rem', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
      >
        <div style={{ flex: '1 1 500px' }}>
          <motion.span variants={item} className="status-chip live" style={{ marginBottom: '1.5rem' }}>
            <span className="dot" /> open to full-stack opportunities
          </motion.span>

          <motion.h1 variants={item} style={{ fontSize: 'clamp(2.75rem, 6.5vw, 4.5rem)', fontWeight: 600, lineHeight: 1.1, marginTop: '1.25rem', marginBottom: '0.75rem' }}>
            Nitin Keshava Hegde
          </motion.h1>
          <motion.h2 variants={item} style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Full Stack Developer
          </motion.h2>
          <motion.p variants={item} style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
            I build modern, scalable web applications with a focus on seamless user experiences, premium design, and robust backend architectures.
          </motion.p>
          <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#education" className="btn-outline">My Journey</a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              padding: '0.6rem', border: '1px solid var(--card-border)', borderRadius: '12px',
              background: 'var(--surface)',
            }}>
              <img
                src={profileImg}
                alt="Nitin Keshava Hegde"
                style={{
                  width: '240px', maxWidth: '60vw', borderRadius: '8px',
                  objectFit: 'cover',
                  aspectRatio: '1/1'
                }}
              />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.9rem', letterSpacing: '0.03em' }}>
              NITIN KESHAVA HEGDE
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
        style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.4rem',
        }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </header>
  );
}
