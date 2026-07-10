import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportConfig } from '@/animations/variants';
import { galleryItems, getGalleryByCategory, customOrders, customerShowcase } from '@/data/gallery';
import { GALLERY_CATEGORIES, STATS } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import Counter from '@/components/common/Counter/Counter';
import LazyImage from '@/components/common/LazyImage';
import SEO from '@/components/common/SEO/SEO';
import { trackGalleryImageOpened, trackGalleryCategoryChanged } from '@/analytics';
import './Gallery.scss';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = React.useMemo(() => getGalleryByCategory(activeCategory), [activeCategory]);

  // Lightbox navigation
  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  }, [filtered.length]);
  const nextLightbox = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null);
  }, [filtered.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  return (
    <div className="gallery-page">
      <SEO
        title="Gallery | The Mandala Blend"
        description="Explore the gallery of our finest handcrafted mandala art, custom-made creations, behind-the-scenes processes, and showcases from our happy customers."
      />
      {/* Chapter 6.5 — Gallery Hero */}
      <div className="gallery-page__banner">
        <div className="container gallery-page__banner-inner">
          <motion.div
            className="gallery-page__banner-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gallery-page__banner-eyebrow">Our Portfolio</span>
            <h1 className="gallery-page__banner-title">Our Gallery</h1>
            <p className="gallery-page__banner-desc">
              Explore our handcrafted creations, custom orders, and the beautiful stories behind every mandala piece.
            </p>
            <Link to="/collections" className="btn-secondary gallery-page__banner-cta">
              Explore Collections
            </Link>
          </motion.div>
          <motion.div
            className="gallery-page__banner-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LazyImage
              src="/logo.png"
              alt="Mandala Blend Logo"
              fallbackSrc="/logo.png"
            />
          </motion.div>
        </div>
      </div>

      {/* Chapter 6.6 — Gallery Categories */}
      <div className="gallery-page__pills-bar">
        <div className="container">
          <div className="gallery-page__pills">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                className={`gallery-page__pill ${activeCategory === cat.value ? 'gallery-page__pill--active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.value);
                  trackGalleryCategoryChanged(cat.value);
                }}
                id={`gallery-filter-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter 6.7 — Gallery Grid */}
      <div className="container gallery-page__body">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="gallery-page__grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="gallery-page__item"
                  variants={fadeUp}
                >
                  <button
                    className="gallery-page__item-btn"
                    onClick={() => {
                      openLightbox(idx);
                      trackGalleryImageOpened(item.id, item.title);
                    }}
                    aria-label={`View ${item.title} in fullscreen`}
                  >
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="gallery-page__item-overlay" aria-hidden="true">
                      <FiZoomIn className="gallery-page__zoom-icon" />
                    </div>
                    <div className="gallery-page__item-info">
                      <h3>{item.title}</h3>
                      <span>{item.category.replace(/-/g, ' ')}</span>
                    </div>
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="gallery-page__empty">
                <div className="gallery-page__empty-icon">🖼️</div>
                <h3>No Artwork Found</h3>
                <p>Please explore another category.</p>
                <button onClick={() => setActiveCategory('all')}>Browse All</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Chapter 6.10 — Featured Custom Orders */}
        <section className="gallery-page__custom-orders" aria-labelledby="custom-orders-heading">
          <div className="gallery-page__section-header">
            <span className="section-label">Commissioned Art</span>
            <h2 id="custom-orders-heading" className="gallery-page__section-title">Featured Custom Orders</h2>
          </div>

          <div className="gallery-page__custom-orders-list">
            {customOrders.map((order, idx) => (
              <motion.div
                key={order.id}
                className="gallery-page__custom-order"
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={idx % 2 === 0 ? fadeLeft : fadeRight}
              >
                <div className="gallery-page__custom-order-image">
                  <LazyImage
                    src={order.image}
                    alt={order.title}
                  />
                </div>
                <div className="gallery-page__custom-order-info">
                  <h3>{order.title}</h3>
                  <div className="gallery-page__custom-order-detail">
                    <strong>Customer Requirement:</strong>
                    <p>{order.requirement}</p>
                  </div>
                  <div className="gallery-page__custom-order-detail">
                    <strong>Design Inspiration:</strong>
                    <p>{order.inspiration}</p>
                  </div>
                  <div className="gallery-page__custom-order-meta">
                    <div>
                      <strong>Time to complete:</strong>
                      <span>{order.completionTime}</span>
                    </div>
                    <div>
                      <strong>Materials:</strong>
                      <span>{order.materials}</span>
                    </div>
                  </div>
                  <a
                    href={createGeneralWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gallery-page__custom-order-cta"
                  >
                    Create Your Own <FiArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Chapter 6.11 — Customer Showcase */}
        <section className="gallery-page__showcase" aria-labelledby="showcase-heading">
          <div className="gallery-page__section-header">
            <span className="section-label">Our Community</span>
            <h2 id="showcase-heading" className="gallery-page__section-title">Happy Customers Showcase</h2>
          </div>

          <motion.div
            className="gallery-page__showcase-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {customerShowcase.map((item) => (
              <motion.div key={item.id} className="gallery-page__showcase-card" variants={fadeUp}>
                <div className="gallery-page__showcase-artwork">
                  <LazyImage
                    src={item.artworkPhoto}
                    alt="Customer artwork display"
                  />
                </div>
                <div className="gallery-page__showcase-content">
                  <p className="gallery-page__showcase-review">"{item.review}"</p>
                  <div className="gallery-page__showcase-user">
                    <div className="gallery-page__showcase-avatar">
                      {item.customerPhoto ? (
                        <LazyImage
                          src={item.customerPhoto}
                          alt={item.name}
                        />
                      ) : (
                        <span>{item.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="gallery-page__showcase-name">{item.name}</h4>
                      <p className="gallery-page__showcase-location">{item.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Chapter 6.14 — Statistics with scroll counter animation */}
        <motion.div
          className="gallery-page__stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} className="gallery-page__stat" variants={fadeUp}>
              <span className="gallery-page__stat-value">
                <Counter value={stat.value} />
              </span>
              <span className="gallery-page__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <InstagramFeed />

      {/* Chapter 6.9 — Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="gallery-page__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="gallery-page__lightbox-img"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <LazyImage
                src={filtered[lightboxIndex]?.image}
                alt={filtered[lightboxIndex]?.title}
                loading="eager"
                objectFit="contain"
              />
              <div className="gallery-page__lightbox-info">
                <h3>{filtered[lightboxIndex]?.title}</h3>
                <span>{filtered[lightboxIndex]?.category?.replace(/-/g, ' ')}</span>
              </div>
            </motion.div>

            <button
              className="gallery-page__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close viewer"
            >
              <FiX />
            </button>
            <button
              className="gallery-page__lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
            <button
              className="gallery-page__lightbox-next"
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
