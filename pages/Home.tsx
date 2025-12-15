import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="DesignWithKarthick | Web Design & Development Services"
        description="Professional web design and development services specializing in custom platforms, e-commerce stores, and standard websites. Transform your digital presence with DesignWithKarthick."
        canonical="https://yourwebsite.com/"
        keywords="web design, web development, nextjs, react, custom web platform, ecommerce development, website design services"
      />
      <main>
        <Hero />
        <Works />
        <Pricing />
        <Contact />
      </main>
    </>
  );
};

export default Home;
