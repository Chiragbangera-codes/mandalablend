import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaStar, FaAward, FaPalette } from 'react-icons/fa';
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import { STATS } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import './About.scss';

const WHY_CARDS = [
  { icon: <FaLeaf />, title: 'Eco Friendly Materials', desc: 'Sustainably sourced materials, recyclable packaging.' },
  { icon: <FaHeart />, title: 'Made with Love', desc: 'Every piece drawn with full devotion and passion.' },
  { icon: <FaStar />, title: 'Unique Designs', desc: 'Original, never-repeated mandala patterns.' },
  { icon: <FaAward />, title: 'Premium Quality', desc: 'Archival inks and quality materials for lasting beauty.' },
  { icon: <FaPalette />, title: 'Fully Customizable', desc: 'Any name, size, color — made just for you.' },
];

const PROCESS = [
  { step: '01', title: 'Inspiration', desc: 'Drawing inspiration from nature, culture, and sacred geometry.' },
  { step: '02', title: 'Handcrafting', desc: 'Carefully hand-drawing each mandala with fine precision pens.' },
  { step: '03', title: 'Coloring', desc: 'Adding depth with gold ink, watercolors, and pigment pens.' },
  { step: '04', title: 'Finishing', desc: 'Quality check, framing, and premium packaging for delivery.' },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-page__hero section">
        <div className="container about-page__hero-inner">
          <motion.div className="about-page__hero-content" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <span className="about-page__eyebrow">Our Story</span>
            <h1 className="about-page__hero-title">Where Art Meets<br /><span>Devotion</span></h1>
            <p className="about-page__hero-desc">
              Mandala Blend was born from a simple belief — that handmade art can transform spaces and
              uplift souls. We are a boutique mandala art studio based in Jaipur, India, creating
              premium handcrafted artwork one stroke at a time.
            </p>
            <a href={createGeneralWhatsappLink()} target="_blank" rel="noopener noreferrer" className="about-page__cta">
              Order Custom Art on WhatsApp
            </a>
          </motion.div>
          <motion.div className="about-page__hero-img" variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <img src="/images/artist.png" alt="Mandala Blend Artist" />
          </motion.div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="about-page__process section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}>
            <div className="about-page__section-label">How We Create</div>
            <h2 className="about-page__section-title">The Creative Process</h2>
          </motion.div>
          <motion.div
            className="about-page__process-steps"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {PROCESS.map((step, idx) => (
              <motion.div key={step.step} className="about-page__process-step" variants={fadeUp}>
                <div className="about-page__process-num">{step.step}</div>
                {idx < PROCESS.length - 1 && <div className="about-page__process-line" />}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-page__why section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} className="about-page__why-header">
            <div className="about-page__section-label">Why Us</div>
            <h2 className="about-page__section-title">What Makes Us Different</h2>
          </motion.div>
          <motion.div
            className="about-page__why-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {WHY_CARDS.map((card) => (
              <motion.div key={card.title} className="about-page__why-card" variants={fadeUp}>
                <div className="about-page__why-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Artist */}
      <section className="about-page__artist section">
        <div className="container about-page__artist-inner">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <img src="/images/artist.png" alt="Founder of Mandala Blend" className="about-page__artist-img" />
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <div className="about-page__section-label">Meet the Artist</div>
            <h2 className="about-page__section-title">The Hand Behind the Art</h2>
            <p>
              With over 5 years of practice in mandala art, our founder has poured her heart into creating
              a brand that celebrates the ancient art of mandalas in a contemporary way. Every piece carries
              her signature devotion — a quiet meditation in every line.
            </p>
            <p style={{ marginTop: 16 }}>
              "Art is not what I do — it is who I am. Every mandala I draw is a prayer, and I hope
              you feel that energy in every piece you receive."
            </p>
            <div className="about-page__artist-signature">— Founder, Mandala Blend</div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="about-page__stats">
        <div className="container">
          <div className="about-page__stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="about-page__stat">
                <span className="about-page__stat-value">{stat.value}</span>
                <span className="about-page__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
