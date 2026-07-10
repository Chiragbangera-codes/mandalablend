import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import { INSTAGRAM_URL } from '@/utils/constants';
import LazyImage from '@/components/common/LazyImage';
import './InstagramFeed.scss';

// Chapter 3.10 — 7 images
const instagramImages = [
  '/images/cat-frames.webp',
  '/images/cat-keychains.webp',
  '/images/cat-nameboards.webp',
  '/images/cat-gifts.webp',
  '/images/cat-newarrivals.webp',
  '/images/hero-mandala.webp',
  '/images/cat-frames.webp',
];

const InstagramFeed: React.FC = React.memo(() => {
  return (
    <section className="instagram section" aria-labelledby="instagram-heading">
      <div className="container">
        <motion.div
          className="instagram__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="instagram__eyebrow">Social Media</span>
          <h2 className="instagram__title" id="instagram-heading">
            Follow Our Journey on Instagram
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram__handle"
            aria-label="Follow @themandalablend on Instagram"
          >
            @themandalablend
          </a>
        </motion.div>

        <motion.div
          className="instagram__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {instagramImages.map((img, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__item"
              id={`instagram-item-${i}`}
              variants={fadeUp}
              aria-label={`View Instagram post ${i + 1}`}
            >
              <LazyImage
                src={img}
                alt={`Mandala Blend artwork post ${i + 1}`}
              />
              <div className="instagram__item-overlay" aria-hidden="true">
                <FaInstagram />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default InstagramFeed;
