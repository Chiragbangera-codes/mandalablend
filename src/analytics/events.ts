import { trackCustomEvent } from './ga';

// 1. Homepage Events
export const trackHeroCtaClick = (): void => {
  trackCustomEvent('hero_cta_click', { section: 'hero' });
};

export const trackExploreCollections = (): void => {
  trackCustomEvent('explore_collections_click', { section: 'hero' });
};

// 2. Collections Events
export const trackCategorySelected = (category: string): void => {
  trackCustomEvent('category_selected', { category });
};

export const trackSearchPerformed = (query: string): void => {
  // Query length is tracked, but not the search query itself if it could potentially contain names/PII
  trackCustomEvent('search_performed', { query_length: query.length });
};

export const trackFilterApplied = (filterType: string, value: any): void => {
  trackCustomEvent('filter_applied', { filter_type: filterType, filter_value: String(value) });
};

export const trackProductCardClicked = (productId: string, productName: string): void => {
  trackCustomEvent('product_card_click', { product_id: productId, product_name: productName });
};

// 3. Product Details Events
export const trackProductViewed = (productId: string, productName: string, price: number): void => {
  trackCustomEvent('product_view', { product_id: productId, product_name: productName, price });
};

export const trackWhatsAppOrderClicked = (productId: string, productName: string, price: number, size?: string, qty?: number): void => {
  trackCustomEvent('whatsapp_order_click', {
    product_id: productId,
    product_name: productName,
    price,
    selected_size: size || 'default',
    quantity: qty || 1,
  });
};

export const trackShareButtonClicked = (productId: string, platform: string): void => {
  trackCustomEvent('share_button_click', { product_id: productId, platform });
};

export const trackProductImageViewed = (productId: string, index: number): void => {
  trackCustomEvent('product_image_viewed', { product_id: productId, image_index: index });
};

// 4. Gallery Events
export const trackGalleryImageOpened = (itemId: string, title: string): void => {
  trackCustomEvent('gallery_image_opened', { item_id: itemId, title });
};

export const trackGalleryCategoryChanged = (category: string): void => {
  trackCustomEvent('gallery_category_changed', { category });
};

// 5. Contact Events
export const trackContactWhatsAppClick = (): void => {
  trackCustomEvent('contact_whatsapp_click');
};

export const trackContactEmailClick = (): void => {
  trackCustomEvent('contact_email_click');
};

export const trackContactInstagramClick = (): void => {
  trackCustomEvent('contact_instagram_click');
};

// 6. Global Events
export const trackExternalLinkClick = (url: string, label: string): void => {
  trackCustomEvent('external_link_click', { destination_url: url, link_label: label });
};

export const trackLogoClick = (location: 'navbar' | 'footer'): void => {
  trackCustomEvent('logo_click', { location });
};
