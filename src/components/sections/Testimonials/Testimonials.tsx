import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import { testimonials } from '@/data/testimonials';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import './Testimonials.scss';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const featured = testimonials.slice(0, 3);

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp}>
          <SectionTitle
            subtitle="Customer Love"
            title="What Our Customers Say"
            description="Real reviews from real customers who fell in love with our handmade art."
            centered
          />
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
              <FaQuoteLeft className="testimonials__quote-icon" />
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonials__review">"{t.review}"</p>
              <div className="testimonials__customer">
                <div className="testimonials__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__city">{t.city}</span>
                  <span className="testimonials__product">Ordered: {t.product}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
