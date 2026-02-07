import React from 'react';
import { CheckCircle2, Award, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-2">Om WA.Bilvård</h2>
            <p className="body-medium about-description">
              Vi är specialister på professionell bilvård och detaljering i Löddeköpinge. 
              Med flera års erfarenhet och en passion för perfektion, tar vi hand om ditt 
              fordon som om det vore vårt eget.
            </p>
            <p className="body-small">
              Vårt team använder endast högkvalitativa produkter och moderna tekniker för att 
              säkerställa bästa möjliga resultat. Vi är stolta över vårt rykte för noggrannhet, 
              kundservice och de exceptionella resultat vi levererar - även på mycket smutsiga bilar.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 size={32} strokeWidth={2} />
                <div>
                  <h3 className="heading-4">Kundorienterad Service</h3>
                  <p className="body-small">Vi lyssnar på dina behov och levererar resultat som överträffar förväntningarna</p>
                </div>
              </div>

              <div className="about-feature">
                <Award size={32} strokeWidth={2} />
                <div>
                  <h3 className="heading-4">Expertis & Kvalitet</h3>
                  <p className="body-small">Kunniga, noggranna och snabba - med fokus på detaljer</p>
                </div>
              </div>

              <div className="about-feature">
                <Users size={32} strokeWidth={2} />
                <div>
                  <h3 className="heading-4">104 Nöjda Kunder</h3>
                  <p className="body-small">4.9⭐ betyg baserat på Google-recensioner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3 className="heading-3">4.9⭐</h3>
              <p className="body-small">Google Betyg</p>
            </div>
            <div className="stat-card">
              <h3 className="heading-3">104+</h3>
              <p className="body-small">Recensioner</p>
            </div>
            <div className="stat-card">
              <h3 className="heading-3">100%</h3>
              <p className="body-small">Kundnöjdhet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
