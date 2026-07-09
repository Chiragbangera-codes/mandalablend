import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiChevronDown, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { NAV_LINKS, INSTAGRAM_URL, GMAIL_URL, PRODUCT_CATEGORIES } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import MobileMenu from '../MobileMenu/MobileMenu';
import LazyImage from '@/components/common/LazyImage';
import './Navbar.scss';

const collectionDropdown = PRODUCT_CATEGORIES.filter(c => c.value !== 'all').map(c => ({
  label: c.label,
  path: `/collections?cat=${c.value}`,
}));

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Mandala Blend — Home">
            <LazyImage
              src="/logo.png?v=2"
              alt="The Mandala Blend — Handcrafted with Love"
              className="navbar__logo-img"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              link.label === 'Collections' ? (
                <li key={link.path} className="navbar__item navbar__item--dropdown" ref={dropdownRef}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__link navbar__link--dropdown-trigger ${isActive ? 'navbar__link--active' : ''}`
                    }
                    end={false}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`navbar__chevron ${dropdownOpen ? 'navbar__chevron--open' : ''}`}
                      onMouseEnter={() => setDropdownOpen(true)}
                    />
                  </NavLink>

                  {/* Dropdown trigger area */}
                  <div
                    className="navbar__dropdown-trigger"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="navbar__dropdown"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                          {collectionDropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="navbar__dropdown-item"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              ) : (
                <li key={link.path} className="navbar__item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                    end={link.path === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            ))}
          </ul>

          {/* Right: Social + WhatsApp */}
          <div className="navbar__right">
            <div className="navbar__social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__social-icon"
                aria-label="Follow on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={GMAIL_URL}
                className="navbar__social-icon"
                aria-label="Email us on Gmail"
              >
                <MdEmail />
              </a>
            </div>

            <a
              href={createGeneralWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__whatsapp"
              id="navbar-whatsapp-btn"
            >
              <FaWhatsapp />
              <span>Order Now</span>
            </a>

            {/* Hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              id="navbar-hamburger-btn"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
