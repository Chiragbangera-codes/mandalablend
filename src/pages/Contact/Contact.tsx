import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { staggerContainer, fadeLeft, fadeRight, fadeUp, viewportConfig } from '@/animations/variants';
import { faqs } from '@/data/faq';
import { PHONE, EMAIL, ADDRESS, INSTAGRAM_URL, WHATSAPP_NUMBER } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import SEO from '@/components/common/SEO/SEO';
import { trackContactWhatsAppClick, trackContactEmailClick, trackContactInstagramClick } from '@/analytics';
import './Contact.scss';

// Chapter 8.6 — Contact Info Cards (4 cards, 2x2)
const CONTACT_CARDS = [
  {
    id: 'whatsapp',
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    sublabel: 'Chat directly with us',
    value: PHONE,
    href: createGeneralWhatsappLink(),
    color: '#25D366',
  },
  {
    id: 'instagram',
    icon: <FaInstagram />,
    label: 'Instagram',
    sublabel: 'Follow our work',
    value: '@themandalablend',
    href: INSTAGRAM_URL,
    color: '#E1306C',
  },
  {
    id: 'email',
    icon: <FaEnvelope />,
    label: 'Email',
    sublabel: 'Write to us anytime',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: '#4A90E2',
  },
  {
    id: 'location',
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    sublabel: 'Based in India',
    value: ADDRESS,
    href: '#',
    color: '#E74C3C',
  },
];

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Mandala Blend! 🎨\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry: ${form.type}\n\nMessage:\n${form.message}\n\nThank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const handleCardClick = (cardId: string) => {
    if (cardId === 'whatsapp') trackContactWhatsAppClick();
    if (cardId === 'instagram') trackContactInstagramClick();
    if (cardId === 'email') trackContactEmailClick();
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact | The Mandala Blend"
        description="Have queries about custom sizes, colors, pricing, or shipping? Reach out to us via WhatsApp, Instagram or Email, or check out our frequently asked questions."
        faqData={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* Chapter 8.5 — Hero */}
      <div className="contact-page__hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact-page__eyebrow">Get In Touch</span>
            <h1 className="contact-page__hero-title">We'd Love to Hear From You</h1>
            <p className="contact-page__hero-desc">
              Reach out for custom orders, queries, or just to say hello — we're always happy to chat!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chapter 8.6 — Contact Cards */}
      <div className="container">
        <motion.div
          className="contact-page__cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {CONTACT_CARDS.map((card) => (
            <motion.a
              key={card.id}
              href={card.href}
              target={card.id !== 'location' ? '_blank' : undefined}
              rel={card.id !== 'location' ? 'noopener noreferrer' : undefined}
              className="contact-page__card"
              id={`contact-card-${card.id}`}
              variants={fadeUp}
              aria-label={`Contact via ${card.label}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div
                className="contact-page__card-icon"
                style={{ background: `${card.color}18`, color: card.color }}
              >
                {card.icon}
              </div>
              <div className="contact-page__card-body">
                <h3 className="contact-page__card-label">{card.label}</h3>
                <p className="contact-page__card-sub">{card.sublabel}</p>
                <span className="contact-page__card-value">{card.value}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Chapter 8.7 — Form + Chapter 8.11 — Custom Order CTA */}
      <section className="section" aria-labelledby="contact-form-heading">
        <div className="container contact-page__form-layout">
          {/* Form */}
          <motion.div
            className="contact-page__form-wrap"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="contact-page__form-title" id="contact-form-heading">
              Send Us a Message
            </h2>
            <p className="contact-page__form-desc">
              Fill in your details and we'll get back to you on WhatsApp.
            </p>

            {submitted ? (
              <div className="contact-page__success" role="alert">
                <div className="contact-page__success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>We'll respond on WhatsApp shortly. Thank you for reaching out!</p>
                <button onClick={() => setSubmitted(false)} className="contact-page__reset-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="contact-name">Your Name <span>*</span></label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      aria-required="true"
                    />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="contact-phone">Phone / WhatsApp <span>*</span></label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      aria-required="true"
                    />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="contact-type">Inquiry Type</label>
                    <select
                      id="contact-type"
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Order</option>
                      <option value="bulk">Bulk / Corporate</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="contact-page__field">
                  <label htmlFor="contact-message">Message <span>*</span></label>
                  <textarea
                    id="contact-message"
                    required
                    placeholder="Tell us about your requirements — any specific size, design, colors, name to include..."
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    aria-required="true"
                  />
                </div>

                <button type="submit" className="contact-page__submit" id="contact-submit-btn">
                  <FaWhatsapp aria-hidden="true" />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </motion.div>

          {/* Right side: Custom Order CTA + Info */}
          <motion.div
            className="contact-page__side"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Chapter 8.11 — Custom Order CTA */}
            <div className="contact-page__custom-cta">
              <div className="contact-page__custom-icon" aria-hidden="true">🎨</div>
              <h3>Custom Order?</h3>
              <p>
                Tell us the size, name, colors, and occasion — we'll craft a unique mandala just for you.
                Most custom orders are completed within 5–7 working days.
              </p>
              <a
                href={createGeneralWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__custom-btn"
                id="contact-custom-whatsapp"
              >
                <FaWhatsapp aria-hidden="true" />
                Start Custom Order
              </a>
            </div>

            {/* Working Hours */}
            <div className="contact-page__hours">
              <h4>Working Hours</h4>
              <ul>
                <li><span>Monday – Friday</span><span>10 AM – 7 PM</span></li>
                <li><span>Saturday</span><span>10 AM – 6 PM</span></li>
                <li><span>Sunday</span><span>11 AM – 4 PM</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 8.9 — FAQ Accordion */}
      <section className="contact-page__faq section" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span className="contact-page__eyebrow">Questions</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            className="contact-page__faq-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {faqs.map((faq) => (
              <motion.div key={faq.id} className="contact-page__faq-item" variants={fadeUp}>
                <button
                  className={`contact-page__faq-trigger ${openFaq === faq.id ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`contact-page__faq-chevron ${openFaq === faq.id ? 'open' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="contact-page__faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
