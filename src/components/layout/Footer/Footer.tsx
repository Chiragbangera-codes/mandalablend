import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { INSTAGRAM_URL, GMAIL_URL, EMAIL, PHONE } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import LazyImage from '@/components/common/LazyImage';
import './Footer.scss';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Column 1: Brand */}
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <LazyImage
              src="/logo-white.png?v=2"
              alt="The Mandala Blend"
              className="footer__logo-img"
              loading="lazy"
              hideOnError
              fallbackSrc=""
            />
            <span className="footer__brand-name">Mandala Blend</span>
          </div>
          <p className="footer__brand-desc">
            Premium handmade mandala art crafted with love from Mangalore, India.
            Every piece is unique, every stroke is intentional.
          </p>
          <div className="footer__socials">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="footer__social-link"
            >
              <FaInstagram />
            </a>
            <a
              href={GMAIL_URL}
              aria-label="Email us on Gmail"
              className="footer__social-link"
            >
              <MdEmail />
            </a>
            <a
              href={createGeneralWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="footer__social-link footer__social-link--whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Collections */}
        <div className="footer__col">
          <h3 className="footer__heading">Collections</h3>
          <ul className="footer__list">
            <li><Link to="/collections?cat=frames">Mandala Frames</Link></li>
            <li><Link to="/collections?cat=keychains">Keychains</Link></li>
            <li><Link to="/collections?cat=name-boards">Name Boards</Link></li>
            <li><Link to="/collections?cat=customized-gifts">Customized Gifts</Link></li>
          </ul>
        </div>

        {/* Column 4: Customer Care */}
        <div className="footer__col">
          <h3 className="footer__heading">Customer Care</h3>
          <ul className="footer__list">
            <li><a href={createGeneralWhatsappLink()} target="_blank" rel="noopener noreferrer">Order on WhatsApp</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={`tel:${PHONE}`}>{PHONE}</a></li>
            <li><Link to="/contact">Custom Orders</Link></li>
            <li><Link to="/contact#faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div className="footer__col footer__col--newsletter">
          <h3 className="footer__heading">Stay Connected</h3>
          <p className="footer__newsletter-desc">
            Get notified about new designs, festivals, and exclusive offers.
          </p>
          {subscribed ? (
            <div className="footer__subscribed">
              <span>✓</span> Thank you for subscribing!
            </div>
          ) : (
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Mandala Blend. All rights reserved. Developed by Bangera-Coders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
