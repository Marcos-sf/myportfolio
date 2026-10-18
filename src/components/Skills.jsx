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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Skills & Tools
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}
      >
        Technologies I reach for when building full stack applications.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
            className="glass-card"
          >
            <h3 style={{ fontSize: '1rem', marginBottom: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {group.skills.map((skill) => (
                <span key={skill.name} className="mono-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  <span style={{ fontSize: '1rem', display: 'flex' }}>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
