import React from 'react';
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
    <>
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <EducationJourney />
      <DocumentGrid />
      <Footer />
    </>
  );
}

export default App;
