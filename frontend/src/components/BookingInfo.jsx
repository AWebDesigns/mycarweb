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
