import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationJourney from './components/EducationJourney';
import DocumentGrid from './components/DocumentGrid';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <EducationJourney />
      <DocumentGrid />
      <Footer />
    </MotionConfig>
  );
}

export default App;
