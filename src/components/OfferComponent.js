import React, { useState } from 'react';
import './OfferComponent.css';
import emailjs from '@emailjs/browser';

function OfferComponent() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const serviceId = 'service_pud1xtp'; 
  const templateId = 'template_kvgnful'; 
  const publicKey = 'am6u9RjYApKSfLcTR'; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('loading');

    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('SUCCESS!', response.status, response.text);
      setSubmissionStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log('FAILED...', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="offer-container">
      <h2>Kérjen árajánlatot!</h2>
      {submissionStatus === 'success' && (
        <div className="success-message">
          Köszönjük a megkeresését! Hamarosan felvesszem Önnel a kapcsolatot.
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="error-message">
          Hiba történt az űrlap elküldésekor. Kérjük, próbálja újra később!
        </div>
      )}
      {submissionStatus !== 'success' && (
        <form onSubmit={handleSubmit} className="offer-form">
          <div className="form-group">
            <label htmlFor="name">Név:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefonszám:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail cím:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mire kéri az árajánlatot?</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={submissionStatus === 'loading'}>
            {submissionStatus === 'loading' ? 'Küldés...' : 'Árajánlatot kérek'}
          </button>
        </form>
      )}
    </div>
  );
}

export default OfferComponent;