import React, { useState, useCallback } from 'react';
import { LazyImageProps } from './LazyImage.types';
import './LazyImage.scss';

const DEFAULT_FALLBACK = '/images/hero-mandala.png';

/**
 * LazyImage
 * ─────────
 * Drop-in replacement for every native <img> in Mandala Blend.
 *
 * Features:
 *  • Lazy / eager loading (native browser API)
 *  • Priority loading (fetchPriority="high") for LCP candidates
 *  • Animated shimmer skeleton placeholder
 *  • Blur (8px → 0) + opacity (0 → 1) reveal on load
 *  • Fallback image on error
 *  • Optional hideOnError for text-fallback scenarios (footer logo)
 *  • decoding="async" by default — never blocks main thread
 *  • Zero layout shift — wrapper is sized by parent CSS, not the image
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  style,
  onClick,
  loading = 'lazy',
  priority = false,
  fetchPriority = 'auto',
  decoding = 'async',
  objectFit = 'cover',
  sizes,
  srcSet,
  fallbackSrc = DEFAULT_FALLBACK,
  hideOnError = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Derive effective loading attributes from priority flag
  const effectiveLoading: 'lazy' | 'eager' = priority ? 'eager' : loading;
  const effectiveFetchPriority: 'high' | 'low' | 'auto' = priority ? 'high' : fetchPriority;
  const effectiveDecoding: 'async' | 'sync' | 'auto' = decoding;

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    if (!errored) {
      setErrored(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
        // Reset loaded so the fallback also gets the fade-in
        setLoaded(false);
      }
    }
  }, [errored, fallbackSrc]);

  // If hideOnError is set and the image failed with no fallback, render nothing
  if (hideOnError && errored && !fallbackSrc) {
    return null;
  }

  const wrapperStyle: React.CSSProperties = {
    width,
    height,
    '--lazy-img-fit': objectFit,
    ...style,
  } as React.CSSProperties;

  return (
    <div
      className={`lazy-img${className ? ` ${className}` : ''}`}
      style={wrapperStyle}
      onClick={onClick}
      // Preserve aria semantics — the inner img carries all accessibility
    >
      {/* Skeleton placeholder — visible until image loads */}
      <div
        className={`lazy-img__skeleton${loaded ? ' lazy-img__skeleton--hidden' : ''}`}
        aria-hidden="true"
      />

      {/* Actual image */}
      <img
        src={imgSrc}
        alt={alt}
        className={`lazy-img__img${loaded ? ' lazy-img__img--loaded' : ''}`}
        loading={effectiveLoading}
        // fetchpriority is a lowercase HTML attribute; React accepts it as-is in lowercase
        // We use the string form to avoid TS conflicts across React versions
        {...({ fetchpriority: effectiveFetchPriority } as React.ImgHTMLAttributes<HTMLImageElement>)}
        decoding={effectiveDecoding}
        sizes={sizes}
        srcSet={srcSet}
        onLoad={handleLoad}
        onError={handleError}
        // Intentionally no width/height attrs here — sizing is driven by
        // the wrapper's CSS class, which guarantees CLS = 0
      />
    </div>
  );
};

export default LazyImage;
