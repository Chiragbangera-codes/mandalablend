import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/analytics';

export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Track page views dynamically on route changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};
