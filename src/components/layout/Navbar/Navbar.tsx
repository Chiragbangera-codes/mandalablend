import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <img
              src="/logo.png?v=2"
              alt="The Mandala Blend — Handcrafted with Love"
              className="navbar__logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
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
            ))}
          </ul>

          {/* WhatsApp CTA */}
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
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
