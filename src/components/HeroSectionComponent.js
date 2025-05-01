import React from 'react';
import './HeroSectionComponent.css';

function HeroSection() {
  return (
    <div className="hero-container hero-bg full-height">
      <div className="hero-text-overlay">
        <h1>Gyihor Huba villanyszerelő</h1>
        <p>Szakértő megoldások otthonába és vállalkozásába</p>
        <button onClick={() => {
          const offerSection = document.getElementById('offer');
          if (offerSection) {
            offerSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>Ajánlatot kérek</button>
      </div>
    </div>
  );
}

export default HeroSection;