import React from 'react';
import { Sparkles, Droplets, Shield, Brush, Wind, CircleDot, Package, Wrench } from 'lucide-react';
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
    image: 'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/v4dogbyy_image.png',
    icon: Shield
  },
  {
    id: 4,
    title: 'Lackpolering',
    description: 'Professionell lackkorrigering som tar bort repor, swirls och oxidation. Återställer lackens ursprungliga glans.',
    image: 'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/kxp7yikb_image.png',
    icon: Brush
  },
  {
    id: 5,
    title: 'AC Service & Påfyllning',
    description: 'Luftkonditioneringsservice och återfyllning av köldmedium. Vi säkerställer att din AC fungerar optimalt hela året.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600',
    icon: Wind
  },
  {
    id: 6,
    title: 'Däckbyte',
    description: 'Snabb och professionell däckbyte för alla fordonstyper. Vi hanterar både sommar- och vinterdäck med expertis.',
    image: 'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/rx6idg62_image.png',
    icon: CircleDot
  },
  {
    id: 7,
    title: 'Däckförvaring',
    description: 'Säker och torr förvaring av dina däck. Vi tar hand om dina säsongsdäck i vår klimatkontrollerade lokal.',
    image: 'https://customer-assets.emergentagent.com/job_detail-excellence-wa/artifacts/kzlmizhy_image.png',
    icon: Package
  },
  {
    id: 8,
    title: 'Bilservice',
    description: 'Komplett service och underhåll av ditt fordon. Oljebyte, filter, bromsar och allmän inspektion för optimal prestanda.',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600',
    icon: Wrench
  }
];

const Services = () => {
  const handleServiceClick = (serviceId) => {
    // Services 1-4 go to pricing, services 5-8 go to booking
    if (serviceId <= 4) {
      // Navigate to pricing section
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to booking info section
      const bookingSection = document.querySelector('.booking-info-section');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
              <div 
                key={service.id} 
                className="service-card service-card-clickable"
                onClick={() => handleServiceClick(service.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleServiceClick(service.id);
                  }
                }}
              >
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
