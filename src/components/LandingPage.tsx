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
      <section id="home">
        <Hero />
      </section>
      <section id="assortment">
        <Assortment />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="preorder">
        <PreOrder />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </>
  );
};
