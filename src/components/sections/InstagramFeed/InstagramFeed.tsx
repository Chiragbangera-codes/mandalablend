import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { fadeUp, viewportConfig } from '@/utils/animations';
import { INSTAGRAM_URL } from '@/utils/constants';
import './InstagramFeed.scss';

// Placeholder images from our generated ones
const instagramImages = [
  '/images/cat-frames.png',
  '/images/cat-keychains.png',
  '/images/cat-nameboards.png',
  '/images/cat-gifts.png',
  '/images/cat-newarrivals.png',
  '/images/hero-mandala.png',
  '/images/cat-frames.png',
  '/images/cat-keychains.png',
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="instagram section">
      <div className="container">
        <motion.div
          className="instagram__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <FaInstagram className="instagram__icon" />
          <div>
            <h2 className="instagram__title">Follow us on Instagram</h2>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__handle"
            >
              @themandalablend
            </a>
          </div>
        </motion.div>

        <motion.div
          className="instagram__grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__item"
              id={`instagram-item-${i}`}
            >
              <img src={img} alt={`Mandala Blend Instagram post ${i + 1}`} loading="lazy" />
              <div className="instagram__item-overlay">
                <FaInstagram />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
