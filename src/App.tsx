import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import AnnouncementBar from '@/components/layout/AnnouncementBar/AnnouncementBar';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import AppRoutes from '@/routes/AppRoutes';
import { createGeneralWhatsappLink } from '@/services/whatsapp';
import '@/styles/global.scss';
import './App.scss';

const App: React.FC = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <AnnouncementBar />
        <Navbar />
        <main className="app__main">
          <AppRoutes />
        </main>
        <Footer />

        {/* Sticky WhatsApp FAB */}
        <a
          href={createGeneralWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab"
          id="whatsapp-fab-btn"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
          <span className="whatsapp-fab__tooltip">Order on WhatsApp</span>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
