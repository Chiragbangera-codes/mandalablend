import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import './CollectionsSection.scss';

const categories = [
  { label: 'Keychains', slug: 'keychains', image: '/images/cat-keychains.png', count: '20+ Designs' },
  { label: 'Frames', slug: 'frames', image: '/images/cat-frames.png', count: '35+ Designs' },
  { label: 'Name Boards', slug: 'name-boards', image: '/images/cat-nameboards.png', count: '15+ Designs' },
  { label: 'Customized Gifts', slug: 'customized-gifts', image: '/images/cat-gifts.png', count: '25+ Gift Sets' },
  { label: 'New Arrivals', slug: 'new-arrivals', image: '/images/cat-newarrivals.png', count: 'Latest Drops' },
];

const CollectionsSection: React.FC = () => {
  return (
    <section className="collections-section section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <SectionTitle
            subtitle="Shop by Category"
            title="Our Collections"
            description="Each piece is hand-crafted with devotion — explore our categories and find your perfect mandala art."
            centered
          />
        </motion.div>

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
              >
                <div className="collections-section__card-img-wrap">
                  <img src={cat.image} alt={cat.label} className="collections-section__card-img" />
                  <div className="collections-section__card-overlay" />
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
};

export default CollectionsSection;
