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
  sizePrices?: Record<string, number>;
}

export const products: Product[] = [


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
  {
    id: 'p11',
    slug: 'fireglow-mandala-keychain',
    name: 'Fireglow Dot Mandala Keychain',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    description: 'A vibrant hand-painted dot mandala keychain featuring warm yellow, orange, and fire red hues on a deep black base. Finished with a high-gloss protective resin coat.',
    images: ['/images/keychain-fireglow.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 42,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p12',
    slug: 'teal-gold-mandala-keychain',
    name: 'Teal & Gold Dot Mandala Keychain',
    category: 'keychains',
    price: 379,
    originalPrice: 499,
    description: 'An elegant hand-painted keychain featuring a black base adorned with radiating concentric circles of teal and gold metallic dots. Completed with a gold crescent top highlight.',
    images: ['/images/keychain-teal-gold.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 29,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p13',
    slug: 'evil-eye-custom-keychain',
    name: 'Evil Eye Custom Name Keychain',
    category: 'keychains',
    price: 399,
    originalPrice: 549,
    description: 'Protect your keys with style. Features a hand-painted blue evil-eye lotus mandala design with your name custom lettered in the center. Finished with high gloss resin.',
    images: ['/images/keychain-evil-eye-name.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Custom lettering, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 5.0,
    reviewCount: 56,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Personalization': 'Custom name'
    }
  },
  {
    id: 'p14',
    slug: 'sahasrara-red-mandala-keychain',
    name: 'Sahasrara Red Dot Mandala Keychain',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    description: 'A beautiful mandala keychain featuring concentric rings of vibrant red, white, and black dot patterns, evoking energy and focus.',
    images: ['/images/keychain-sahasrara-red.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.7,
    reviewCount: 18,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p15',
    slug: 'azure-bloom-mandala-keychain',
    name: 'Azure Bloom Mandala Keychain',
    category: 'keychains',
    price: 379,
    originalPrice: 499,
    description: 'A gorgeous concentric mandala blossom keychain in rich shades of blue, turquoise, and white. Protects your keys and brings calm energy.',
    images: ['/images/keychain-azure-bloom.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 31,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p16',
    slug: 'gold-white-eclipse-keychain',
    name: 'Gold & White Eclipse Keychain',
    category: 'keychains',
    price: 379,
    originalPrice: 499,
    description: 'A beautiful contrast keychain painted on a solid black base with symmetrical concentric rings of fine white and warm gold metallic dotting.',
    images: ['/images/keychain-gold-white.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 22,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p17',
    slug: 'purple-blossom-keychain',
    name: 'Purple Blossom Dot Mandala Keychain',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    description: 'A stunning concentric mandala keychain with deep purple, violet, and crisp white dotting details. Radiates calming spiritual vibes.',
    images: ['/images/keychain-purple-blossom.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: false,
    featured: true,
    bestSeller: true,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 15,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p18',
    slug: 'sunset-ochre-keychain',
    name: 'Sunset Ochre Mandala Keychain',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    description: 'A beautiful mandala keychain featuring concentric ochre, terracotta, earth brown, and sand yellow dot patterns, bringing warmth and grounding energy.',
    images: ['/images/keychain-sunset-ochre.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 12,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p19',
    slug: 'emerald-garden-keychain',
    name: 'Emerald Garden Mandala Keychain',
    category: 'keychains',
    price: 379,
    originalPrice: 499,
    description: 'A gorgeous keychain painted with shades of emerald green, olive green, fresh mint, and brilliant gold dot details. Evokes nature and prosperity.',
    images: ['/images/keychain-emerald-garden.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 19,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p20',
    slug: 'monochrome-zen-keychain',
    name: 'Monochrome Zen Mandala Keychain',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    description: 'A minimalist dot mandala keychain with balanced black, slate grey, and pure white concentric dots. Designed for calm and concentration.',
    images: ['/images/keychain-monochrome-zen.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 5.0,
    reviewCount: 8,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p21',
    slug: 'lavender-fields-keychain',
    name: 'Lavender Fields Mandala Keychain',
    category: 'keychains',
    price: 379,
    originalPrice: 499,
    description: 'A soothing mandala keychain hand-painted with concentric rings of lavender, lilac, magenta, and silver metallic highlights.',
    images: ['/images/keychain-lavender-fields.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 23,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p22',
    slug: 'sunset-rose-keychain',
    name: 'Sunset Rose Mandala Keychain',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    description: 'A delicate mandala keychain featuring layers of rose pink, peach, and metallic gold dotting patterns. Brings soft, loving energy to your keys.',
    images: ['/images/keychain-sunset-rose.png'],
    sizes: ['Standard (5cm)'],
    material: 'Wood base, Acrylic paint, Premium resin',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 14,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Coat': 'High gloss resin',
      'Chain': 'Stainless steel'
    }
  },
  {
    id: 'p23',
    slug: 'marigold-ochre-photo-frame',
    name: 'Marigold Ochre Customized Photo Frame',
    category: 'frames',
    price: 250,
    description: 'A beautiful customized wall-hanging frame featuring hand-painted marigold and ochre concentric mandala artwork surrounding a central space where your personalized photo is mounted. Straight design ready to be hung on your wall. Price varies based on size selected.',
    images: ['/images/photoframe-marigold-ochre.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF base, acrylics, high-gloss protective resin coat',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 24,
    specifications: {
      'Frame Type': 'Custom Photo Frame',
      'Mounting': 'Wall-mount hook included',
      'Customization': 'Centered photo placeholder',
      'Finish': 'Glossy resin finish'
    },
    sizePrices: {
      '4 inch': 250,
      '6 inch': 500,
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p24',
    slug: 'forest-blush-photo-frame',
    name: 'Forest Blush Customized Photo Frame',
    category: 'frames',
    price: 250,
    description: 'A beautiful customized wall-hanging frame featuring hand-painted forest green and blush pink concentric mandala artwork surrounding a central space where your personalized photo is mounted. Straight design ready to be hung on your wall. Price varies based on size selected.',
    images: ['/images/photoframe-forest-blush.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF base, acrylics, high-gloss protective resin coat',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.8,
    reviewCount: 19,
    specifications: {
      'Frame Type': 'Custom Photo Frame',
      'Mounting': 'Wall-mount hook included',
      'Customization': 'Centered photo placeholder',
      'Finish': 'Glossy resin finish'
    },
    sizePrices: {
      '4 inch': 250,
      '6 inch': 500,
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p25',
    slug: 'ocean-azure-photo-frame',
    name: 'Ocean Azure Customized Photo Frame',
    category: 'frames',
    price: 250,
    description: 'A beautiful customized wall-hanging frame featuring hand-painted ocean blue and azure concentric mandala artwork surrounding a central space where your personalized photo is mounted. Straight design ready to be hung on your wall. Price varies based on size selected.',
    images: ['/images/photoframe-ocean-azure.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF base, acrylics, high-gloss protective resin coat',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 15,
    specifications: {
      'Frame Type': 'Custom Photo Frame',
      'Mounting': 'Wall-mount hook included',
      'Customization': 'Centered photo placeholder',
      'Finish': 'Glossy resin finish'
    },
    sizePrices: {
      '4 inch': 250,
      '6 inch': 500,
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p26',
    slug: 'royal-plum-photo-frame',
    name: 'Royal Plum Customized Photo Frame',
    category: 'frames',
    price: 250,
    description: 'A beautiful customized wall-hanging frame featuring hand-painted royal plum and violet concentric mandala artwork surrounding a central space where your personalized photo is mounted. Straight design ready to be hung on your wall. Price varies based on size selected.',
    images: ['/images/photoframe-royal-plum.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF base, acrylics, high-gloss protective resin coat',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 5.0,
    reviewCount: 31,
    specifications: {
      'Frame Type': 'Custom Photo Frame',
      'Mounting': 'Wall-mount hook included',
      'Customization': 'Centered photo placeholder',
      'Finish': 'Glossy resin finish'
    },
    sizePrices: {
      '4 inch': 250,
      '6 inch': 500,
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p27',
    slug: 'crimson-rust-photo-frame',
    name: 'Crimson Rust Customized Photo Frame',
    category: 'frames',
    price: 250,
    description: 'A beautiful customized wall-hanging frame featuring hand-painted crimson red and rust concentric mandala artwork surrounding a central space where your personalized photo is mounted. Straight design ready to be hung on your wall. Price varies based on size selected.',
    images: ['/images/photoframe-crimson-rust.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF base, acrylics, high-gloss protective resin coat',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.7,
    reviewCount: 11,
    specifications: {
      'Frame Type': 'Custom Photo Frame',
      'Mounting': 'Wall-mount hook included',
      'Customization': 'Centered photo placeholder',
      'Finish': 'Glossy resin finish'
    },
    sizePrices: {
      '4 inch': 250,
      '6 inch': 500,
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p28',
    slug: 'sunfire-amber-photo-frame',
    name: 'Sunfire Amber Customized Photo Frame',
    category: 'frames',
    price: 250,
    description: 'A beautiful customized wall-hanging frame featuring hand-painted sunfire amber and gold concentric mandala artwork surrounding a central space where your personalized photo is mounted. Straight design ready to be hung on your wall. Price varies based on size selected.',
    images: ['/images/photoframe-sunfire-amber.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF base, acrylics, high-gloss protective resin coat',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 27,
    specifications: {
      'Frame Type': 'Custom Photo Frame',
      'Mounting': 'Wall-mount hook included',
      'Customization': 'Centered photo placeholder',
      'Finish': 'Glossy resin finish'
    },
    sizePrices: {
      '4 inch': 250,
      '6 inch': 500,
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p29',
    slug: 'multicolor-peacock-mandala-frame',
    name: 'Multicolor Peacock Mandala Frame',
    category: 'frames',
    price: 799,
    originalPrice: 999,
    description: 'A stunning circular hand-drawn mandala frame featuring a vibrant multicolor rainbow design with peacock-feather inspired details. Ready to hang, mounted on a premium wall frame.',
    images: ['/images/fullframe-rainbow-peacock-wall.jpg'],
    sizes: ['8x8 inch', '12x12 inch', '16x16 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Gloss finish',
    customizable: false,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 45,
    specifications: {
      'Frame Style': 'Modern circular framing',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Varnish protect',
      'Mounting': 'Hanging hook & wire included'
    },
    sizePrices: {
      '8x8 inch': 799,
      '12x12 inch': 1299,
      '16x16 inch': 1999
    }
  },
  {
    id: 'p30',
    slug: 'ocean-azure-beaded-mandala-frame',
    name: 'Ocean Azure Beaded Mandala Frame',
    category: 'frames',
    price: 799,
    originalPrice: 999,
    description: 'A beautiful hand-drawn circular mandala frame styled with concentric rings of sky blue, dark azure, white, and raised metallic gold beaded details. Ready to hang on your wall.',
    images: ['/images/fullframe-ocean-azure-wall.jpg'],
    sizes: ['8x8 inch', '12x12 inch', '16x16 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Gold embellishments',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.8,
    reviewCount: 38,
    specifications: {
      'Frame Style': 'Modern circular framing',
      'Art Type': 'Beaded dot mandala',
      'Finish': 'Varnish protect',
      'Mounting': 'Hanging hook & wire included'
    },
    sizePrices: {
      '8x8 inch': 799,
      '12x12 inch': 1299,
      '16x16 inch': 1999
    }
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
