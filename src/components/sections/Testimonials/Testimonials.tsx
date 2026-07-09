import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import { testimonials } from '@/data/testimonials';
import './Testimonials.scss';

const featured = testimonials.slice(0, 3);

const Testimonials: React.FC = React.memo(() => {

  return (
    <section className="testimonials section" aria-labelledby="testimonials-heading">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="testimonials__header"
        >
          <span className="testimonials__eyebrow">Customer Love</span>
          <h2 className="testimonials__title" id="testimonials-heading">
            What Our Customers Say
          </h2>
          <div className="testimonials__divider" aria-hidden="true">
            <span className="testimonials__divider-line" />
            <span className="testimonials__divider-ornament">✦</span>
            <span className="testimonials__divider-line" />
          </div>
        </motion.div>

        <motion.div
          className="testimonials__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {featured.map((t) => (
            <motion.div key={t.id} className="testimonials__card" variants={fadeUp}>
              {/* Wine quote icon */}
              <FaQuoteLeft className="testimonials__quote-icon" aria-hidden="true" />

              {/* Stars */}
              <div className="testimonials__stars" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < t.rating ? 'testimonials__star--filled' : 'testimonials__star--empty'}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="testimonials__review">"{t.review}"</p>

              {/* Customer */}
              <div className="testimonials__customer">
                <div className="testimonials__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonials__info">
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__meta">{t.city} · {t.product}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Testimonials;
