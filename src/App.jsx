import React from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import NearestAgent from './components/NearestAgent';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <div className="app-root">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <NearestAgent />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
