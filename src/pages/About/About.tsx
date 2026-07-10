import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFeather, FiHeart, FiStar, FiAward, FiEdit3, FiCompass, FiPenTool, FiImage, FiBox, FiTruck, FiSmile, FiEye } from 'react-icons/fi';
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import { STATS } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import Counter from '@/components/common/Counter/Counter';
import LazyImage from '@/components/common/LazyImage';
import SEO from '@/components/common/SEO/SEO';
import './About.scss';

// Chapter 7.7 — Mission & Vision cards
const MISSION_VISION = [
  {
    type: 'Mission',
    icon: <FiHeart />,
    desc: 'To create premium handmade mandala art that transforms spaces, uplifts souls, and celebrates the timeless tradition of Indian art — one stroke at a time.',
  },
  {
    type: 'Vision',
    icon: <FiStar />,
    desc: 'To become India\'s most loved mandala art brand, making handcrafted art accessible to every home and heart across the country.',
  },
];

// Chapter 7.8 — "From Idea to Artwork" Creative Journey Timeline
const TIMELINE_STEPS = [
  { step: '1', icon: <FiCompass />, title: 'Idea', desc: 'Conceiving the geometric patterns and color palettes.' },
  { step: '2', icon: <FiEdit3 />, title: 'Sketch', desc: 'Drafting the foundational concentric grid with compasses.' },
  { step: '3', icon: <FiPenTool />, title: 'Painting', desc: 'Drawing the intricate symmetry lines by hand.' },
  { step: '4', icon: <FiFeather />, title: 'Detailing', desc: 'Adding micro-patterns and highlighting with metallic inks.' },
  { step: '5', icon: <FiImage />, title: 'Framing', desc: 'Mounting the art in a high-grade wooden frame.' },
  { step: '6', icon: <FiBox />, title: 'Packaging', desc: 'Securely bubble-wrapping the piece in a robust box.' },
  { step: '7', icon: <FiTruck />, title: 'Delivery', desc: 'Pan-India shipping to your door.' },
];

// Chapter 7.9 — Craftsmanship Process Cards
const CRAFT_CARDS = [
  { stepId: 'c1', icon: <FiPenTool />, title: 'Hand Drawn', desc: 'No printing machines. Every line is carefully drawn by hand, resulting in a unique, organic feel.' },
  { stepId: 'c2', icon: <FiAward />, title: 'Premium Materials', desc: 'We use acid-free 300 GSM cotton paper and lightfast pigments to prevent yellowing or fading.' },
  { stepId: 'c3', icon: <FiFeather />, title: 'Careful Finishing', desc: 'Sealed with protective matte coats or high-gloss resin depending on the collection.' },
  { stepId: 'c4', icon: <FiEye />, title: 'Quality Inspection', desc: 'Every artwork undergoes an inspection for symmetry, line consistency, and mounting.' },
  { stepId: 'c5', icon: <FiBox />, title: 'Safe Packaging', desc: 'Double-walled wooden boxes or rigid hardboards to guarantee zero damage in transit.' },
];

// Chapter 7.10 — Why Choose Us / Brand Values
const WHY_CARDS = [
  { icon: <FiFeather />,  title: 'Eco Friendly Materials', desc: 'Sustainably sourced, recyclable packaging for every order.' },
  { icon: <FiHeart />,   title: 'Made with Love', desc: 'Every stroke drawn with full devotion and creative passion.' },
  { icon: <FiStar />,    title: 'Unique Designs', desc: 'Original, never-repeated mandala patterns in every piece.' },
  { icon: <FiAward />,   title: 'Premium Quality', desc: 'Archival inks and quality materials for lasting beauty.' },
  { icon: <FiEdit3 />,   title: 'Fully Customizable', desc: 'Any name, size, color — made just for you, from scratch.' },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <SEO
        title="About | The Mandala Blend"
        description="Learn more about the story behind Mandala Blend, our master craftsmanship, our premium materials, and our dedication to authentic hand-painted dot mandala art."
      />

      {/* Chapter 7.5 — Hero Section */}
      <section className="about-page__hero section" aria-labelledby="about-hero-heading">
        <div className="container about-page__hero-inner">
          <motion.div
            className="about-page__hero-content"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <span className="about-page__eyebrow">Our Story</span>
            <h1 className="about-page__hero-title" id="about-hero-heading">
              Where Art Meets<br />
              <span>Devotion</span>
            </h1>
            <div className="about-page__divider" aria-hidden="true">
              <span className="about-page__divider-line" />
              <span className="about-page__divider-ornament">✦</span>
              <span className="about-page__divider-line" />
            </div>
            <p className="about-page__hero-desc">
              Mandala Blend was born from a simple belief — that handmade art can transform spaces and
              uplift souls. We are a boutique mandala art studio based in Mangaluru, India, creating
              premium handcrafted artwork one stroke at a time.
            </p>
            <div className="about-page__hero-actions">
              <Link to="/collections" className="btn-primary">
                Explore Collections
              </Link>
              <a
                href={createGeneralWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="about-cta-whatsapp"
              >
                Start a Custom Order
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-page__hero-img-panel"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <LazyImage
              src="/images/artist.webp"
              alt="Our artist creating a mandala — Mandala Blend"
            />
          </motion.div>
        </div>
      </section>

      {/* Chapter 7.6 — Brand Story (3 Paragraphs) */}
      <section className="about-page__story section" aria-labelledby="story-heading">
        <div className="container">
          <motion.div
            className="about-page__story-inner"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.div className="about-page__story-content" variants={fadeLeft}>
              <span className="about-page__eyebrow">The Story</span>
              <h2 className="about-page__section-title" id="story-heading">From Passion to Purpose</h2>
              
              <p>
                What began as meditative drawing sessions in Mangaluru grew into something extraordinary.
                The founder discovered that mandala art wasn't just beautiful — it was healing.
                Every symmetrical line, every intricate detail, brought calm and focus. What started
                as a private form of meditation quickly captured the hearts of everyone who saw the process.
              </p>
              
              <p>
                Friends and family were gifted these pieces, and soon strangers were asking to buy them.
                That's when Mandala Blend was officially born — not from a business plan, but from pure
                love for the art form. The name reflects our vision to blend traditional hand-drawn mandala
                geometries with modern aesthetic sensibilities.
              </p>

              <p>
                Today, Mandala Blend ships premium handcrafted name boards, frames, and keychains all across India.
                We operate with the strict belief that an artwork is only complete when it carries authentic human energy.
                We continue to create every piece completely from scratch, carrying forward a lineage of devotion.
              </p>
            </motion.div>
            <motion.div className="about-page__story-img" variants={fadeRight}>
              <div className="about-page__story-img-wrap">
                <LazyImage
                  src="/images/hero-mandala.webp"
                  alt="Mandala art creation process"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 7.7 — Mission & Vision */}
      <section className="about-page__mv section" aria-labelledby="mv-heading">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="about-page__mv-header"
          >
            <span className="about-page__eyebrow">Purpose</span>
            <h2 className="about-page__section-title" id="mv-heading">Mission & Vision</h2>
          </motion.div>

          <motion.div
            className="about-page__mv-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {MISSION_VISION.map((item) => (
              <motion.div key={item.type} className={`about-page__mv-card about-page__mv-card--${item.type.toLowerCase()}`} variants={fadeUp}>
                <div className="about-page__mv-icon" aria-hidden="true">{item.icon}</div>
                <h3 className="about-page__mv-type">{item.type}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 7.8 — Timeline (From Idea to Artwork) */}
      <section className="about-page__timeline section" aria-labelledby="timeline-heading">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="about-page__timeline-header"
          >
            <span className="about-page__eyebrow">Journey</span>
            <h2 className="about-page__section-title" id="timeline-heading">From Idea to Artwork</h2>
          </motion.div>

          <div className="about-page__timeline-container">
            <motion.div
              className="about-page__timeline-track"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {TIMELINE_STEPS.map((step) => (
                <motion.div key={step.step} className="about-page__timeline-item" variants={fadeUp}>
                  <div className="about-page__timeline-node">
                    <div className="about-page__timeline-icon" aria-hidden="true">{step.icon}</div>
                    <div className="about-page__timeline-number">{step.step}</div>
                  </div>
                  <div className="about-page__timeline-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 7.9 — Craftsmanship Process (2 Columns: Left Image / Right Cards) */}
      <section className="about-page__craftsmanship section" aria-labelledby="craftsmanship-heading">
        <div className="container">
          <div className="about-page__craftsmanship-header">
            <span className="about-page__eyebrow">Craftsmanship</span>
            <h2 id="craftsmanship-heading" className="about-page__section-title">Our Handmade Workflow</h2>
          </div>

          <div className="about-page__craftsmanship-layout">
            <motion.div
              className="about-page__craftsmanship-image"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeLeft}
            >
              <LazyImage
                src="/images/hero-mandala.webp"
                alt="Intricate handmade mandala process detail"
              />
            </motion.div>
            
            <motion.div
              className="about-page__craftsmanship-cards"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {CRAFT_CARDS.map((card) => (
                <motion.div key={card.stepId} className="about-page__craftsmanship-card" variants={fadeUp}>
                  <div className="about-page__craftsmanship-icon" aria-hidden="true">{card.icon}</div>
                  <div className="about-page__craftsmanship-content">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter 7.10 — Why Choose Us / Brand Values */}
      <section className="about-page__craft section" aria-labelledby="craft-heading">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span className="about-page__eyebrow">Our Values</span>
            <h2 className="about-page__section-title" id="craft-heading">Why Choose Mandala Blend?</h2>
          </motion.div>

          <motion.div
            className="about-page__craft-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {WHY_CARDS.map((card) => (
              <motion.div key={card.title} className="about-page__craft-card" variants={fadeUp}>
                <div className="about-page__craft-icon" aria-hidden="true">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 7.11 — Meet the Artist */}
      <section className="about-page__artist section" aria-labelledby="artist-heading">
        <div className="container">
          <motion.div
            className="about-page__artist-layout"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.div className="about-page__artist-image" variants={fadeLeft}>
              <div className="about-page__artist-circle">
                <LazyImage
                  src="/images/artist.webp"
                  alt="Founder and Artist of Mandala Blend"
                  objectFit="cover"
                />
              </div>
            </motion.div>
            
            <motion.div className="about-page__artist-bio" variants={fadeRight}>
              <span className="about-page__eyebrow">The Creator</span>
              <h2 id="artist-heading" className="about-page__section-title">Meet the Artist</h2>
              <p>
                Hi, I'm Deepthi, the artist and creator behind every mandala you see here.
              </p>
              <p>
                My journey with mandala art began with a simple love for creating. What started as a hobby soon became a passion that taught me the beauty of patience, precision, and creativity, transforming every blank canvas into a story told through intricate patterns and thoughtful details. With every piece I completed, my love for the craft grew stronger, inspiring me to share it with others.
              </p>
              <p>
                Driven by the belief that handmade art carries a unique emotion, I turned my passion into a brand dedicated to creating timeless, personalized pieces. Every mandala is carefully designed and handcrafted with meticulous attention to detail, using quality materials to ensure it is as lasting as it is beautiful. From elegant wall art to customized keepsakes, each creation is made to celebrate special moments and become a cherished part of your home or a heartfelt gift for someone you love.
              </p>
              <p>
                This journey is built on creativity, dedication, and the joy of bringing meaningful ideas to life. Thank you for supporting handmade artistry and for allowing my creations to become a part of your story.
              </p>
              <div className="about-page__artist-signature">
                <span>The Mandala Blend</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats with scroll counter animation + CTA */}
      <section className="about-page__stats section">
        <div className="container">
          <motion.div
            className="about-page__stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} className="about-page__stat" variants={fadeUp}>
                <span className="about-page__stat-value">
                  <Counter value={stat.value} />
                </span>
                <span className="about-page__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="about-page__cta-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2>Ready to Order Your Custom Mandala?</h2>
            <p>Tell us your vision and we'll bring it to life, handcrafted just for you.</p>
            <div className="about-page__cta-actions">
              <a
                href={createGeneralWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="about-page__cta"
              >
                Order on WhatsApp
              </a>
              <Link to="/collections" className="about-page__cta-sec">
                Browse Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
