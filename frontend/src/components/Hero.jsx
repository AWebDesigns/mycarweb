import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/9r4nwazs_img_5206.webp',
    'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/z0b2xvrq_AdobeStock_367018612-1024x683.jpg',
    'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/gb4ziv76_image.png',
    'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/fkoe9u5p_image.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'hero-slide-active' : ''}`}
            >
              <img 
                src={slide}
                alt={`Car service ${index + 1}`}
                className="hero-image"
              />
            </div>
          ))}
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
