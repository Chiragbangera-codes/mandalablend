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
    id: 'p4',
    slug: 'mandala-gift-set-anniversary',
    name: 'Mandala Anniversary Gift Set',
    category: 'customized-gifts',
    price: 1799,
    description: 'A curated anniversary gift set featuring a custom mandala frame, a personalized keychain, and a handwritten greeting card. Packaged in a premium gift box.',
    images: ['/images/product-anniversary-set.png'],
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
    id: 'p9',
    slug: 'mandala-birthday-gift-hamper',
    name: 'Birthday Mandala Gift Hamper',
    category: 'customized-gifts',
    price: 1499,
    description: 'A special birthday gift hamper with a customized mandala frame (name + age), 2 keychains, and a personalized greeting card in a premium gift box with tissue wrapping.',
    images: ['/images/product-birthday-hamper.png'],
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
    price: 149,
    description: 'A vibrant hand-painted dot mandala keychain featuring warm yellow, orange, and fire red hues on a deep black base. Finished with a high-gloss protective resin coat.',
    images: ['/images/keychain-fireglow.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p13',
    slug: 'evil-eye-custom-keychain',
    name: 'Evil Eye Custom Name Keychain',
    category: 'keychains',
    price: 149,
    description: 'Protect your keys with style. Features a hand-painted blue evil-eye lotus mandala design with your name custom lettered in the center. Finished with high gloss resin.',
    images: ['/images/keychain-evil-eye-name.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p14',
    slug: 'sahasrara-red-mandala-keychain',
    name: 'Sahasrara Red Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A beautiful mandala keychain featuring concentric rings of vibrant red, white, and black dot patterns, evoking energy and focus.',
    images: ['/images/keychain-sahasrara-red.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p15',
    slug: 'azure-bloom-mandala-keychain',
    name: 'Azure Bloom Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A gorgeous concentric mandala blossom keychain in rich shades of blue, turquoise, and white. Protects your keys and brings calm energy.',
    images: ['/images/keychain-azure-bloom.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p16',
    slug: 'gold-white-eclipse-keychain',
    name: 'Gold & White Eclipse Keychain',
    category: 'keychains',
    price: 149,
    description: 'A beautiful contrast keychain painted on a solid black base with symmetrical concentric rings of fine white and warm gold metallic dotting.',
    images: ['/images/keychain-gold-white.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p17',
    slug: 'purple-blossom-keychain',
    name: 'Purple Blossom Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A stunning concentric mandala keychain with deep purple, violet, and crisp white dotting details. Radiates calming spiritual vibes.',
    images: ['/images/keychain-purple-blossom.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p18',
    slug: 'sunset-ochre-keychain',
    name: 'Sunset Ochre Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A beautiful mandala keychain featuring concentric ochre, terracotta, earth brown, and sand yellow dot patterns, bringing warmth and grounding energy.',
    images: ['/images/keychain-sunset-ochre.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p19',
    slug: 'emerald-garden-keychain',
    name: 'Emerald Garden Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A gorgeous keychain painted with shades of emerald green, olive green, fresh mint, and brilliant gold dot details. Evokes nature and prosperity.',
    images: ['/images/keychain-emerald-garden.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p20',
    slug: 'monochrome-zen-keychain',
    name: 'Monochrome Zen Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A minimalist dot mandala keychain with balanced black, slate grey, and pure white concentric dots. Designed for calm and concentration.',
    images: ['/images/keychain-monochrome-zen.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p21',
    slug: 'lavender-fields-keychain',
    name: 'Lavender Fields Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A soothing mandala keychain hand-painted with concentric rings of lavender, lilac, magenta, and silver metallic highlights.',
    images: ['/images/keychain-lavender-fields.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p22',
    slug: 'sunset-rose-keychain',
    name: 'Sunset Rose Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A delicate mandala keychain featuring layers of rose pink, peach, and metallic gold dotting patterns. Brings soft, loving energy to your keys.',
    images: ['/images/keychain-sunset-rose.png'],
    sizes: ['One Side', 'Both Side'],
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
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
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
    id: 'p31',
    slug: 'azure-peacock-full-mandala-frame',
    name: 'Azure Peacock Full Mandala Frame',
    category: 'frames',
    price: 250,
    description: 'A breathtaking hand-painted full circular dot mandala featuring vibrant sky blue and cyan peacock feather petals radiating from the center, accented with raised metallic bronze-gold beaded rings and crisp white dot details. Mounted on a premium dark frame, ready to hang.',
    images: ['/images/fullframe-azure-peacock.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Gold embellishments, Gloss finish',
    customizable: false,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 5.0,
    reviewCount: 52,
    specifications: {
      'Frame Style': 'Full circular mandala wall frame',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Gloss varnish protect',
      'Mounting': 'Hanging hook & wire included'
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
    id: 'p32',
    slug: 'crimson-rose-full-mandala-frame',
    name: 'Crimson Rose Full Mandala Frame',
    category: 'frames',
    price: 250,
    description: 'An exquisite hand-painted full circular dot mandala in deep crimson red and rose gold tones, with intricate peacock feather petal patterns and raised metallic copper-gold beaded rings. A bold, passionate statement piece for any wall.',
    images: ['/images/fullframe-crimson-rose.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Copper embellishments, Gloss finish',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 34,
    specifications: {
      'Frame Style': 'Full circular mandala wall frame',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Gloss varnish protect',
      'Mounting': 'Hanging hook & wire included'
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
    id: 'p33',
    slug: 'emerald-forest-full-mandala-frame',
    name: 'Emerald Forest Full Mandala Frame',
    category: 'frames',
    price: 250,
    description: 'A lush hand-painted full circular dot mandala in rich emerald green and forest teal tones, featuring intricate peacock feather petal patterns radiating from the center with raised metallic gold beaded rings. Brings the calm of nature to your walls.',
    images: ['/images/fullframe-emerald-forest.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Gold embellishments, Gloss finish',
    customizable: false,
    featured: false,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.8,
    reviewCount: 28,
    specifications: {
      'Frame Style': 'Full circular mandala wall frame',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Gloss varnish protect',
      'Mounting': 'Hanging hook & wire included'
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
    id: 'p34',
    slug: 'violet-lavender-full-mandala-frame',
    name: 'Violet Lavender Full Mandala Frame',
    category: 'frames',
    price: 250,
    description: 'A dreamy hand-painted full circular dot mandala in rich violet purple and soft lavender tones, with peacock feather petal patterns and raised metallic silver beaded rings. A truly enchanting and meditative piece of wall art.',
    images: ['/images/fullframe-violet-lavender.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Silver embellishments, Gloss finish',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 41,
    specifications: {
      'Frame Style': 'Full circular mandala wall frame',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Gloss varnish protect',
      'Mounting': 'Hanging hook & wire included'
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
    id: 'p35',
    slug: 'sunset-amber-full-mandala-frame',
    name: 'Sunset Amber Full Mandala Frame',
    category: 'frames',
    price: 250,
    description: 'A warm and radiant hand-painted full circular dot mandala in sunset orange and amber golden tones, with intricate peacock feather petal patterns and raised metallic bronze-gold beaded rings. Instantly warms up any living space.',
    images: ['/images/fullframe-sunset-amber.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Bronze embellishments, Gloss finish',
    customizable: false,
    featured: false,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.8,
    reviewCount: 23,
    specifications: {
      'Frame Style': 'Full circular mandala wall frame',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Gloss varnish protect',
      'Mounting': 'Hanging hook & wire included'
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
    id: 'p36',
    slug: 'magenta-bloom-full-mandala-frame',
    name: 'Magenta Bloom Full Mandala Frame',
    category: 'frames',
    price: 250,
    description: 'A vibrant and striking hand-painted full circular dot mandala in rich magenta and hot pink tones, featuring peacock feather petal patterns radiating from a luminous center with raised metallic rose-gold beaded rings and white dot accents.',
    images: ['/images/fullframe-magenta-bloom.png'],
    sizes: ['4 inch', '6 inch', '8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Archival cotton paper, Wood frame, Acrylic paint, Rose-gold embellishments, Gloss finish',
    customizable: false,
    featured: false,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.7,
    reviewCount: 19,
    specifications: {
      'Frame Style': 'Full circular mandala wall frame',
      'Art Type': 'Peacock dot mandala',
      'Finish': 'Gloss varnish protect',
      'Mounting': 'Hanging hook & wire included'
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
    id: 'p37',
    slug: 'ocean-petal-dot-mandala-keychain',
    name: 'Ocean Petal Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A stunning hand-painted dot mandala keychain on a rich dark walnut-toned MDF base. Features intricate petal and teardrop patterns radiating outward in vibrant teal, turquoise, and crisp white dots. A tiny glowing light-blue center dot anchors the design. Finished with a high-gloss resin coat for lasting beauty.',
    images: ['/images/blue_keychain.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, High-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 17,
    specifications: {
      'Base': 'Dark walnut MDF disc',
      'Colors': 'Teal, Turquoise, White',
      'Art Style': 'Petal & teardrop dot mandala',
      'Center': 'Light blue dot accent',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p38',
    slug: 'golden-sky-dot-mandala-keychain',
    name: 'Golden Sky Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'An eye-catching dot mandala keychain on a deep black MDF base. Radiating concentric arcs of sky blue dots each centred with a gleaming metallic gold dot fill, creating a celestial sunburst effect. A bold gold crescent disc sits at the top, seamlessly merging the art into the silver chain attachment. Fully resin sealed for a glossy, premium finish.',
    images: ['/images/golden_blue_keychain.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, Metallic gold paint, High-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 22,
    specifications: {
      'Base': 'Black MDF disc',
      'Colors': 'Sky blue, Metallic gold, Black',
      'Art Style': 'Concentric arc dot mandala',
      'Top Detail': 'Gold crescent disc',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p39',
    slug: 'cyan-sunburst-dot-mandala-keychain',
    name: 'Cyan Sunburst Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A bold hand-painted dot mandala keychain on a black base, featuring brilliant cyan and turquoise concentric rings alternating with crisp white dots. The center blooms into a radiating petal sunburst with a glowing turquoise center dot. Fully resin sealed.',
    images: ['/images/keychain1.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, High-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 14,
    specifications: {
      'Base': 'Black MDF disc',
      'Colors': 'Cyan, Turquoise, White',
      'Art Style': 'Concentric dot & petal sunburst mandala',
      'Center': 'Turquoise dot accent',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p40',
    slug: 'navy-evil-eye-lotus-keychain',
    name: 'Navy Evil Eye Lotus Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A stunning domed resin keychain on a deep black base, featuring an intricate evil-eye lotus mandala in rich navy blue, bright white, and teal accent dots. Symmetrical petal pods radiate from a teal green center bead, all under a thick glossy resin dome.',
    images: ['/images/keychain2.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, Domed high-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: true,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 27,
    specifications: {
      'Base': 'Black MDF disc',
      'Colors': 'Navy blue, White, Teal',
      'Art Style': 'Evil eye lotus dot mandala',
      'Center': 'Teal green bead cluster',
      'Finish': 'Domed high-gloss resin',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p41',
    slug: 'tangerine-sunburst-dot-keychain',
    name: 'Tangerine Sunburst Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A vibrant hand-painted keychain on a dark base, featuring dense concentric rings of vivid orange and white raised dots. The center opens into a bold orange petal sunburst with a bright orange center dot, radiating warmth and energy. Resin sealed.',
    images: ['/images/keychain3.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, High-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.7,
    reviewCount: 11,
    specifications: {
      'Base': 'Dark MDF disc',
      'Colors': 'Vivid orange, White',
      'Art Style': 'Concentric raised dot & petal sunburst mandala',
      'Center': 'Orange petal sunburst',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p42',
    slug: 'forest-petal-blossom-keychain',
    name: 'Forest Petal Blossom Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A richly detailed dot mandala keychain on a deep black base. Features petal blossom patterns in forest green, emerald, and lime with intricate white teardrop accents and small lime-green dot clusters. A glowing green-ring center anchors the floral design. Domed resin finished.',
    images: ['/images/keychain4.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, Domed high-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 9,
    specifications: {
      'Base': 'Black MDF disc',
      'Colors': 'Forest green, Emerald, Lime, White',
      'Art Style': 'Petal blossom dot mandala',
      'Center': 'Green ring dot center',
      'Finish': 'Domed high-gloss resin',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p43',
    slug: 'sunshine-petal-dot-keychain',
    name: 'Sunshine Petal Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A cheerful and vibrant dot mandala keychain on a black base, featuring brilliant yellow and pearlescent white teardrop petal clusters. Large pearl-yellow raised dots radiate symmetrically around a bright white daisy center. Thick resin sealed for a glossy premium finish.',
    images: ['/images/keychain5.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, High-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.9,
    reviewCount: 16,
    specifications: {
      'Base': 'Black MDF disc',
      'Colors': 'Bright yellow, Pearl white',
      'Art Style': 'Petal cluster dot mandala',
      'Center': 'White daisy center',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p44',
    slug: 'terracotta-petal-dot-keychain',
    name: 'Terracotta Petal Dot Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A warm earthy dot mandala keychain on a rich dark brown base, featuring concentric rings of burnt orange, amber, and crisp white raised dots. The center blooms into a petal sunburst in terracotta shades with a dark brown center dot. Resin finished.',
    images: ['/images/keychain6.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, High-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.7,
    reviewCount: 8,
    specifications: {
      'Base': 'Dark brown MDF disc',
      'Colors': 'Burnt orange, Amber, White',
      'Art Style': 'Concentric dot & petal sunburst mandala',
      'Center': 'Terracotta petal sunburst',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p45',
    slug: 'rose-noir-blossom-keychain',
    name: 'Rose Noir Blossom Mandala Keychain',
    category: 'keychains',
    price: 149,
    description: 'A dramatic and feminine dot mandala keychain on a black base, featuring an intricate petal blossom pattern in dusty rose pink, deep mauve, and pure white. Large glossy black dome dots accent the petals, creating a striking contrast. Pearl-pink center with white dot ring. Domed resin sealed.',
    images: ['/images/keychain7.png'],
    sizes: ['One Side', 'Both Side'],
    material: 'MDF base, Acrylic paint, Domed high-gloss resin coat',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '3-5 business days',
    rating: 4.8,
    reviewCount: 13,
    specifications: {
      'Base': 'Black MDF disc',
      'Colors': 'Rose pink, Mauve, White, Glossy black',
      'Art Style': 'Petal blossom dot mandala',
      'Center': 'Pearl-pink center with white dot ring',
      'Finish': 'Domed high-gloss resin',
      'Chain': 'Stainless steel ring & chain',
    },
    sizePrices: {
      'One Side': 149,
      'Both Side': 299
    }
  },
  {
    id: 'p46',
    slug: 'teal-peacock-dot-mandala-wall-frame',
    name: 'Teal Peacock Dot Mandala Wall Frame',
    category: 'frames',
    price: 750,
    description: 'A breathtaking round circular MDF wall art piece featuring a deeply detailed peacock feather dot mandala on a black base. Layered teal and cyan peacock feather petals radiate outward in multiple rings, accented by two bold concentric gold metallic dot rings and delicate gold coral branch motifs at the outer border. White dot scatter fills the black background. A small decorative mirror inlay gleams at the very center, adding a magical finishing touch. Sealed with a gloss protective coat.',
    images: ['/images/frame1.png'],
    sizes: ['8 inch', '10 inch', '12 inch', '14 inch'],
    material: 'Premium MDF disc, Acrylic paint, Metallic gold paint, Mirror inlay, Gloss varnish',
    customizable: false,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 34,
    specifications: {
      'Shape': 'Round circular wall art',
      'Base': 'Black MDF disc',
      'Colors': 'Teal, Cyan, Metallic gold, White',
      'Art Style': 'Peacock feather dot mandala',
      'Center': 'Decorative mirror inlay',
      'Border': 'Gold coral branch motifs',
      'Finish': 'Gloss protective varnish',
      'Mounting': 'Hanging hook & wire included',
    },
    sizePrices: {
      '8 inch': 750,
      '10 inch': 1000,
      '12 inch': 1300,
      '14 inch': 1600
    }
  },
  {
    id: 'p47',
    slug: 'teal-copper-welcome-frame',
    name: 'Teal & Copper Welcome Mandala Frame',
    category: 'name-boards',
    price: 1299,
    originalPrice: 1699,
    description: 'A gorgeous round circular "Welcome" name board featuring detailed handpainted mandala art in a sophisticated teal and copper/rose-gold color scheme. Beautifully crafted with acrylic paint on a premium wood base and finished with a glossy protective resin coat. A perfect entrance piece to greet your guests.',
    images: ['/images/welcomeframe1.png'],
    sizes: ['Small (10 inch dia)', 'Medium (14 inch dia)', 'Large (18 inch dia)'],
    material: 'MDF board, Acrylic paint, Mandala art, Resin finish',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '7-10 business days',
    rating: 4.9,
    reviewCount: 24,
    specifications: {
      'Shape': 'Round Circular',
      'Base': 'Premium MDF',
      'Colors': 'Teal, Copper, Rose Gold',
      'Finish': 'Glossy resin coat',
      'Personalization': 'Custom name / Welcome message',
      'Mounting': 'Hanging hook & wire included',
    },
    sizePrices: {
      'Small (10 inch dia)': 1299,
      'Medium (14 inch dia)': 1799,
      'Large (18 inch dia)': 2299
    }
  },
  {
    id: 'p48',
    slug: 'purple-pink-welcome-frame',
    name: 'Purple & Pink Welcome Mandala Frame',
    category: 'name-boards',
    price: 1299,
    originalPrice: 1699,
    description: 'A beautiful round circular "Welcome" name board featuring detailed handpainted mandala art in a vibrant purple, pink, and white color scheme. Hand-crafted with high-quality acrylic paint on a premium MDF base, sealed under a glossy protective resin layer.',
    images: ['/images/welcomeframe2.png'],
    sizes: ['Small (10 inch dia)', 'Medium (14 inch dia)', 'Large (18 inch dia)'],
    material: 'MDF board, Acrylic paint, Mandala art, Resin finish',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '7-10 business days',
    rating: 4.8,
    reviewCount: 19,
    specifications: {
      'Shape': 'Round Circular',
      'Base': 'Premium MDF',
      'Colors': 'Purple, Pink, White',
      'Finish': 'Glossy resin coat',
      'Personalization': 'Custom name / Welcome message',
      'Mounting': 'Hanging hook & wire included',
    },
    sizePrices: {
      'Small (10 inch dia)': 1299,
      'Medium (14 inch dia)': 1799,
      'Large (18 inch dia)': 2299
    }
  },
  {
    id: 'p49',
    slug: 'sunset-gold-welcome-frame',
    name: 'Sunset Gold Welcome Mandala Frame',
    category: 'name-boards',
    price: 1299,
    originalPrice: 1699,
    description: 'A warm and inviting round circular "Welcome" name board featuring handpainted mandala art in rich shades of yellow, orange, and metallic gold, reminiscent of a glowing sunset. Domed under a protective glossy resin coat for a premium feel.',
    images: ['/images/welcomeframe3.png'],
    sizes: ['Small (10 inch dia)', 'Medium (14 inch dia)', 'Large (18 inch dia)'],
    material: 'MDF board, Acrylic paint, Mandala art, Resin finish',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '7-10 business days',
    rating: 5.0,
    reviewCount: 15,
    specifications: {
      'Shape': 'Round Circular',
      'Base': 'Premium MDF',
      'Colors': 'Yellow, Orange, Gold',
      'Finish': 'Glossy resin coat',
      'Personalization': 'Custom name / Welcome message',
      'Mounting': 'Hanging hook & wire included',
    },
    sizePrices: {
      'Small (10 inch dia)': 1299,
      'Medium (14 inch dia)': 1799,
      'Large (18 inch dia)': 2299
    }
  },
  {
    id: 'p50',
    slug: 'royal-purple-mandala-car-hanging',
    name: 'Royal Purple Mandala Car Hanging',
    category: 'customized-gifts',
    price: 349,
    originalPrice: 499,
    description: 'A beautiful double-sided handpainted mandala car hanging accessory featuring concentric rings of royal purple, lavender, lilac, white, and metallic gold dot art. Topped with a shiny magenta gemstone at the center and finished with a matching royal purple silky tassel. Bring spiritual charm and elegance to your car dashboard or rearview mirror.',
    images: ['/images/carhanging1.png'],
    sizes: ['Standard'],
    material: 'MDF base, Acrylic paint, Silky thread tassel, Beads',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '5-7 business days',
    rating: 4.9,
    reviewCount: 31,
    specifications: {
      'Design': 'Double-sided concentric dot mandala',
      'Primary Colors': 'Royal Purple, Lavender, Lilac, Gold, White',
      'Hanging Style': 'Gold thread with violet beads',
      'Centerpiece': 'Magenta center gemstone',
      'Tassel': 'Vibrant purple silk tassel',
    }
  },
  {
    id: 'p51',
    slug: 'maroon-gold-mandala-car-hanging',
    name: 'Maroon & Gold Mandala Car Hanging',
    category: 'customized-gifts',
    price: 349,
    originalPrice: 499,
    description: 'A warm and festive double-sided handpainted mandala car hanging ornament. Painted on a deep maroon base with detailed dot art in metallic gold, magenta, soft pink, and white. Completed with a magenta gemstone centerpiece and a matching magenta silky tassel at the bottom.',
    images: ['/images/carhanging2.png'],
    sizes: ['Standard'],
    material: 'MDF base, Acrylic paint, Silky thread tassel, Beads',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 4.8,
    reviewCount: 22,
    specifications: {
      'Design': 'Double-sided floral-style dot mandala',
      'Primary Colors': 'Maroon, Metallic Gold, Magenta, Soft Pink',
      'Hanging Style': 'Gold thread with decorative beads',
      'Centerpiece': 'Pinkish-magenta gemstone',
      'Tassel': 'Magenta/hot pink silk tassel',
    }
  },
  {
    id: 'p52',
    slug: 'ocean-blue-mandala-car-hanging',
    name: 'Ocean Blue Mandala Car Hanging',
    category: 'customized-gifts',
    price: 349,
    originalPrice: 499,
    description: 'A serene and cool double-sided handpainted mandala car hanging accessory. Features an intricate 8-petal floral/sun-style mandala design on a black base with ocean blue, cobalt blue, turquoise, and white dots/strokes. Finished with a cobalt blue gemstone center and a royal blue silky thread tassel.',
    images: ['/images/carhanging3.png'],
    sizes: ['Standard'],
    material: 'MDF base, Acrylic paint, Silky thread tassel, Beads',
    customizable: true,
    featured: true,
    bestSeller: false,
    deliveryTime: '5-7 business days',
    rating: 5.0,
    reviewCount: 18,
    specifications: {
      'Design': 'Double-sided 8-petal floral dot mandala',
      'Primary Colors': 'Cobalt Blue, Ocean Blue, Turquoise, White',
      'Hanging Style': 'Blue thread with turquoise beads',
      'Centerpiece': 'Cobalt blue center gemstone',
      'Tassel': 'Deep blue silk tassel',
    }
  },
  {
    id: 'p53',
    slug: 'terracotta-gold-lippan-art-pot',
    name: 'Terracotta & Gold Lippan Art Decorative Pot',
    category: 'customized-gifts',
    price: 799,
    originalPrice: 1099,
    description: 'A traditional hand-painted Lippan art decorative clay pot in a classic Matka shape. Features intricate bands of hand-painted pattern work (square swirls, chevrons, and diamond grids) in terracotta orange, mustard yellow, red, and black. Beautifully inlaid with tiny circular mirrors bordered by delicate dot art. Displayed on a round wooden coaster stand.',
    images: ['/images/pot1.png'],
    sizes: ['Standard (4x4 inch)'],
    material: 'Terracotta clay, Acrylic paint, Glass mirrors, Wooden stand',
    customizable: false,
    featured: true,
    bestSeller: true,
    deliveryTime: '7-10 business days',
    rating: 4.9,
    reviewCount: 26,
    specifications: {
      'Folk Art Style': 'Lippan / Abhla mirror work',
      'Shape': 'Spherical matka clay pot',
      'Primary Colors': 'Terracotta Orange, Mustard Yellow, Red, Black',
      'Coating': 'Matte protective sealer',
      'Inclusions': 'Decorative pot + round wooden coaster',
    }
  },
  {
    id: 'p54',
    slug: 'teal-blue-lippan-art-pot',
    name: 'Teal & Blue Lippan Art Decorative Pot',
    category: 'customized-gifts',
    price: 799,
    originalPrice: 1099,
    description: 'A modern take on traditional Indian folk art. This hand-painted Lippan art decorative clay pot features repeating bands of square swirls, chevron patterns, and diamond grids in rich teal, sea blue, turquoise, and metallic gold on a black base. Decorated with inlaid circular glass mirrors and teal/gold dot art. Comes with a matching round wooden coaster stand.',
    images: ['/images/pot2.png'],
    sizes: ['Standard (4x4 inch)'],
    material: 'Terracotta clay, Acrylic paint, Glass mirrors, Wooden stand',
    customizable: false,
    featured: true,
    bestSeller: false,
    deliveryTime: '7-10 business days',
    rating: 5.0,
    reviewCount: 14,
    specifications: {
      'Folk Art Style': 'Lippan / Abhla mirror work',
      'Shape': 'Spherical matka clay pot',
      'Primary Colors': 'Deep Teal, Sea Blue, Metallic Gold, Black',
      'Coating': 'Matte protective sealer',
      'Inclusions': 'Decorative pot + round wooden coaster',
    }
  },
  {
    id: 'p55',
    slug: 'custom-pet-portrait-keychain',
    name: 'Custom Pet Portrait Mandala Keychain',
    category: 'keychains',
    price: 250,
    originalPrice: 350,
    description: 'A beautiful double-sided custom hand-painted pet portrait keychain. Feature your beloved pet (dog, cat, or any furry friend) in stunning detail against a starry night background with their name custom lettered. Hand-crafted on a premium wooden disc, painted on both sides, and sealed with a high-gloss protective resin coat.',
    images: ['/images/dogkeychain.png', '/images/keychain2.png'],
    sizes: [],
    material: 'Premium MDF disc, Custom pet portrait art, Acrylic paint, Gloss protective resin',
    customizable: true,
    featured: true,
    bestSeller: true,
    deliveryTime: '7-10 business days',
    rating: 5.0,
    reviewCount: 14,
    specifications: {
      'Diameter': '5 cm',
      'Base': 'Premium MDF',
      'Artwork': 'Custom pet portrait + name lettering (both sides painted)',
      'Finish': 'High-gloss resin coat',
      'Chain': 'Stainless steel keyring & chain'
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
