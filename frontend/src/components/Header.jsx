import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h1 className="logo">WA.BILVÅRD</h1>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Hem
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              Om Oss
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Tjänster
            </button>
            <button onClick={() => scrollToSection('faq')} className="nav-link">
              FAQ
            </button>
            <button onClick={() => scrollToSection('reviews')} className="nav-link">
              Omdömen
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Kontakt
            </button>
            <a href="tel:0760377772" className="nav-link nav-phone">
              <Phone size={18} />
              076-037 77 72
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
