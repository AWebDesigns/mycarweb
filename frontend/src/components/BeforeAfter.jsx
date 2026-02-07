import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BeforeAfter.css';

const BeforeAfter = () => {
  // Placeholder data structure - user will add their own images
  const beforeAfterGallery = [
    {
      id: 1,
      before: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Före+Bild+1',
      after: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Efter+Bild+1',
      title: 'Interiör Detaljering',
      description: 'Djuprengöring och återställning'
    },
    {
      id: 2,
      before: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Före+Bild+2',
      after: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Efter+Bild+2',
      title: 'Exteriör Polering',
      description: 'Lackrestaurering och glans'
    },
    {
      id: 3,
      before: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Före+Bild+3',
      after: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Efter+Bild+3',
      title: 'Hela Bilen',
      description: 'Komplett transformation'
    },
    {
      id: 4,
      before: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Före+Bild+4',
      after: 'https://via.placeholder.com/600x400/302f2c/d9fb06?text=Efter+Bild+4',
      title: 'Keramisk Coating',
      description: 'Skydd och finish'
    }
  ];

  return (
    <section id="before-after" className="before-after-section">
      <div className="container">
        <div className="before-after-header">
          <h2 className="heading-2">Före & Efter</h2>
          <p className="body-medium before-after-subtitle">
            Se transformationen - vårt arbete talar för sig självt
          </p>
        </div>

        <div className="before-after-grid">
          {beforeAfterGallery.map((item) => (
            <div key={item.id} className="before-after-card">
              <div className="before-after-images">
                <div className="before-after-image-wrapper">
                  <img 
                    src={item.before} 
                    alt={`Före - ${item.title}`}
                    className="comparison-image"
                  />
                  <span className="image-label image-label-before">Före</span>
                </div>
                
                <div className="arrow-divider">
                  <ArrowRight size={32} strokeWidth={3} />
                </div>
                
                <div className="before-after-image-wrapper">
                  <img 
                    src={item.after} 
                    alt={`Efter - ${item.title}`}
                    className="comparison-image"
                  />
                  <span className="image-label image-label-after">Efter</span>
                </div>
              </div>
              
              <div className="before-after-content">
                <h3 className="heading-4">{item.title}</h3>
                <p className="body-small">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="before-after-cta">
          <p className="body-medium">Vill du se samma resultat på din bil?</p>
          <a href="tel:0760377772" className="btn-primary">Boka Nu</a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
