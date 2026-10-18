import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';

const EMAIL = 'nitinkh27@gmail.com';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer id="contact" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)', padding: '100px 20px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px' }}
        >
          Open to new projects, collaborations, or just a conversation about what you're building. Send a note and I'll get back to you by email.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              className="field-input"
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="field-input"
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              className="field-input"
              name="message"
              placeholder="What are you working on?"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              style={{ resize: 'vertical', fontFamily: 'var(--font-body)' }}
            />
            <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none' }}>
              <Send size={16} /> Send message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <span className="mono-tag" style={{ alignSelf: 'flex-start' }}>{EMAIL}</span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Prefer email directly, or want to see the code behind these projects? Reach me through any of these.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <a href={`mailto:${EMAIL}`} aria-label="Email" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Send size={22} />
              </a>
              <a href="https://www.linkedin.com/in/nitin-hegde-12b062322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/Marcos-sf" aria-label="GitHub" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Github size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4rem', opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Nitin Keshava Hegde.
        </p>
      </div>
    </footer>
  );
}
