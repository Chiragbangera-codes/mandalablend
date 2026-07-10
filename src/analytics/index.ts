import { initGA } from './ga';
import { initClarity } from './clarity';
import { reportWebVitals } from './webVitals';

export { trackPageView, trackCustomEvent } from './ga';
export * from './events';

export const initAnalytics = (): void => {
  try {
    initGA();
    initClarity();
    reportWebVitals();
  } catch (e) {
    console.error('[Analytics] Failed to initialize:', e);
  }
};
