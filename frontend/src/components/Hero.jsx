import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-image-left">
          <img 
            src="https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/l3v1h5t8_image.png"
            alt="Car service"
            className="hero-image"
          />
        </div>
        <div className="hero-image-right">
          <img 
            src="https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/mijk1wi2_image.png"
            alt="Car washing"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="brand-display">
            Premium Bilvård i Löddeköpinge
          </h1>
          <p className="body-large hero-subtitle">
            Professionell detaljering och bilvård med 4.9⭐ betyg från 104 nöjda kunder
          </p>
          
          <div className="hero-cta-group">
            <a href="tel:0760377772" className="btn-primary">
              <Phone size={20} />
              Ring Nu
            </a>
            <a href="mailto:kontakt@wabilvard.se" className="btn-secondary">
              <Mail size={20} />
              Mejla Oss
            </a>
            <a href="sms:0760377772" className="btn-secondary">
              <MessageSquare size={20} />
              SMS
            </a>
          </div>

          <div className="hero-info">
            <div className="hero-info-item">
              <span className="caption">Plats</span>
              <p className="body-small">Backavägen 3, Löddeköpinge</p>
            </div>
            <div className="hero-info-item">
              <span className="caption">Öppettider</span>
              <p className="body-small">Mån-Fre: 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
