import React from 'react';
import './FooterComponent.css'; // Külön CSS fájl a stílushoz

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Gyihor Gábor Huba | Minden jog fenntartva</p>

        {/* <ul className="footer-links">
          <li><a href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</a></li>
          <li><a href="/felhasznalasi-feltetelek">Felhasználási feltételek</a></li>
        </ul> */}
        {/* Opcionális közösségi média ikonok */}
        {/* <div className="social-icons">
          <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" /></a>
        </div> */}
      </div>
    </footer>
  );
}

export default FooterComponent;