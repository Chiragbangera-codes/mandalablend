import React from 'react';
import './PageLoader.scss';

/**
 * PageLoader
 * ──────────
 * Displayed by the Suspense boundary while a route chunk is downloading.
 *
 * Design: rotating mandala-ring arc + three pulsing dots.
 * Matches the Mandala Blend wine-color palette.
 * Respects prefers-reduced-motion.
 * Uses role="status" + aria-label so screen readers announce it.
 */
const PageLoader: React.FC = () => (
  <div
    className="page-loader"
    role="status"
    aria-label="Loading page, please wait"
    aria-live="polite"
  >
    {/* Rotating ring with counter-rotating ornament */}
    <div className="page-loader__ring" aria-hidden="true">
      <span className="page-loader__ornament">✦</span>
    </div>

    {/* Three pulsing dots */}
    <div className="page-loader__dots" aria-hidden="true">
      <span className="page-loader__dot" />
      <span className="page-loader__dot" />
      <span className="page-loader__dot" />
    </div>
  </div>
);

export default PageLoader;
