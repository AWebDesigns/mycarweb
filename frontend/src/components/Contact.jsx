import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="heading-2">Kontakta Oss</h2>
          <p className="body-medium contact-subtitle">
            Redo att ge din bil den vård den förtjänar? Hör av dig idag!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="heading-4">Adress</h3>
                <p className="body-small">Backavägen 3<br />246 31 Löddeköpinge<br />Sweden</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="heading-4">Telefon</h3>
                <a href="tel:0760377772" className="body-small contact-link">
                  076-037 77 72
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="heading-4">E-post</h3>
                <a href="mailto:kontakt@wabilvard.se" className="body-small contact-link">
                  kontakt@wabilvard.se
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="heading-4">Öppettider</h3>
                <p className="body-small">
                  Måndag - Fredag: 09:00 - 18:00<br />
                  Lördag: 10:00 - 15:00<br />
                  Söndag: Stängt
                </p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.5!2d13.017!3d55.767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ2JzAxLjIiTiAxM8KwMDEnMDEuMiJF!5e0!3m2!1sen!2sse!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WA.Bilvård Location"
            ></iframe>
          </div>
        </div>

        <div className="contact-cta">
          <h3 className="heading-3">Boka Din Tid Nu</h3>
          <p className="body-medium">Välj hur du vill kontakta oss</p>
          <div className="contact-cta-buttons">
            <a href="tel:0760377772" className="btn-primary">
              <Phone size={20} />
              Ring Nu
            </a>
            <a href="mailto:kontakt@wabilvard.se" className="btn-secondary">
              <Mail size={20} />
              Skicka Mejl
            </a>
            <a href="sms:0760377772" className="btn-secondary">
              <MessageSquare size={20} />
              SMS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
