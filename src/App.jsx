import React, { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import InsuranceForm from './components/InsuranceForm';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  const [selectedServiceType, setSelectedServiceType] = useState('personal');

  const handleSelectService = (typeId) => {
    setSelectedServiceType(typeId);
  };

  return (
    <div className="app-root">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyUs />
        <InsuranceForm
          selectedTypeKey={selectedServiceType}
          onTypeChange={setSelectedServiceType}
        />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
