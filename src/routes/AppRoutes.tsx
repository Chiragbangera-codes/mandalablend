import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/common/PageLoader';
import ErrorBoundary from '@/components/common/ErrorBoundary';

// ── Lazy page imports ────────────────────────────────────────
// Each page becomes its own JS chunk, downloaded only when first visited.
// Chunk names are set via Rollup magic comments (respected by Vite).
const Home = lazy(() =>
  import(/* @vite-chunk-name: "page-home" */ '@/pages/Home/Home')
);
const Collections = lazy(() =>
  import(/* @vite-chunk-name: "page-collections" */ '@/pages/Collections/Collections')
);
const Product = lazy(() =>
  import(/* @vite-chunk-name: "page-product" */ '@/pages/Product/Product')
);
const Gallery = lazy(() =>
  import(/* @vite-chunk-name: "page-gallery" */ '@/pages/Gallery/Gallery')
);
const About = lazy(() =>
  import(/* @vite-chunk-name: "page-about" */ '@/pages/About/About')
);
const Contact = lazy(() =>
  import(/* @vite-chunk-name: "page-contact" */ '@/pages/Contact/Contact')
);

// 404 — inline, no chunk needed (tiny, rarely hit)
const NotFound = lazy(() =>
  Promise.resolve({
    default: () => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          paddingTop: '120px',
        }}
      >
        <div style={{ fontSize: '5rem' }}>🌸</div>
        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3rem',
            color: '#7A1738',
            marginBottom: '16px',
          }}
        >
          Page Not Found
        </h1>
        <p style={{ color: '#6F6F6F', marginBottom: '24px' }}>
          This page seems to have wandered off like a mandala petal.
        </p>
        <Link
          to="/"
          style={{
            padding: '12px 28px',
            background: '#7A1738',
            color: '#fff',
            borderRadius: '999px',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Back to Home
        </Link>
      </div>
    ),
  })
);

// ── Router ───────────────────────────────────────────────────
const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    // Single ErrorBoundary — catches chunk load failures and runtime errors
    // for every lazy-loaded page. Renders branded error UI + Retry / Go Home.
    <ErrorBoundary>
      {/*
       * Single Suspense boundary — PageLoader appears only while a
       * JS chunk is being downloaded. Once loaded, the chunk is cached
       * and subsequent visits skip the loader entirely.
       */}
      <Suspense fallback={<PageLoader />}>
        {/*
         * AnimatePresence + key={pathname} enables Framer Motion page
         * exit animations before the next page mounts.
         * mode="wait" ensures the outgoing page unmounts before
         * the incoming page appears.
         */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                   element={<Home />} />
            <Route path="/collections"        element={<Collections />} />
            <Route path="/collections/:slug"  element={<Product />} />
            <Route path="/gallery"            element={<Gallery />} />
            <Route path="/about"              element={<About />} />
            <Route path="/contact"            element={<Contact />} />
            <Route path="*"                   element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
