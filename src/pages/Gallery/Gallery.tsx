import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import { galleryItems, getGalleryByCategory } from '@/data/gallery';
import { GALLERY_CATEGORIES, STATS } from '@/utils/constants';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import './Gallery.scss';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = getGalleryByCategory(activeCategory);

  return (
    <div className="gallery-page">
      {/* Banner */}
      <div className="gallery-page__banner">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="gallery-page__banner-eyebrow">Our Portfolio</span>
            <h1 className="gallery-page__banner-title">Mandala Gallery</h1>
            <p className="gallery-page__banner-desc">
              A showcase of our finest handcrafted mandala artworks — each one a labor of love.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container gallery-page__body">
        {/* Filters */}
        <div className="gallery-page__filters">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`gallery-page__filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.value)}
              id={`gallery-filter-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="gallery-page__grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className={`gallery-page__item gallery-page__item--${item.height || 'medium'}`}
                variants={fadeUp}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-mandala.png'; }}
                />
                <div className="gallery-page__item-overlay">
                  <h3>{item.title}</h3>
                  <span>{item.category.replace(/-/g, ' ')}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Statistics */}
        <motion.div
          className="gallery-page__stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} className="gallery-page__stat" variants={fadeUp}>
              <span className="gallery-page__stat-value">{stat.value}</span>
              <span className="gallery-page__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
