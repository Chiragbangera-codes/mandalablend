export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  material: string;
  customizable: boolean;
  featured: boolean;
  bestSeller: boolean;
  deliveryTime: string;
  rating: number;
  reviewCount: number;
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'royal-mandala-frame-12x12',
    name: 'Royal Mandala Frame',
    category: 'frames',
    price: 1299,
    originalPrice: 1599,
    description: 'A stunning hand-drawn mandala artwork mounted in a premium wooden frame. Each piece is hand-crafted with intricate detail, using archival-quality ink on 300 GSM cotton paper. A perfect centerpiece for any room.',
    images: ['/images/product-frame-1.jpg', '/images/product-frame-2.jpg', '/images/product-frame-3.jpg'],
    sizes: ['8x8 inch', '12x12 inch', '16x16 inch'],
    material: 'Cotton paper, Wooden frame, Archival ink',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 87,
    specifications: {
      'Paper Weight': '300 GSM Cotton',
      'Ink Type': 'Archival Pigment Ink',
      'Frame': 'Solid Wood',
      'Glass': 'Anti-glare UV',
      'Hanging': 'Ready to hang',
    },
  },
  {
    id: 'p2',
    slug: 'lotus-mandala-keychain',
    name: 'Lotus Mandala Keychain',
    category: 'keychains',
    price: 299,
    originalPrice: 399,
    description: 'A beautifully crafted lotus mandala keychain, hand-painted with precision. Made from premium resin with embedded mandala artwork. Lightweight, durable, and a perfect gift.',
    images: ['/images/product-keychain-1.jpg', '/images/product-keychain-2.jpg'],
    sizes: ['Standard (5cm)', 'Large (7cm)'],
    material: 'Premium resin, Hand-painted',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 142,
    specifications: {
      'Material': 'UV Resin',
      'Size': '5cm diameter',
      'Finish': 'High gloss',
      'Chain': 'Stainless steel',
    },
  },
  {
    id: 'p3',
    slug: 'personalized-mandala-name-board',
    name: 'Personalized Mandala Name Board',
    category: 'name-boards',
    price: 899,
    originalPrice: 1199,
    description: 'A custom wooden name board adorned with intricate mandala patterns. Your name beautifully embedded within traditional mandala art. Perfect for home décor, office spaces, or as a thoughtful gift.',
    images: ['/images/product-nameboard-1.jpg', '/images/product-nameboard-2.jpg'],
    sizes: ['Small (10x6 inch)', 'Medium (14x8 inch)', 'Large (18x10 inch)'],
    material: 'MDF wood, Acrylic paint, Mandala art',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '7-10 business days',
    rating: 4.9,
    reviewCount: 63,
    specifications: {
      'Base': 'Premium MDF',
      'Finish': 'Matte anti-dust',
      'Personalization': 'Any name / message',
    },
  },
  {
    id: 'p4',
    slug: 'mandala-gift-set-anniversary',
    name: 'Mandala Anniversary Gift Set',
    category: 'customized-gifts',
    price: 1799,
    description: 'A curated anniversary gift set featuring a custom mandala frame, a personalized keychain, and a handwritten greeting card. Packaged in a premium gift box.',
    images: ['/images/product-giftset-1.jpg', '/images/product-giftset-2.jpg'],
    sizes: ['Standard Set', 'Premium Set'],
    material: 'Assorted premium materials',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '7-10 business days',
    rating: 5.0,
    reviewCount: 38,
    specifications: {
      'Contents': 'Frame + Keychain + Card',
      'Packaging': 'Premium gift box',
      'Personalization': 'Names + Date',
    },
  },
  {
    id: 'p5',
    slug: 'geometric-mandala-frame-8x8',
    name: 'Geometric Mandala Mini Frame',
    category: 'new-arrivals',
    price: 799,
    description: 'Our newest addition — a compact 8x8 geometric mandala frame perfect for desk displays and small wall spaces. Hand-drawn with ultra-fine detail.',
    images: ['/images/product-frame-mini-1.jpg', '/images/product-frame-mini-2.jpg'],
    sizes: ['8x8 inch'],
    material: 'Cotton paper, Wooden frame',
    customizable: false,
    featured: false,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.7,
    reviewCount: 24,
    specifications: {
      'Style': 'Geometric mandala',
      'Frame': 'Natural wood',
    },
  },
  {
    id: 'p6',
    slug: 'floral-mandala-frame-16x16',
    name: 'Floral Mandala Grand Frame',
    category: 'frames',
    price: 2199,
    description: 'A grand 16x16 floral mandala piece — the crown jewel of any living room wall. Meticulously hand-drawn over 40+ hours with layered floral mandala patterns.',
    images: ['/images/product-frame-large-1.jpg', '/images/product-frame-large-2.jpg'],
    sizes: ['16x16 inch', '20x20 inch'],
    material: 'Cotton paper, Solid teak frame, UV glass',
    customizable: true,
    featured: false,
    bestSeller: false,
    deliveryTime: '10-14 business days',
    rating: 4.9,
    reviewCount: 19,
    specifications: {
      'Drawing Time': '40+ hours',
      'Frame': 'Solid Teak wood',
      'Glass': 'UV protective',
    },
  },
  {
    id: 'p7',
    slug: 'set-of-6-mandala-keychains',
    name: 'Set of 6 Mandala Keychains',
    category: 'keychains',
    price: 1299,
    description: 'A beautiful gift set of 6 unique mandala keychains — each with a different mandala pattern. Perfect as return gifts for weddings, birthdays, and corporate events.',
    images: ['/images/product-keychains-set-1.jpg'],
    sizes: ['Set of 6'],
    material: 'Premium resin, Hand-painted',
    customizable: true,
    featured: false,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.8,
    reviewCount: 55,
    specifications: {
      'Quantity': '6 keychains',
      'Each size': '5cm diameter',
    },
  },
  {
    id: 'p8',
    slug: 'mandala-welcome-name-board',
    name: 'Mandala Welcome Name Board',
    category: 'name-boards',
    price: 1199,
    description: 'A gorgeous "Welcome" name board for your home entrance, adorned with handpainted mandala borders. Makes your front door truly welcoming.',
    images: ['/images/product-welcome-1.jpg'],
    sizes: ['Medium (16x8 inch)', 'Large (20x10 inch)'],
    material: 'MDF, Acrylic, Mandala art',
    customizable: true,
    featured: false,
    bestSeller: false,
    deliveryTime: '7-10 business days',
    rating: 4.7,
    reviewCount: 31,
    specifications: {
      'Style': 'Welcome board',
      'Finish': 'Weather resistant',
    },
  },
  {
    id: 'p9',
    slug: 'mandala-birthday-gift-hamper',
    name: 'Birthday Mandala Gift Hamper',
    category: 'customized-gifts',
    price: 1499,
    description: 'A special birthday gift hamper with a customized mandala frame (name + age), 2 keychains, and a personalized greeting card in a premium gift box with tissue wrapping.',
    images: ['/images/product-birthday-1.jpg'],
    sizes: ['Standard'],
    material: 'Assorted premium materials',
    customizable: true,
    featured: false,
    bestSeller: false,
    deliveryTime: '7-10 business days',
    rating: 4.9,
    reviewCount: 42,
    specifications: {
      'Contents': 'Frame + 2 Keychains + Card',
      'Packaging': 'Gift box + tissue',
    },
  },
  {
    id: 'p10',
    slug: 'star-mandala-new-arrival',
    name: 'Star Mandala Night Frame',
    category: 'new-arrivals',
    price: 1099,
    description: 'Our latest creation — a celestial star mandala artwork on a black background, creating a stunning night-sky effect. Truly one of a kind.',
    images: ['/images/product-star-1.jpg'],
    sizes: ['10x10 inch', '14x14 inch'],
    material: 'Black cotton paper, Gel pen art, Wooden frame',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 5.0,
    reviewCount: 11,
    specifications: {
      'Background': 'Black cotton paper',
      'Medium': 'White gel pen + gold ink',
    },
  },
];

export const featuredProducts = products.filter(p => p.featured);
export const bestSellers = products.filter(p => p.bestSeller);

export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  category === 'all' ? products : products.filter(p => p.category === category);

export const getRelatedProducts = (product: Product, limit = 5) =>
  products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
