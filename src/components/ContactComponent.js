import React from 'react';
import './ContactComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ContactComponent() {
  const phoneNumber = '+36 70 329 6104';
  const emailAddress = 'huba.villany@gmail.com';

  return (
    <div className="contact-container">
      <h2>Lépjen velem kapcsolatba!</h2>
      <div className="contact-info">
        <div className="info-card">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <h3>Telefon</h3>
          <p>
            <a href={`tel:${phoneNumber}`} className="contact-link">{phoneNumber}</a>
          </p>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h3>E-mail</h3>
          <p>
            <a href={`mailto:${emailAddress}`} className="contact-link">{emailAddress}</a>
          </p>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <h3>Cím</h3>
          <p> Budapest, XII.</p>
        </div>
      </div>
      {/* Opcionális kapcsolatfelvételi űrlap */}
      {/* ... */}
      {/* Opcionális térkép beillesztése */}
      {/* ... */}
    </div>
  );
}

export default ContactComponent;