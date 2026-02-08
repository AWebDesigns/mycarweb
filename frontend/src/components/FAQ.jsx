import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'Hur lång tid tar en fullständig bildetaljering?',
    answer: 'En fullständig detaljering tar vanligtvis 4-6 timmar beroende på bilens storlek och skick. Interiör detaljering tar cirka 2-3 timmar, medan exteriör detaljering med polering tar 3-4 timmar.'
  },
  {
    id: 2,
    question: 'Hur ofta bör jag byta däck mellan sommar och vinter?',
    answer: 'Vi rekommenderar att byta till vinterdäck när temperaturen konstant är under 7°C, vanligtvis i oktober-november. Byt tillbaka till sommardäck i mars-april när vintern är över och vägarna är fria från is och snö.'
  },
  {
    id: 3,
    question: 'Vad ingår i en keramisk coating behandling?',
    answer: 'Keramisk coating inkluderar grundlig tvätt, lackpolering för att ta bort defekter, avfettning av ytan, och applicering av den keramiska beläggningen i flera lager. Behandlingen ger 2-5 års skydd beroende på produkt och underhåll.'
  },
  {
    id: 4,
    question: 'Hur fungerar er däckförvaring?',
    answer: 'Vi förvarar dina däck i vår klimatkontrollerade lokal där de skyddas från solljus, fukt och temperaturvariationer. Däcken märks med ditt namn och förvaras liggande eller hängande för att bibehålla sin form. Vi hanterar också tvätt av däcken före förvaring.'
  },
  {
    id: 5,
    question: 'Hur ofta behöver min bil service?',
    answer: 'Generellt rekommenderas service var 12:e månad eller var 15 000 km, beroende på vad som kommer först. Moderna bilar har ofta serviceindikatorer som visar när service behövs. Kontakta oss för en skräddarsydd serviceplan för din bil.'
  },
  {
    id: 6,
    question: 'Kan ni fixa repor i lacken?',
    answer: 'Ja, vi kan ta bort eller minimera de flesta repor genom lackpolering. Djupa repor som gått genom lacken kan kräva lackreparation. Vi gör en kostnadsfri bedömning och rekommenderar bästa lösningen för just dina repor.'
  },
  {
    id: 7,
    question: 'Vad kostar AC service och hur ofta behövs det?',
    answer: 'AC service kostar från 800-1500 kr beroende på bil och behov. Vi rekommenderar service vart 2:a år för att säkerställa optimal funktion. Service inkluderar kontroll av köldmedium, tryck, läckage och rengöring av systemet.'
  },
  {
    id: 8,
    question: 'Behöver jag boka tid i förväg?',
    answer: 'Ja, vi rekommenderar att du bokar tid för att garantera att vi kan ta emot din bil när det passar dig bäst. Ring oss på 076-037 77 72, skicka ett mejl eller SMS så hjälper vi dig att hitta en lämplig tid.'
  },
  {
    id: 9,
    question: 'Vilka betalsätt accepterar ni?',
    answer: 'Vi accepterar kontanter, Swish, kortbetalning och faktura för företagskunder. Betalning sker efter utfört arbete och du får alltid en specificerad kvittens på utförda tjänster.'
  },
  {
    id: 10,
    question: 'Ger ni garanti på ert arbete?',
    answer: 'Ja, vi står bakom vårt arbete med kvalitetsgaranti. Om du inte är nöjd med resultatet åtgärdar vi det utan extra kostnad. För keramisk coating och vissa behandlingar gäller specifika garantivillkor som vi går igenom vid bokning.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="heading-2">Vanliga Frågor</h2>
          <p className="body-medium faq-subtitle">
            Här hittar du svar på de vanligaste frågorna om våra tjänster
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${openId === item.id ? 'faq-item-open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleQuestion(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="heading-4">{item.question}</span>
                {openId === item.id ? (
                  <ChevronUp size={24} strokeWidth={2} />
                ) : (
                  <ChevronDown size={24} strokeWidth={2} />
                )}
              </button>
              <div className={`faq-answer ${openId === item.id ? 'faq-answer-open' : ''}`}>
                <p className="body-small">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p className="body-medium">Har du fler frågor?</p>
          <div className="faq-cta-buttons">
            <a href="tel:0760377772" className="btn-primary">Ring Oss</a>
            <a href="mailto:kontakt@wabilvard.se" className="btn-secondary">Mejla Oss</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
