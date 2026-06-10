import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('@/pages/Home/Home'));
const Collections = lazy(() => import('@/pages/Collections/Collections'));
const Product = lazy(() => import('@/pages/Product/Product'));
const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
const About = lazy(() => import('@/pages/About/About'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));

const NotFound = lazy(() => Promise.resolve({
  default: () => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '80vh', textAlign: 'center', paddingTop: '120px'
    }}>
      <div style={{ fontSize: '5rem' }}>🌸</div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: '#5A1433', marginBottom: '16px' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        This page seems to have wandered off like a mandala petal.
      </p>
      <a href="/" style={{
        padding: '12px 28px', background: '#5A1433', color: '#fff',
        borderRadius: '999px', fontWeight: '600', textDecoration: 'none'
      }}>
        Back to Home
      </a>
    </div>
  )
}));

const Loader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <div style={{ fontSize: '3rem', animation: 'spin 1s linear infinite' }}>🌸</div>
  </div>
);

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<Product />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
