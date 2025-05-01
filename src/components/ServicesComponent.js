import React from 'react';
import './ServicesComponent.css';

function ServicesComponent() {
  const services = [
    {
      title: 'Alap villanyszerelési szolgáltatások',
      items: [
        'Elektromos hálózat kiépítése',
        'Régi alumínium vezetékek cseréje rézre',
        'Elektromos hálózat bővítése',
        'Biztosítéktábla cseréje, korszerűsítése',
      ],
    },
    {
      title: 'Szerelvényezési munkák',
      items: [
        'Új konnektor (dugalj) kiépítése',
        'Kapcsolók, dimmerek beépítése, cseréje',
        'Áramvédő kapcsoló (Fi-relé) beépítése',
      ],
    },
    {
      title: 'Világítástechnikai munkák',
      items: [
        'Lámpatestek felszerelése és bekötése',
        'LED világítás telepítése',
        'Kültéri világítás kiépítése',
        'Mozgásérzékelős világítás szerelése',
      ],
    },
    {
      title: 'Háztartási gépek bekötése',
      items: [
        'Villanytűzhely, főzőlap, sütő bekötése',
        'Mosogatógép, mosógép bekötése',
        'Bojler bekötése, elektromos vízmelegítő csatlakoztatása',
      ],
    },
    {
      title: 'Hibakeresés, javítás',
      items: [
        'Áramkimaradás, zárlat elhárítása',
        'Konnektorok, világítási körök hibáinak feltárása és javítása',
      ],
    },
    {
      title: 'Kiszállásos szolgáltatások',
      items: [
        'Helyszíni felmérés, tanácsadás',
        'Kisebb javítások kiszállással',
      ],
    },
  ];

  return (
    <div className="services-container">
      <h2>Szolgáltatások</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesComponent;