import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: string; // e.g., "1500+" or "4.8" or "100%"
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    // Parse the value into numeric target and any suffix/prefix
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseFloat(numMatch[0]);
    const suffix = value.replace(numMatch[0], '');
    const isFloat = numMatch[0].includes('.');

    const start = 0;
    const duration = 1500; // 1.5 seconds animation duration
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      const current = start + (target - start) * easeProgress;

      if (isFloat) {
        setDisplayValue(current.toFixed(1) + suffix);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

export default Counter;
