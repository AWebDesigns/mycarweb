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
