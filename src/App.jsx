import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Campaigns from './components/Campaigns';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Campaigns />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;