// src/components/AboutMe.js
import React from 'react';
import './AboutMeComponent.css'; // Importáljuk a stílusfájlt
import profilKep from '../images/profile.png'; // Helyezd ide a képedet!

const AboutMeComponent = () => {
  return (
    <section id="about-me" className="about-me-section">
      <h2>Rólam</h2>
      <div className="about-me-content">
        <div className="about-me-image-container">
          {/* Cseréld ki a 'profilKep' változót a saját képed importálására! */}
          {/* Győződj meg róla, hogy a 'src/assets/profile.jpg' elérési út helyes, vagy módosítsd! */}
          <img src={profilKep} alt="Rólam" className="about-me-image" />
        </div>
        <div className="about-me-text">
            <p> Gyihor Gábor Huba vagyok, villanyszerelő vállalkozó. 2019 óta dolgozom a szakmában. Pályafutásom során többféle területen dolgoztam, többek között foglalkoztam lakóépületek villamos kivitelezésével, napelemrendszerek telepítésével valamint transzformátor állomások építésével. 
            </p>
            <p>
                Szakmai végzettségemet a BKSZC Weiss Manfréd Technikum, Szakképző Iskola és Kollégium felnőttképzési programján szereztem meg. 
            </p>
            <p>
                Munkám során nagy hangsúlyt fektetek a minőségi anyagokra és a legmodernebb technológiákra, hogy tartós és energiatakarékos megoldásokat biztosítsak ügyfeleimnek. Lelkiismeretes és precíz szakembernek tartom magam,  aki mindig felelősségteljesen végzi el a munkáját. Fontos számomra, hogy amit elkezdek, azt be is fejezzem, és ne raboljam feleslegesen megrendelőim idejét. 
            </p>
            <p>Amennyiben meggyőzőnek találja szakmai hátteremet, kérem, keressen bizalommal személyes egyeztetés céljából, vagy kérjen online árajánlatot!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;