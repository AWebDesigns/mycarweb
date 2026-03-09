import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">WA.BILVÅRD</h3>
            <p className="body-small footer-tagline">
              Premium bilvård och detaljering i Löddeköpinge
            </p>
            <div className="footer-rating">
              <span className="body-small">⭐⭐⭐⭐⭐</span>
              <span className="caption">4.9 från 104 recensioner</span>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Snabblänkar</h4>
              <ul className="footer-list">
                <li><a href="#home" className="footer-link">Hem</a></li>
                <li><a href="#about" className="footer-link">Om Oss</a></li>
                <li><a href="#services" className="footer-link">Tjänster</a></li>
                <li><a href="#reviews" className="footer-link">Omdömen</a></li>
                <li><a href="#contact" className="footer-link">Kontakt</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Tjänster</h4>
              <ul className="footer-list">
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Interiör Detaljering</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Exteriör Detaljering</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Keramisk Coating</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Lackpolering</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>AC Service & Påfyllning</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Däckbyte</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Hjulinställning</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Däckförvaring</a></li>
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }); }}>Bilservice</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Kontakt</h4>
              <ul className="footer-list">
                <li className="footer-contact-item">
                  <MapPin size={16} />
                  <span className="body-small">Backavägen 3, Löddeköpinge</span>
                </li>
                <li className="footer-contact-item">
                  <Phone size={16} />
                  <a href="tel:0760377772" className="footer-link">076-037 77 72</a>
                </li>
                <li className="footer-contact-item">
                  <Mail size={16} />
                  <a href="mailto:wa-bilrekond@hotmail.com" className="footer-link">wa-bilrekond@hotmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="caption">© {currentYear} WA.Bilvård. Alla rättigheter förbehållna.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1AL5beRmaq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/wa.bilrekond?igsh=MTh3YjU2aHFnaHF5ZA==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
