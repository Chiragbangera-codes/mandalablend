declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = (): void => {
  if (!GA_ID) {
    return;
  }

  // Prevent duplicate script injection
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    send_page_view: false, // Handled manually on route changes to ensure SPA accuracy
  });
};

export const trackPageView = (path: string): void => {
  if (GA_ID && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      send_to: GA_ID,
    });
  }
};

export const trackCustomEvent = (eventName: string, params: Record<string, any> = {}): void => {
  if (GA_ID && window.gtag) {
    // Exclude any PII from parameters as mandated by security rules
    const cleanParams = { ...params };
    delete cleanParams.name;
    delete cleanParams.phone;
    delete cleanParams.email;
    delete cleanParams.message;
    delete cleanParams.customWord;

    window.gtag('event', eventName, cleanParams);
  }
};
