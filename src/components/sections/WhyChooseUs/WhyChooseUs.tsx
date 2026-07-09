import React from 'react';
import { motion } from 'framer-motion';
import { FiFeather, FiHeart, FiStar, FiSmile } from 'react-icons/fi';
import { staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import './WhyChooseUs.scss';

// Chapter 3.8 — outline icons only
const reasons = [
  {
    icon: <FiFeather />,
    title: 'Eco Friendly',
    desc: 'Sustainably sourced materials, recyclable packaging. Art that loves the planet.',
  },
  {
    icon: <FiHeart />,
    title: 'Made With Love',
    desc: 'Every piece is handcrafted with passion. You can feel the love in each stroke.',
  },
  {
    icon: <FiStar />,
    title: 'Unique Designs',
    desc: 'No two mandalas are alike. Each artwork is an original, one-of-a-kind creation.',
  },
  {
    icon: <FiSmile />,
    title: 'Happy Customers',
    desc: '1500+ satisfied customers across India trust Mandala Blend for premium art.',
  },
];

const WhyChooseUs: React.FC = React.memo(() => {
  return (
    <section className="why-choose section" aria-labelledby="why-choose-heading">
      <div className="container">
        <motion.div
          className="why-choose__inner"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="why-choose__header">
            <span className="why-choose__eyebrow">Why Us</span>
            <h2 className="why-choose__title" id="why-choose-heading">
              Why Choose Mandala Blend?
            </h2>
            <p className="why-choose__subtitle">
              We don't just create art — we create meaningful experiences.
            </p>
          </motion.div>

          <motion.div className="why-choose__cards" variants={staggerContainer}>
            {reasons.map((r) => (
              <motion.div key={r.title} className="why-choose__card" variants={fadeUp}>
                <div className="why-choose__card-icon" aria-hidden="true">{r.icon}</div>
                <h3 className="why-choose__card-title">{r.title}</h3>
                <p className="why-choose__card-desc">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default WhyChooseUs;
