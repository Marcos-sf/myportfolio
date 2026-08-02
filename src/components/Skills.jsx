import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiFramer,
  SiNodedotjs, SiExpress, SiFastapi, SiPython,
  SiPostgresql, SiMariadb, SiSqlite, SiPrisma,
  SiDocker, SiSocketdotio, SiGit,
} from 'react-icons/si';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'Framer Motion', icon: <SiFramer color="var(--text-primary)" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#5FA04E" /> },
      { name: 'Express', icon: <SiExpress color="var(--text-primary)" /> },
      { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" /> },
    ],
  },
  {
    category: 'Data & ML',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
      { name: 'MariaDB', icon: <SiMariadb color="#C0765A" /> },
      { name: 'SQLite', icon: <SiSqlite color="#003B57" /> },
      { name: 'Prisma', icon: <SiPrisma color="var(--text-primary)" /> },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
      { name: 'Socket.io', icon: <SiSocketdotio color="var(--text-primary)" /> },
      { name: 'Git', icon: <SiGit color="#F05032" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Skills & <span>Tools</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '-2rem', marginBottom: '3rem' }}
      >
        Technologies I reach for when building full stack applications.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="glass-card"
          >
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--accent-light)' }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {group.skills.map((skill) => (
                <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontSize: '1.3rem', display: 'flex' }}>{skill.icon}</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
