import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Documents', href: '#documents' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--nav-border)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>NKH.</a>
        
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{
              fontWeight: 500, fontSize: '0.95rem', alignSelf: 'center', transition: 'color 0.2s',
              color: activeSection === link.href.slice(1) ? 'var(--accent-blue)' : 'var(--text-primary)'
            }}>{link.name}</a>
          ))}
          <a href="#contact" style={{
            padding: '0.5rem 1.2rem',
            background: 'linear-gradient(135deg, var(--accent-light), var(--accent-blue))',
            color: '#000', fontWeight: 600, borderRadius: '20px', fontSize: '0.9rem'
          }}>Contact Me</a>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            style={{
              background: 'none', border: '1px solid var(--nav-border)', color: 'var(--text-primary)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', borderRadius: '50%', transition: 'border-color 0.2s',
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }} className="mobile-toggle">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* External CSS for exact mobile responsive handling */}
        <style>{`
          .desktop-links {
            display: flex !important; gap: 2rem; align-items: center;
          }
          .mobile-toggle { display: none !important; }
          .mobile-menu { display: none; }
          @media (max-width: 768px) {
            .desktop-links { display: none !important; }
            .mobile-toggle { display: flex !important; }
            .mobile-menu.open {
              display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%;
              background: var(--bg-secondary); padding: 1.5rem; gap: 1.5rem;
              border-bottom: 1px solid var(--nav-border);
            }
          }
        `}</style>

        {/* Mobile Nav */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
           {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: activeSection === link.href.slice(1) ? 'var(--accent-blue)' : 'var(--text-primary)' }}
            >{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--accent-blue)' }}>Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
