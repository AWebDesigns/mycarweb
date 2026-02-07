import React from 'react';
import { Sparkles, Droplets, Shield, Brush } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Interiör Detaljering',
    description: 'Djuprengöring av hela interiören - säten, mattor, instrumentpanel och alla ytor. Vi tar bort damm, fläckar och lukt för en fräsch känsla.',
    image: 'https://images.unsplash.com/photo-1732357624591-f2137085659b',
    icon: Sparkles
  },
  {
    id: 2,
    title: 'Exteriör Detaljering',
    description: 'Professionell handtvätt, polering och vaxning. Vi återställer lacken och ger din bil en spegelblankt finish.',
    image: 'https://images.unsplash.com/photo-1764344814864-8851fa6d71f7',
    icon: Droplets
  },
  {
    id: 3,
    title: 'Keramisk Coating',
    description: 'Långvarigt skydd med keramisk beläggning. Ger exceptionell glans och skyddar mot väder, smuts och repor.',
    image: 'https://images.unsplash.com/photo-1656077884513-efd5e02193af',
    icon: Shield
  },
  {
    id: 4,
    title: 'Lackpolering',
    description: 'Professionell lackkorrigering som tar bort repor, swirls och oxidation. Återställer lackens ursprungliga glans.',
    image: 'https://images.unsplash.com/photo-1656077885491-3922185f3932',
    icon: Brush
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="heading-2">Våra Tjänster</h2>
          <p className="body-medium services-subtitle">
            Professionell bilvård anpassad efter dina behov
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-icon">
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="heading-4">{service.title}</h3>
                  <p className="body-small">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <p className="body-medium">Vill du veta mer om våra priser och paket?</p>
          <div className="services-cta-buttons">
            <a href="tel:0760377772" className="btn-primary">Kontakta Oss</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
