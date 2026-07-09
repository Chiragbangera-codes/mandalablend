import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import LazyImage from '@/components/common/LazyImage';
import './CollectionsSection.scss';

// Chapter 3.7 — 5 equal cards
const categories = [
  { label: 'Keychains', slug: 'keychains', image: '/images/cat-keychains.png', count: '20+ Designs' },
  { label: 'Frames', slug: 'frames', image: '/images/cat-frames.png', count: '35+ Designs' },
  { label: 'Name Boards', slug: 'name-boards', image: '/images/cat-nameboards.png', count: '15+ Designs' },
  { label: 'Customized Gifts', slug: 'customized-gifts', image: '/images/cat-gifts.png', count: '25+ Gift Sets' },
  { label: 'New Arrivals', slug: 'new-arrivals', image: '/images/cat-newarrivals.png', count: 'Latest Drops' },
];

const CollectionsSection: React.FC = React.memo(() => {
  return (
    <section className="collections-section section" aria-labelledby="collections-heading">
      <div className="container">
        {/* Section Heading — Chapter 2.8 pattern */}
        <motion.div
          className="collections-section__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="collections-section__eyebrow">Our Bestsellers</span>
          <h2 className="collections-section__title" id="collections-heading">
            Shop Our Collections
          </h2>
          <div className="collections-section__divider" aria-hidden="true">
            <span className="collections-section__divider-line" />
            <span className="collections-section__divider-ornament">✦</span>
            <span className="collections-section__divider-line" />
          </div>
        </motion.div>

        {/* 5-column card grid */}
        <motion.div
          className="collections-section__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={fadeUp}>
              <Link
                to={`/collections?cat=${cat.slug}`}
                className="collections-section__card"
                id={`cat-card-${cat.slug}`}
                aria-label={`Browse ${cat.label} collection`}
              >
                <div className="collections-section__card-img-wrap">
                  <LazyImage
                    src={cat.image}
                    alt={cat.label}
                    className="collections-section__card-img"
                  />
                  <div className="collections-section__card-overlay" aria-hidden="true" />
                </div>
                <div className="collections-section__card-content">
                  <span className="collections-section__card-count">{cat.count}</span>
                  <h3 className="collections-section__card-title">{cat.label}</h3>
                  <span className="collections-section__card-cta">Explore →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default CollectionsSection;
