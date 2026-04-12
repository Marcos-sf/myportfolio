import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
      <EducationJourney />
      <DocumentGrid />
      <Footer />
    </>
  );
}

export default App;
