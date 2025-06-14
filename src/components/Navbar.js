// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const shouldBeVisible = currentScrollPos <= 0 || !isScrollingDown;

      setIsVisible(shouldBeVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`${isOpen ? 'open' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <img src={logo} alt="Fekete G és H logó" className="logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><button onClick={() => { scrollToSection('home'); setIsOpen(false); }}>Kezdőlap</button></li>
        <li><button onClick={() => { scrollToSection('about-me'); setIsOpen(false); }}>Rólam</button></li>
        <li><button onClick={() => { scrollToSection('services'); setIsOpen(false); }}>Szolgáltatások</button></li>
        <li><button onClick={() => { scrollToSection('offer'); setIsOpen(false); }}>Ajánlat kérés</button></li>
        <li><button onClick={() => { scrollToSection('contact'); setIsOpen(false); }}>Kapcsolat</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;