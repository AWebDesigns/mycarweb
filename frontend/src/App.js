import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import BookingInfo from './components/BookingInfo';
import Reviews from './components/Reviews';
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
      <FAQ />
      <Pricing />
      <BookingInfo />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
