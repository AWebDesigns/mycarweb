import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Ludwig Kumlin Larsson',
    rating: 5,
    text: 'Hade en liten punktering på ett av däcken. Ringde WA 10 minuter innan de skulle stänga för dagen och fick svaret: Jag stannar kvar lite extra, kom hit! Fantastisk service!',
    date: '1 vecka sedan'
  },
  {
    id: 2,
    name: 'Love Söderlund',
    rating: 5,
    text: 'Körde en fullständig behandling på en väldigt smutsig bil, resultatet blev mycket bra! Väldigt trevligt bemötande från ägaren som också var serviceinriktad. Rekommenderas!',
    date: '1 år sedan'
  },
  {
    id: 3,
    name: 'Björn Hjorth',
    rating: 5,
    text: 'Snabbt och trevligt, men framför allt kunnigt och noggrant.',
    date: '6 månader sedan'
  },
  {
    id: 4,
    name: 'Johan Gunnarsson',
    rating: 5,
    text: 'Bilen är som ny igen! Fick hjälp med interiör, exteriör och med suffletten på Minin. Kunnig och prisvärd, stark rekommendation 👌',
    date: '10 månader sedan'
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
