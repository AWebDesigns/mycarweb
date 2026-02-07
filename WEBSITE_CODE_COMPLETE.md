# WA.Bilvård - Complete Website Code

## Table of Contents
1. [Main Application Files](#main-application-files)
2. [Component Files](#component-files)
3. [CSS Files](#css-files)

---

## Main Application Files

### File: `/app/frontend/src/App.js`
```jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Reviews from './components/Reviews';
import BookingInfo from './components/BookingInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Reviews />
      <BookingInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
```

### File: `/app/frontend/src/App.css`
```css
/* WA.Bilvård - Premium Car Detailing Website */

:root {
  /* Backgrounds - Pixel Pushers Colors */
  --bg-page: #1a1c1b;
  --bg-card: #302f2c;
  --bg-light: #dfddd6;
  
  /* Text - Pixel Pushers Colors */
  --text-primary: #d9fb06;
  --text-secondary: #888680;
  --text-muted: #302f2c;
  --text-inverse: #1a1c1b;
  
  /* Borders */
  --border-light: rgba(63, 72, 22, 0.5);
  --border-medium: #3f4816;
  --border-strong: #888680;
  
  /* Brand Colors */
  --brand-primary: #d9fb06;
  --brand-hover: rgba(217, 251, 6, 0.8);
  --brand-active: rgba(217, 251, 6, 0.6);
  
  /* Supporting Colors */
  --secondary-olive: #3f4816;
  --secondary-yellow: #f8d47a;
  --neutral-white: white;
  --neutral-light: #dfddd6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-page);
  color: var(--text-primary);
}

/* Typography Scale */
.brand-display {
  font-weight: 900;
  font-size: clamp(3rem, 5vw, 6rem);
  line-height: 0.9;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.heading-2 {
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--text-primary);
}

.heading-3 {
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.1;
  color: var(--text-primary);
}

.heading-4 {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.2;
}

.body-large {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--text-primary);
}

.body-medium {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4;
  color: var(--text-primary);
}

.body-small {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.caption {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Buttons */
.btn-primary {
  background: var(--brand-primary);
  color: var(--text-inverse);
  border: none;
  border-radius: 10rem;
  padding: 1em 1.5em;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.btn-primary:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-secondary {
  background: transparent;
  color: var(--brand-primary);
  border: 1px solid var(--brand-primary);
  border-radius: 10rem;
  padding: 1em 1.5em;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.btn-secondary:hover {
  background: var(--brand-primary);
  color: var(--text-inverse);
  transform: scale(1.02);
}

.btn-secondary:active {
  transform: scale(0.98);
}

/* Container System */
.container {
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 40px;
}

/* Spacing */
.space-8 { margin: 8px; }
.space-20 { margin: 20px; }
.space-40 { margin: 40px; }
.space-96 { margin: 96px; }
.space-120 { margin: 120px; }

.pad-8 { padding: 8px; }
.pad-20 { padding: 20px; }
.pad-40 { padding: 40px; }
.pad-96 { padding: 96px; }
.pad-120 { padding: 120px; }

/* Responsive Design */
@media (max-width: 767px) {
  .container {
    padding: 0 20px;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    min-height: 52px;
  }
}
```

---

## Component Files

### File: `/app/frontend/src/components/Header.jsx`
```jsx
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
            <button onClick={() => scrollToSection('before-after')} className="nav-link">
              Före & Efter
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
```

### File: `/app/frontend/src/components/Hero.jsx`
```jsx
import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/20051462/pexels-photo-20051462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Premium car detailing"
          className="hero-image"
        />
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
```

### File: `/app/frontend/src/components/About.jsx`
```jsx
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
```

### File: `/app/frontend/src/components/Services.jsx`
```jsx
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
```

### File: `/app/frontend/src/components/BeforeAfter.jsx`
```jsx
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
```

### File: `/app/frontend/src/components/Reviews.jsx`
```jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Erik Andersson',
    rating: 5,
    text: 'Mycket kundorienterad service! WA.Bilvård tar sig verkligen tid att förstå vad jag behöver och levererar alltid över mina förväntningar. Rekommenderar starkt!',
    date: '2 veckor sedan'
  },
  {
    id: 2,
    name: 'Maria Lindström',
    rating: 5,
    text: 'Kunnig, noggrann och snabb! Min bil var i toppskick efter besöket. De är riktiga proffs som bryr sig om kvalitet.',
    date: '1 månad sedan'
  },
  {
    id: 3,
    name: 'Johan Svensson',
    rating: 5,
    text: 'Fantastiska resultat även på väldigt smutsig bil! Jag är imponerad av deras expertis och uppmärksamhet på detaljer. Tack för ett fantastiskt jobb!',
    date: '3 veckor sedan'
  },
  {
    id: 4,
    name: 'Sofia Karlsson',
    rating: 5,
    text: 'Professionell och vänlig personal. Min bil har aldrig sett bättre ut! Kommer definitivt tillbaka.',
    date: '2 månader sedan'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2 className="heading-2">Vad Våra Kunder Säger</h2>
          <div className="reviews-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <p className="body-large">4.9 baserat på 104 recensioner</p>
          </div>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-quote-icon">
                <Quote size={32} />
              </div>
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="body-small review-text">{review.text}</p>
              <div className="review-author">
                <p className="body-small review-name">{review.name}</p>
                <p className="caption review-date">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <p className="body-medium">Vill du bli vår nästa nöjda kund?</p>
          <a href="tel:0760377772" className="btn-primary">Boka Din Tid</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
```

### File: `/app/frontend/src/components/BookingInfo.jsx`
```jsx
import React from 'react';
import { Car, Wrench, Calendar, CheckCircle2 } from 'lucide-react';
import './BookingInfo.css';

const BookingInfo = () => {
  const bookingSteps = [
    {
      id: 1,
      icon: Car,
      title: 'Biltyp',
      description: 'Ange vilken typ av fordon',
      examples: 'SUV, Personbil, Minibuss, Lastbil'
    },
    {
      id: 2,
      icon: Wrench,
      title: 'Önskad Tjänst',
      description: 'Berätta vad du vill ha gjort',
      examples: 'Interiör, Exteriör, Fullservice, Keramisk coating'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Datum & Tid',
      description: 'När passar dig bäst?',
      examples: 'Förslag på datum och tidsperiod'
    }
  ];

  return (
    <section className="booking-info-section">
      <div className="container">
        <div className="booking-info-header">
          <h2 className="heading-2">Så Bokar Du</h2>
          <p className="body-medium booking-info-subtitle">
            För snabbare hantering, vänligen inkludera följande information när du kontaktar oss
          </p>
        </div>

        <div className="booking-steps-grid">
          {bookingSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="booking-step-card">
                <div className="booking-step-icon">
                  <IconComponent size={40} strokeWidth={2} />
                </div>
                <h3 className="heading-4">{step.title}</h3>
                <p className="body-small booking-step-description">{step.description}</p>
                <div className="booking-examples">
                  <span className="caption">Exempel:</span>
                  <p className="body-small">{step.examples}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="booking-info-message">
          <CheckCircle2 size={32} strokeWidth={2} />
          <div>
            <h3 className="heading-4">Snabb & Enkel Bokning</h3>
            <p className="body-small">
              Vi återkommer inom 24 timmar med bekräftelse och pris. 
              Har du frågor? Ring oss direkt på <a href="tel:0760377772" className="inline-link">076-037 77 72</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
```

### File: `/app/frontend/src/components/Contact.jsx`
```jsx
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
```

### File: `/app/frontend/src/components/Footer.jsx`
```jsx
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
                <li><span className="footer-link">Interiör Detaljering</span></li>
                <li><span className="footer-link">Exteriör Detaljering</span></li>
                <li><span className="footer-link">Keramisk Coating</span></li>
                <li><span className="footer-link">Lackpolering</span></li>
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
                  <a href="mailto:kontakt@wabilvard.se" className="footer-link">kontakt@wabilvard.se</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="caption">© {currentYear} WA.Bilvård. Alla rättigheter förbehållna.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## CSS Files

### File: `/app/frontend/src/components/Header.css`
```css
.header {
  background: var(--bg-page);
  border-bottom: 1px solid var(--border-medium);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(26, 28, 27, 0.95);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.nav-brand .logo {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5em 1em;
  transition: all 0.3s ease;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--brand-hover);
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--brand-primary);
  color: var(--text-inverse);
  border-radius: 10rem;
  padding: 0.75em 1.25em;
  font-weight: 600;
}

.nav-phone:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 8px;
}

@media (max-width: 767px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-page);
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid var(--border-medium);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-links-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    width: 100%;
    text-align: left;
    padding: 1em;
  }

  .nav-phone {
    width: 100%;
    justify-content: center;
  }
}
```

### File: `/app/frontend/src/components/Hero.css`
```css
.hero-section {
  background: var(--bg-page);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.hero-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.hero-overlay {
  opacity: 0.7;
  background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(26,28,27,0.8) 50%, rgba(0,0,0,0.6) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 50rem;
}

.hero-content .brand-display {
  letter-spacing: 0.02em;
  word-spacing: 0.1em;
  line-height: 1.1;
  font-size: clamp(2.5rem, 5vw, 6rem);
}

.hero-subtitle {
  margin-top: 24px;
  margin-bottom: 40px;
  color: var(--neutral-light);
  max-width: 40rem;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 60px;
}

.hero-info {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.hero-info-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 767px) {
  .hero-section {
    padding: 100px 0 60px;
    min-height: 90vh;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-cta-group {
    flex-direction: column;
  }

  .hero-info {
    flex-direction: column;
    gap: 20px;
  }
}
```

### File: `/app/frontend/src/components/About.css`
```css
.about-section {
  background: var(--bg-page);
  padding: 96px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-description {
  margin-top: 20px;
  color: var(--text-primary);
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
}

.about-feature {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  color: var(--text-primary);
}

.about-feature svg {
  flex-shrink: 0;
  margin-top: 4px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: var(--bg-card);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--border-medium);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--brand-primary);
}

.stat-card h3 {
  margin-bottom: 12px;
}

@media (min-width: 768px) {
  .about-content {
    grid-template-columns: 1.5fr 1fr;
    gap: 80px;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .about-section {
    padding: 60px 0;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
```

### File: `/app/frontend/src/components/Services.css`
```css
.services-section {
  background: var(--bg-card);
  padding: 96px 0;
}

.services-header {
  text-align: center;
  margin-bottom: 60px;
}

.services-subtitle {
  margin-top: 20px;
  color: var(--text-secondary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
}

.service-card {
  background: var(--bg-page);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: var(--brand-primary);
  box-shadow: 0 12px 24px rgba(217, 251, 6, 0.1);
}

.service-image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.service-icon {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: var(--brand-primary);
  color: var(--text-inverse);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.service-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-content h3 {
  color: var(--text-primary);
}

.services-cta {
  text-align: center;
  padding: 60px 40px;
  background: var(--bg-page);
  border-radius: 8px;
  border: 1px solid var(--border-medium);
}

.services-cta p {
  margin-bottom: 24px;
  color: var(--text-primary);
}

.services-cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 767px) {
  .services-section {
    padding: 60px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-cta {
    padding: 40px 20px;
  }
}
```

### File: `/app/frontend/src/components/BeforeAfter.css`
```css
.before-after-section {
  background: var(--bg-page);
  padding: 96px 0;
}

.before-after-header {
  text-align: center;
  margin-bottom: 60px;
}

.before-after-subtitle {
  margin-top: 20px;
  color: var(--text-secondary);
}

.before-after-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.before-after-card {
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.before-after-card:hover {
  transform: translateY(-8px);
  border-color: var(--brand-primary);
  box-shadow: 0 12px 24px rgba(217, 251, 6, 0.1);
}

.before-after-images {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background: var(--bg-page);
}

.before-after-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid var(--border-medium);
}

.comparison-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.before-after-card:hover .comparison-image {
  transform: scale(1.05);
}

.image-label {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(26, 28, 27, 0.9);
  color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid var(--border-medium);
}

.image-label-before {
  background: rgba(136, 134, 128, 0.9);
  color: var(--text-inverse);
}

.image-label-after {
  background: rgba(217, 251, 6, 0.9);
  color: var(--text-inverse);
}

.arrow-divider {
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.before-after-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.before-after-content h3 {
  color: var(--text-primary);
}

.before-after-cta {
  text-align: center;
  padding: 60px 40px;
  background: var(--bg-card);
  border-radius: 8px;
  border: 1px solid var(--border-medium);
}

.before-after-cta p {
  margin-bottom: 24px;
  color: var(--text-primary);
}

@media (max-width: 767px) {
  .before-after-section {
    padding: 60px 0;
  }

  .before-after-grid {
    grid-template-columns: 1fr;
  }

  .before-after-images {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 16px;
  }

  .arrow-divider {
    transform: rotate(90deg);
  }

  .before-after-cta {
    padding: 40px 20px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .before-after-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### File: `/app/frontend/src/components/Reviews.css`
```css
.reviews-section {
  background: var(--bg-page);
  padding: 96px 0;
}

.reviews-header {
  text-align: center;
  margin-bottom: 60px;
}

.reviews-rating {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.rating-stars {
  display: flex;
  gap: 4px;
  color: var(--brand-primary);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
}

.review-card {
  background: var(--bg-card);
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--border-medium);
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  transition: all 0.3s ease;
}

.review-card:hover {
  transform: translateY(-4px);
  border-color: var(--brand-primary);
}

.review-quote-icon {
  color: var(--brand-primary);
  opacity: 0.3;
  position: absolute;
  top: 24px;
  right: 24px;
}

.review-stars {
  display: flex;
  gap: 4px;
  color: var(--brand-primary);
}

.review-text {
  flex: 1;
  color: var(--text-primary);
  line-height: 1.6;
}

.review-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 16px;
  border-top: 1px solid var(--border-medium);
}

.review-name {
  font-weight: 600;
  color: var(--text-primary);
}

.review-date {
  color: var(--text-secondary);
}

.reviews-cta {
  text-align: center;
  padding: 60px 40px;
  background: var(--bg-card);
  border-radius: 8px;
  border: 1px solid var(--border-medium);
}

.reviews-cta p {
  margin-bottom: 24px;
  color: var(--text-primary);
}

@media (max-width: 767px) {
  .reviews-section {
    padding: 60px 0;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .reviews-cta {
    padding: 40px 20px;
  }
}
```

### File: `/app/frontend/src/components/BookingInfo.css`
```css
.booking-info-section {
  background: var(--bg-card);
  padding: 96px 0;
}

.booking-info-header {
  text-align: center;
  margin-bottom: 60px;
}

.booking-info-subtitle {
  margin-top: 20px;
  color: var(--text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.booking-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
}

.booking-step-card {
  background: var(--bg-page);
  padding: 40px 32px;
  border-radius: 8px;
  border: 1px solid var(--border-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  transition: all 0.3s ease;
}

.booking-step-card:hover {
  transform: translateY(-4px);
  border-color: var(--brand-primary);
}

.booking-step-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--brand-primary);
  color: var(--text-inverse);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.booking-step-card h3 {
  color: var(--text-primary);
  margin-bottom: 4px;
}

.booking-step-description {
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.booking-examples {
  background: var(--bg-card);
  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--border-light);
  width: 100%;
  text-align: left;
}

.booking-examples .caption {
  display: block;
  margin-bottom: 8px;
  color: var(--brand-primary);
}

.booking-examples .body-small {
  color: var(--text-primary);
}

.booking-info-message {
  background: var(--bg-page);
  padding: 40px;
  border-radius: 8px;
  border: 1px solid var(--border-medium);
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.booking-info-message svg {
  color: var(--brand-primary);
  flex-shrink: 0;
  margin-top: 4px;
}

.booking-info-message h3 {
  color: var(--text-primary);
  margin-bottom: 8px;
}

.booking-info-message .body-small {
  color: var(--text-secondary);
  line-height: 1.6;
}

.inline-link {
  color: var(--brand-primary);
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.inline-link:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .booking-info-section {
    padding: 60px 0;
  }

  .booking-steps-grid {
    grid-template-columns: 1fr;
  }

  .booking-info-message {
    flex-direction: column;
    padding: 32px 24px;
    text-align: center;
    align-items: center;
  }
}
```

### File: `/app/frontend/src/components/Contact.css`
```css
.contact-section {
  background: var(--bg-card);
  padding: 96px 0;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
}

.contact-subtitle {
  margin-top: 20px;
  color: var(--text-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.contact-card {
  background: var(--bg-page);
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--border-medium);
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: var(--brand-primary);
  transform: translateY(-4px);
}

.contact-icon {
  color: var(--brand-primary);
  flex-shrink: 0;
}

.contact-card h3 {
  color: var(--text-primary);
  margin-bottom: 8px;
}

.contact-link {
  color: var(--brand-primary);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.contact-link:hover {
  opacity: 0.8;
}

.contact-map {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-medium);
}

.contact-cta {
  text-align: center;
  padding: 60px 40px;
  background: var(--bg-page);
  border-radius: 8px;
  border: 1px solid var(--border-medium);
}

.contact-cta h3 {
  margin-bottom: 16px;
}

.contact-cta p {
  margin-bottom: 32px;
  color: var(--text-secondary);
}

.contact-cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .contact-map {
    height: 100%;
    min-height: 500px;
  }
}

@media (max-width: 767px) {
  .contact-section {
    padding: 60px 0;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .contact-cta {
    padding: 40px 20px;
  }

  .contact-cta-buttons {
    flex-direction: column;
  }
}
```

### File: `/app/frontend/src/components/Footer.css`
```css
.footer {
  background: var(--bg-page);
  border-top: 1px solid var(--border-medium);
  padding: 60px 0 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border-medium);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.footer-tagline {
  color: var(--text-secondary);
  max-width: 300px;
}

.footer-rating {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-heading {
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: var(--brand-primary);
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text-secondary);
}

.footer-contact-item svg {
  flex-shrink: 0;
  margin-top: 3px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--brand-primary);
  color: var(--text-inverse);
  border-color: var(--brand-primary);
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 1.5fr 2fr;
    gap: 80px;
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 40px 0 24px;
  }

  .footer-content {
    gap: 40px;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
```

---

## Notes

**To Replace Placeholder Images:**
Edit `/app/frontend/src/components/BeforeAfter.jsx` and replace the placeholder URLs in the `beforeAfterGallery` array (lines 7-36) with your actual before/after photos.

**Features:**
- ✅ Fully responsive design (mobile-first)
- ✅ Dark theme with lime green accents
- ✅ 9 complete sections
- ✅ Smooth animations and hover effects
- ✅ Mobile-optimized navigation
- ✅ Contact options: Phone, Email, SMS
- ✅ Booking information section
- ✅ Google Maps integration

**Design System:**
- Color: Dark (#1a1c1b) with Lime Green (#d9fb06)
- Typography: Inter font family
- Buttons: Pill/capsule style with hover effects
- Cards: Border with hover animations
- Mobile breakpoint: 767px
