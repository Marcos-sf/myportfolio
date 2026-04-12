import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Documents', href: '#documents' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>NH.</a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ 
              fontWeight: 500, fontSize: '0.95rem', alignSelf: 'center', transition: 'color 0.2s'
            }}>{link.name}</a>
          ))}
          <a href="#contact" style={{
            padding: '0.5rem 1.2rem',
            background: 'linear-gradient(135deg, var(--accent-light), var(--accent-blue))',
            color: '#000', fontWeight: 600, borderRadius: '20px', fontSize: '0.9rem'
          }}>Contact Me</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} className="mobile-toggle">
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* External CSS for exact mobile responsive handling */}
        <style>{`
          .desktop-links {
            display: flex !important; gap: 2rem; align-items: center;
          }
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none; }
          @media (max-width: 768px) {
            .desktop-links { display: none !important; }
            .mobile-toggle { display: block !important; }
            .mobile-menu.open {
              display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%;
              background: var(--bg-secondary); padding: 1.5rem; gap: 1.5rem;
              border-bottom: 1px solid rgba(255,255,255,0.05);
            }
          }
        `}</style>

        {/* Mobile Nav */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
           {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--accent-blue)' }}>Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
