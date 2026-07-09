import React from 'react';
import Hero from '@/components/sections/Hero/Hero';
import CollectionsSection from '@/components/sections/Collections/CollectionsSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import './Home.scss';

const FEATURE_PILLS = [
  '100% Handmade',
  'Customizable Designs',
  'Pan India Delivery',
  'Premium Quality',
  'WhatsApp Ordering',
];

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="home__feature-strip">
        <div className="container home__features">
          {FEATURE_PILLS.map((f) => (
            <span key={f} className="home__feature-pill">✦ {f}</span>
          ))}
        </div>
      </div>
      <CollectionsSection />
      <WhyChooseUs />
      <Testimonials />
      <InstagramFeed />
    </>
  );
};

export default Home;
