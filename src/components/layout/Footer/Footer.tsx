import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { INSTAGRAM_URL, FACEBOOK_URL, PINTEREST_URL, EMAIL, PHONE, ADDRESS } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__mandala-top">✦ ❋ ✦</div>
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__col footer__brand">
          <div className="footer__logo">
            <img src="/logo-white.png?v=2" alt="The Mandala Blend" className="footer__logo-img" />
          </div>
          <p className="footer__brand-desc">
            Premium handmade mandala art crafted with love. Every piece is unique, every stroke is intentional.
          </p>
          <div className="footer__socials">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href={createGeneralWhatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterest /></a>
          </div>
        </div>

        {/* Quick Links */}
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

        {/* Collections */}
        <div className="footer__col">
          <h3 className="footer__heading">Collections</h3>
          <ul className="footer__list">
            <li><Link to="/collections?cat=frames">Mandala Frames</Link></li>
            <li><Link to="/collections?cat=keychains">Keychains</Link></li>
            <li><Link to="/collections?cat=name-boards">Name Boards</Link></li>
            <li><Link to="/collections?cat=customized-gifts">Customized Gifts</Link></li>
            <li><Link to="/collections?cat=new-arrivals">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__heading">Get In Touch</h3>
          <ul className="footer__contact-list">
            <li>
              <MdPhone />
              <a href={`tel:${PHONE}`}>{PHONE}</a>
            </li>
            <li>
              <MdEmail />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <MdLocationOn />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <FaWhatsapp />
              <a href={createGeneralWhatsappLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__col footer__newsletter">
          <h3 className="footer__heading">Stay Updated</h3>
          <p>Get notified about new designs, offers and more.</p>
          <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Mandala Blend. All rights reserved. Made with ❤️ in India.</p>
          <p>Handcrafted Art · Pan India Delivery · 100% Original</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
