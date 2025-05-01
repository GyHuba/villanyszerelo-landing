import React from 'react';
import Navbar from './components/Navbar';
import HomeComponent from './components/HeroSectionComponent';
import ServicesComponent from './components/ServicesComponent';
import OfferComponent from './components/OfferComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import './App.css'; // Ha vannak globális stílusaid

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar scrollToSection={scrollToSection} /> {/* Átadjuk a scrollToSection függvényt propként */}
      <main>
        <section id="home">
          <HomeComponent />
        </section>
        <section id="services">
          <ServicesComponent />
        </section>
        <section id="offer">
          <OfferComponent />
        </section>
        <section id="contact">
          <ContactComponent />
        </section>
        <section id="footer">
          <FooterComponent />
        </section>
      </main>
    </div>
  );
}

export default App;