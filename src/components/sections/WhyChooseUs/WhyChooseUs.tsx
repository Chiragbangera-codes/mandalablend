import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaStar, FaSmile } from 'react-icons/fa';
import { staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import './WhyChooseUs.scss';

const reasons = [
  {
    icon: <FaLeaf />,
    title: 'Eco Friendly',
    desc: 'We use sustainable, eco-conscious materials. Our packaging is 100% recyclable.',
  },
  {
    icon: <FaHeart />,
    title: 'Made With Love',
    desc: 'Every piece is handcrafted with passion. You can feel the love in each stroke.',
  },
  {
    icon: <FaStar />,
    title: 'Unique Designs',
    desc: 'No two mandalas are alike. Each artwork is an original, one-of-a-kind creation.',
  },
  {
    icon: <FaSmile />,
    title: 'Happy Customers',
    desc: '1500+ satisfied customers across India trust Mandala Blend for premium art.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose section">
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
            <h2 className="why-choose__title">Why Choose Mandala Blend?</h2>
            <p className="why-choose__subtitle">
              We don't just create art — we create meaningful experiences.
            </p>
          </motion.div>

          <div className="why-choose__cards">
            {reasons.map((r) => (
              <motion.div key={r.title} className="why-choose__card" variants={fadeUp}>
                <div className="why-choose__card-icon">{r.icon}</div>
                <h3 className="why-choose__card-title">{r.title}</h3>
                <p className="why-choose__card-desc">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
