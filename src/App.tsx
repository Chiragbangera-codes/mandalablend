import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import AnnouncementBar from '@/components/layout/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import AppRoutes from '@/routes/AppRoutes';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import { initAnalytics } from '@/analytics';
import { usePageTracking } from '@/hooks/usePageTracking';
import { fabFloat } from '@/animations/variants';
import '@/styles/global.scss';
import './App.scss';

// Scroll to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  usePageTracking(); // Track route pageview

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    initAnalytics(); // Initialize GA4 + Clarity + Web Vitals
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <AnnouncementBar />
        <Navbar />
        <main className="app__main" id="main-content">
          <AppRoutes />
        </main>
        <Footer />

        {/* Chapter 2.13 / 10.19 — Floating WhatsApp FAB */}
        <motion.a
          href={createGeneralWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab"
          id="whatsapp-fab-btn"
          aria-label="Order on WhatsApp — opens WhatsApp chat"
          animate={fabFloat.animate}
          whileHover={{ scale: 1.08, animationPlayState: 'paused' }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp aria-hidden="true" />
          <span className="whatsapp-fab__tooltip" aria-hidden="true">
            Order on WhatsApp
          </span>
        </motion.a>
      </div>
    </BrowserRouter>
  );
};

export default App;
