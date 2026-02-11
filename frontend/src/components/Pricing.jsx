import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import './Pricing.css';

const pricingPackages = [
  {
    id: 1,
    name: 'Standardtvätt',
    subtitle: 'Utvändig tvätt',
    price: '200',
    stars: 0,
    features: [
      'Professionell handtvätt utvändigt',
      'Rengöring av alla yttre ytor',
      'Snabb och effektiv service'
    ]
  },
  {
    id: 2,
    name: 'Motortvätt',
    subtitle: 'Motorrumstvätt',
    price: '400',
    stars: 0,
    features: [
      'Grundlig motorrumstvätt',
      'Avfettning och rengöring',
      'Förbättrad motorprestanda'
    ]
  },
  {
    id: 3,
    name: 'Vanlig Tvätt',
    subtitle: 'Dammsugning',
    price: '350',
    stars: 0,
    features: [
      'Dammsugning av hela interiören',
      'Grundlig rengöring',
      'Fräsch känsla'
    ]
  },
  {
    id: 4,
    name: 'Silvertvätt',
    subtitle: 'Grundpaket',
    price: '400',
    stars: 1,
    features: [
      'Dammsugning',
      'Fönsterputs framruta',
      'Mattvätt',
      'Däckglans'
    ],
    popular: false
  },
  {
    id: 5,
    name: 'Guldtvätt',
    subtitle: 'Populärt val',
    price: '700',
    stars: 2,
    features: [
      'Dammsugning',
      'Fönsterputs alla rutor',
      'Mattvätt',
      'Däckglans',
      'Asfalt-tvätt'
    ],
    popular: true
  },
  {
    id: 6,
    name: 'Diamanttvätt',
    subtitle: 'Premium',
    price: '1000',
    stars: 3,
    features: [
      'Dammsugning',
      'Fönsterputs alla rutor',
      'Mattvätt',
      'Däckglans',
      'Asfalt-tvätt',
      'Avtorkning vinyl på instrumentbräda och dörrar',
      'Våtvax'
    ],
    popular: false
  },
  {
    id: 7,
    name: 'Platinumtvätt',
    subtitle: 'Toppklass',
    price: '1700',
    stars: 4,
    features: [
      'Dammsugning',
      'Fönsterputs alla rutor',
      'Mattvätt',
      'Däckglans',
      'Asfalt-tvätt',
      'Avtorkning vinyl på instrumentbräda och dörrar',
      'Handvaxning',
      'Motortvätt',
      'Flygrost'
    ],
    popular: false
  },
  {
    id: 8,
    name: 'Helrekond',
    subtitle: 'Komplett transformation',
    price: '2400',
    stars: 4,
    features: [
      'Dammsugning',
      'Fönsterputs alla rutor',
      'Avtorkning vinyl på instrumentbräda och dörrar',
      'Däckglans',
      'Motortvätt',
      'Asfalt-tvätt',
      'Mattvätt',
      '1-stegspolering',
      'Handvaxning'
    ],
    popular: false
  }
];

const additionalServices = [
  'Rekond',
  'Lackkonservering',
  'Klädseltvätt',
  'Polering',
  'Vaxning',
  'Handtvätt',
  'Impregnering'
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2 className="heading-2">Priser & Paket</h2>
          <p className="body-medium pricing-subtitle">
            Vi erbjuder olika paket för alla behov och budgetar
          </p>
        </div>

        <div className="additional-services">
          <p className="caption">Även tillgängligt:</p>
          <div className="services-tags">
            {additionalServices.map((service, index) => (
              <span key={index} className="service-tag">{service}</span>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pricing-card ${pkg.popular ? 'pricing-card-popular' : ''}`}
            >
              {pkg.popular && (
                <div className="popular-badge">
                  <Sparkles size={16} />
                  <span>Populärt val</span>
                </div>
              )}
              
              <div className="pricing-card-header">
                <h3 className="heading-4">{pkg.name}</h3>
                {pkg.stars > 0 && (
                  <div className="pricing-stars">
                    {[...Array(pkg.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                )}
                <p className="caption">{pkg.subtitle}</p>
              </div>

              <div className="pricing-price">
                <span className="price-amount">Från {pkg.price}:-</span>
              </div>

              <ul className="pricing-features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="body-small">{feature}</li>
                ))}
              </ul>

              <a href="tel:0760377772" className="btn-primary pricing-btn">
                Boka Nu
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p className="body-small">
            * Alla priser avser bil av standardstorlek. Tillägg för hund- & katthår.
          </p>
          <p className="body-small">
            För frågor om <strong>bilservice</strong> eller <strong>däckbyte</strong>, 
            rekommenderar vi att du ringer oss direkt på <a href="tel:0760377772" className="inline-link">076-037 77 72</a> eller skickar ett SMS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
