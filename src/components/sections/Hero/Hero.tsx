import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaHeart } from 'react-icons/fa';
import { FiPackage, FiEdit3, FiAward, FiTruck } from 'react-icons/fi';
import {
  heroStagger,
  heroItem,
  artworkReveal,
  viewportConfig,
} from '@/animations/variants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import './Hero.scss';

const features = [
  {
    icon: <FiEdit3 />,
    title: 'Handmade',
    subtitle: 'Every stroke by hand',
  },
  {
    icon: <FiPackage />,
    title: 'Customizable',
    subtitle: 'Made just for you',
  },
  {
    icon: <FiAward />,
    title: 'Premium Quality',
    subtitle: 'Archival materials',
  },
  {
    icon: <FiTruck />,
    title: 'Safe Delivery',
    subtitle: 'Pan India shipping',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-label="Mandala Blend Hero">
      <div className="container hero__inner">
        {/* Left: Text Content */}
        <motion.div
          className="hero__content"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Handmade label */}
          <motion.div variants={heroItem} className="hero__label">
            <FaHeart className="hero__label-icon" aria-hidden="true" />
            <span>Handmade with Love</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={heroItem} className="hero__heading">
            Mandala Art made with{' '}
            <span className="hero__heading-accent">love</span>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div variants={heroItem} className="hero__divider" aria-hidden="true">
            <span className="hero__divider-line" />
            <span className="hero__divider-ornament">✦</span>
            <span className="hero__divider-line" />
          </motion.div>

          {/* Description */}
          <motion.p variants={heroItem} className="hero__desc">
            Intricate designs. Positive vibes. Beautifully handcrafted just for you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={heroItem} className="hero__actions">
            <Link
              to="/collections"
              className="hero__btn hero__btn--primary"
              id="hero-explore-btn"
            >
              Explore Collections
              <span className="hero__btn-arrow">→</span>
            </Link>
            <a
              href={createGeneralWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
              id="hero-whatsapp-btn"
            >
              <FaWhatsapp aria-hidden="true" />
              Order on WhatsApp
            </a>
          </motion.div>

          {/* Feature Icons */}
          <motion.div variants={heroItem} className="hero__features">
            {features.map((f) => (
              <div key={f.title} className="hero__feature">
                <span className="hero__feature-icon" aria-hidden="true">{f.icon}</span>
                <span className="hero__feature-title">{f.title}</span>
                <span className="hero__feature-sub">{f.subtitle}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Artwork Panel */}
        <motion.div
          className="hero__artwork-panel"
          variants={artworkReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__artwork-bg" aria-hidden="true" />
          <div className="hero__artwork-frame">
            <img
              src="/front.png"
              alt="Premium mandala artwork — Mandala Blend handcrafted art"
              className="hero__artwork-img"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
          </div>
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-num">1500+</span>
            <span className="hero__badge-text">Happy Customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
