import React from 'react';

export interface LazyImageProps {
  /** Image source URL — required */
  src: string;
  /** Alt text — required for accessibility. Use "" for decorative images */
  alt: string;

  /** Additional class name applied to the wrapper element */
  className?: string;
  /** Inline width for the wrapper */
  width?: number | string;
  /** Inline height for the wrapper */
  height?: number | string;
  /** Inline styles applied to the wrapper element */
  style?: React.CSSProperties;
  /** Click handler forwarded to the wrapper element */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Native loading attribute.
   * Defaults to "lazy" for off-screen images.
   * Use "eager" for images that are immediately visible.
   */
  loading?: 'lazy' | 'eager';

  /**
   * Shorthand priority flag.
   * When true: loading="eager", fetchPriority="high", decoding="async".
   * Designed for LCP candidates (hero image, primary logo).
   */
  priority?: boolean;

  /**
   * fetchPriority hint forwarded to the browser.
   * Defaults to "auto". Set to "high" for above-the-fold critical images.
   */
  fetchPriority?: 'high' | 'low' | 'auto';

  /**
   * decoding strategy.
   * Defaults to "async" so image decode never blocks the main thread.
   */
  decoding?: 'async' | 'sync' | 'auto';

  /**
   * CSS object-fit applied to the inner <img>.
   * Defaults to "cover".
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

  /** Responsive sizes attribute forwarded to <img> */
  sizes?: string;
  /** Responsive srcSet attribute forwarded to <img> */
  srcSet?: string;

  /**
   * URL to display when the image fails to load.
   * Defaults to "/images/hero-mandala.webp".
   * Pass an empty string to suppress fallback (e.g. footer logo).
   */
  fallbackSrc?: string;

  /**
   * When true, hides the entire component if the image fails to load.
   * Designed for the footer logo which falls back to text.
   */
  hideOnError?: boolean;
}
