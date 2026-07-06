/**
 * Centralized Animation Variants — Mandala Blend Design System
 * Chapter 10: Motion & Animation System
 * Chapter 11: Developer Standards — import from here, never define inline
 */

import { Variants, Transition } from 'framer-motion';

// ============================================================
// 10.3 Timing System
// ============================================================
export const duration = {
  instant:  0.1,
  fast:     0.2,
  medium:   0.3,
  slow:     0.5,
  maximum:  0.7,
} as const;

// ============================================================
// 10.4 Easing System
// ============================================================
export const ease = {
  default:  'easeOut',
  page:     'easeInOut',
  hover:    'easeOut',
} as const;

// ============================================================
// 10.6 Scroll Reveal — trigger once only (never repeat)
// ============================================================
export const viewportConfig = {
  once: true,
  amount: 0.2,  // 20% visible
} as const;

// ============================================================
// Base Transitions
// ============================================================
const baseTransition: Transition = {
  duration: duration.slow,
  ease: ease.default,
};

const fastTransition: Transition = {
  duration: duration.medium,
  ease: ease.default,
};

// ============================================================
// 10.5 Page Transition
// ============================================================
export const pageTransition: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: ease.page },
  },
  exit:    {
    opacity: 0,
    transition: { duration: 0.25, ease: ease.default },
  },
};

// ============================================================
// 10.7 Hero Animations
// ============================================================
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fastTransition,
  },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.default },
  },
};

// ============================================================
// Scale In
// ============================================================
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: fastTransition,
  },
};

// ============================================================
// Stagger Container — for grids and lists
// ============================================================
export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,  // 80ms per child (Chapter 10.6)
      delayChildren: 0.05,
    },
  },
};

// ============================================================
// Hero stagger (slower for dramatic reveal)
// ============================================================
export const heroStagger: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const heroItem: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.default },
  },
};

// ============================================================
// Artwork — slides from right, 700ms (Chapter 10.7)
// ============================================================
export const artworkReveal: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.default },
  },
};

// ============================================================
// 10.16 Accordion
// ============================================================
export const accordionContent: Variants = {
  hidden:  { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: ease.default },
  },
  exit:    {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: ease.default },
  },
};

// ============================================================
// 10.14 Testimonials — stagger
// ============================================================
export const testimonialStagger: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// ============================================================
// 10.19 Floating WhatsApp
// ============================================================
export const fabFloat = {
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: ease.page,
    },
  },
};

// ============================================================
// 10.12 Gallery card hover
// ============================================================
export const galleryCardHover = {
  rest:  { scale: 1 },
  hover: {
    scale: 1.04,
    transition: { duration: 0.3, ease: ease.default },
  },
};

// ============================================================
// 10.9 Button hover
// ============================================================
export const buttonHover = {
  rest:  { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.2, ease: ease.default },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};
