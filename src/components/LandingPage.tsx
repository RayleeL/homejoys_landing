import React from 'react';
import { Hero } from './Hero';
import { Assortment } from './Assortment';
import { About } from './About';
import { WhyUs } from './WhyUs';
import { PreOrder } from './PreOrder';
import { Reviews } from './Reviews';
import { Contacts } from './Contacts';
import { Gallery } from './Gallery';

export const LandingPage: React.FC = () => {
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
