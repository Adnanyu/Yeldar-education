import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Specialties from './components/Specialties';
import Universities from './components/Universities';
// import Statistics from './components/Statistics';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import PromoBanner from './components/PromoBanner';

export default function App() {
  return (
    <div className='bg-gray-100'>
      {/* <Header /> */}
      <HeroSection />
      <Services />
      <Specialties />
      <Universities />
      {/* <Statistics /> */}
      <Testimonials />
      <PromoBanner />
      {/* <Footer /> */}
    </div>
  );
}