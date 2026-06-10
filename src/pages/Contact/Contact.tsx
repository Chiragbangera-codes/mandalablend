import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronDown } from 'react-icons/fa';
import { staggerContainer, fadeLeft, fadeRight, fadeUp, viewportConfig } from '@/utils/animations';
import { faqs } from '@/data/faq';
import { STORE_HOURS, PHONE, EMAIL, ADDRESS, INSTAGRAM_URL } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import './Contact.scss';

const CONTACT_CARDS = [
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: PHONE, href: createGeneralWhatsappLink(), color: '#25D366' },
  { icon: <FaInstagram />, label: 'Instagram', value: '@themandalablend', href: INSTAGRAM_URL, color: '#E1306C' },
  { icon: <FaEnvelope />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, color: '#4A90E2' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: ADDRESS, href: '#map', color: '#E74C3C' },
];

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Mandala Blend! 🎨\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry: ${form.type}\n\nMessage:\n${form.message}\n\nThank you!`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-page__hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="contact-page__eyebrow">Get In Touch</span>
            <h1 className="contact-page__hero-title">We'd Love to Hear From You</h1>
            <p>Reach out for custom orders, queries, or just to say hello!</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        {/* Contact Form + Cards */}
        <div className="contact-page__main section">
          <motion.div
            className="contact-page__form-wrap"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="contact-page__form-title">Send Us a Message</h2>
            {submitted ? (
              <div className="contact-page__success">
                <span>🎉</span>
                <h3>Message Sent!</h3>
                <p>We'll respond on WhatsApp shortly.</p>
              </div>
            ) : (
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input id="contact-name" type="text" required placeholder="Priya Sharma"
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" placeholder="priya@example.com"
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="contact-phone">Phone / WhatsApp *</label>
                    <input id="contact-phone" type="tel" required placeholder="+91 99999 99999"
                      value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="contact-type">Inquiry Type</label>
                    <select id="contact-type" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Order</option>
                      <option value="bulk">Bulk / Corporate</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="collaboration">Collaboration</option>
                    </select>
                  </div>
                </div>
                <div className="contact-page__field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" rows={5} required
                    placeholder="Tell us about your dream piece or inquiry..."
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit" className="contact-page__submit" id="contact-submit-btn">
                  <FaWhatsapp /> Send via WhatsApp
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="contact-page__cards"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="contact-page__cards-title">Contact Us Directly</h2>
            {CONTACT_CARDS.map((card) => (
              <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer" className="contact-page__card">
                <div className="contact-page__card-icon" style={{ background: `${card.color}15`, color: card.color }}>
                  {card.icon}
                </div>
                <div>
                  <span className="contact-page__card-label">{card.label}</span>
                  <span className="contact-page__card-value">{card.value}</span>
                </div>
              </a>
            ))}

            {/* Store Hours */}
            <div className="contact-page__hours">
              <h3>Store Hours</h3>
              {STORE_HOURS.map((h) => (
                <div key={h.day} className="contact-page__hours-row">
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <div className="contact-page__map" id="map">
        <iframe
          title="Mandala Blend Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228083.3576569513!2d75.62444785547849!3d26.88511978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FAQ */}
      <section className="contact-page__faq section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="contact-page__eyebrow">Got Questions?</span>
            <h2 className="contact-page__section-title">Frequently Asked Questions</h2>
          </motion.div>
          <div className="contact-page__faq-list">
            {faqs.map((faq) => (
              <motion.div key={faq.id} className="contact-page__faq-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                <button
                  className={`contact-page__faq-q ${openFaq === faq.id ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  id={`faq-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown className={`contact-page__faq-chevron ${openFaq === faq.id ? 'rotated' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      className="contact-page__faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="contact-page__faq-cta">
            <h3>Still Have Questions?</h3>
            <p>We're just a WhatsApp message away.</p>
            <a href={createGeneralWhatsappLink()} target="_blank" rel="noopener noreferrer" className="contact-page__whatsapp-btn" id="contact-faq-whatsapp-btn">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
