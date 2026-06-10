import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLeaf, FaPalette, FaMedal, FaTruck } from 'react-icons/fa';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '@/utils/animations';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import './Hero.scss';

const features = [
  { icon: <FaLeaf />, label: '100% Handmade' },
  { icon: <FaPalette />, label: 'Customizable' },
  { icon: <FaMedal />, label: 'Premium Quality' },
  { icon: <FaTruck />, label: 'Safe Delivery' },
];

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Background mandala patterns */}
      <div className="hero__bg-pattern" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: Content */}
        <motion.div
          className="hero__content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="hero__logo">
            <img
              src="/logo.png?v=2"
              alt="The Mandala Blend — Handcrafted with Love"
              className="hero__logo-img"
            />
          </motion.div>

          <motion.p variants={fadeUp} className="hero__subheading">
            Discover our exquisite collection of hand-drawn mandala frames, keychains,
            name boards, and personalized gifts — each crafted with care and passion.
          </motion.p>

          <motion.div variants={fadeUp} className="hero__actions">
            <Link to="/collections" className="hero__btn hero__btn--primary" id="hero-explore-btn">
              Explore Collections
            </Link>
            <a
              href={createGeneralWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--whatsapp"
              id="hero-whatsapp-btn"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="hero__features">
            {features.map((f) => (
              <div key={f.label} className="hero__feature">
                <span className="hero__feature-icon">{f.icon}</span>
                <span className="hero__feature-label">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Artwork */}
        <motion.div
          className="hero__artwork"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__artwork-glow" />
          <motion.div
            className="hero__artwork-frame"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/images/hero-mandala.png"
              alt="Premium mandala artwork — Mandala Blend"
              className="hero__artwork-img"
            />
          </motion.div>
          <div className="hero__artwork-badge">
            <span className="hero__artwork-badge-num">1500+</span>
            <span className="hero__artwork-badge-text">Happy Customers</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="hero__scroll-dot" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
