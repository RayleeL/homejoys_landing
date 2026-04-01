import React, { useEffect } from 'react';
import { Hero } from './Hero';
import { Assortment } from './Assortment';
import { About } from './About';
import { WhyUs } from './WhyUs';
import { PreOrder } from './PreOrder';
import { Reviews } from './Reviews';
import { Contacts } from './Contacts';
import { Gallery } from './Gallery';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Assortment />
      <About />
      <WhyUs />
      <PreOrder />
      <Reviews />
      <Gallery />
      <Contacts />
    </>
  );
};
