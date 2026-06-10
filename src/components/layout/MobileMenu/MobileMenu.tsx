import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { NAV_LINKS } from '@/utils/constants';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import './MobileMenu.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="mobile-menu__header">
              <div className="mobile-menu__logo">
                <img src="/logo-white.png?v=2" alt="The Mandala Blend" className="mobile-menu__logo-img" />
              </div>
              <button className="mobile-menu__close" onClick={onClose} aria-label="Close menu">
                <FiX />
              </button>
            </div>

            {/* Mandala decoration */}
            <div className="mobile-menu__decor">✦</div>

            {/* Links */}
            <nav className="mobile-menu__nav">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                    }
                    onClick={onClose}
                    end={link.path === '/'}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <a
              href={createGeneralWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__whatsapp"
              onClick={onClose}
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>

            {/* Social */}
            <div className="mobile-menu__social">
              <a href="https://www.instagram.com/themandalablend?igsh=OGNyd2U1bDRzOXd1" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={createGeneralWhatsappLink()} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
