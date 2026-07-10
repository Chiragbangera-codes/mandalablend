import { trackCustomEvent } from './ga';

export const reportWebVitals = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // 1. Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const shiftEntry = entry as any;
        if (!shiftEntry.hadRecentInput) {
          clsValue += shiftEntry.value;
        }
      }
    });

    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // Report metric periodically or on page hide
    const sendCls = () => {
      if (clsValue > 0) {
        trackCustomEvent('web_vitals_cls', { value: clsValue });
      }
    };
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        sendCls();
      }
    });
  } catch (e) {
    // Fail silently so as not to affect application execution
  }

  // 2. Largest Contentful Paint (LCP)
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      trackCustomEvent('web_vitals_lcp', { value: lastEntry.startTime });
    });

    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    // Fail silently
  }

  // 3. Interaction to Next Paint (INP) / First Input Delay (FID) fallback
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const firstInput = entryList.getEntries()[0];
      const delay = (firstInput as any).processingStart - firstInput.startTime;
      trackCustomEvent('web_vitals_fid', { value: delay });
    });

    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    // Fail silently
  }
};
