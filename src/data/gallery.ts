export interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
  height?: 'short' | 'medium' | 'tall';
}

export interface CustomOrder {
  id: string;
  image: string;
  title: string;
  requirement: string;
  inspiration: string;
  completionTime: string;
  materials: string;
}

export interface CustomerShowcaseItem {
  id: string;
  customerPhoto: string;
  artworkPhoto: string;
  review: string;
  name: string;
  location: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 'g1', image: '/images/frame1.webp', category: 'frames', title: 'Royal Lotus Mandala Frame', height: 'tall' },
  { id: 'g2', image: '/images/blue_keychain.webp', category: 'keychains', title: 'Peacock Mandala Keychain', height: 'short' },
  { id: 'g3', image: '/images/welcomeframe2.webp', category: 'name-boards', title: 'Welcome Home Name Board', height: 'medium' },
  { id: 'g4', image: '/images/fullframe-crimson-rose.webp', category: 'frames', title: 'Crimson Rose Full Mandala Frame', height: 'tall' },
  { id: 'g5', image: '/images/pot1.webp', category: 'happy-customers', title: 'Happy Customer — Priya from Mumbai', height: 'medium' },
  { id: 'g6', image: '/images/golden_blue_keychain.webp', category: 'keychains', title: 'Lotus Resin Keychain Set', height: 'short' },
  { id: 'g8', image: '/images/fullframe-emerald-forest.webp', category: 'frames', title: 'Floral Grand Mandala Frame', height: 'medium' },
  { id: 'g9', image: '/images/welcomeframe1.webp', category: 'name-boards', title: 'Welcome Home Name Board', height: 'short' },
  { id: 'g10', image: '/images/pot2.webp', category: 'happy-customers', title: 'Happy Customer — Arjun from Bangalore', height: 'medium' },
  { id: 'g11', image: '/images/carhanging1.webp', category: 'work-in-progress', title: 'Layering the Gold Details', height: 'tall' },
  { id: 'g12', image: '/images/keychain-sahasrara-red.webp', category: 'keychains', title: 'Anniversary Keychain Pair', height: 'short' },
];

export const customOrders: CustomOrder[] = [
  {
    id: 'co1',
    image: '/images/welcomeframe3.webp',
    title: 'Customized Floral Welcoming Name Board',
    requirement: 'A customized 16x16 inch home entrance welcoming name board with gold detailing and circular mandala motifs representing prosperity and peace.',
    inspiration: 'Inspired by traditional Rajasthani motifs and concentric lotus petals representing wealth and peace.',
    completionTime: '7 days',
    materials: 'Acrylic on MDF, gold pigment ink, high gloss resin protective coat.',
  },
  {
    id: 'co2',
    image: '/images/clean_sahasrara_mandala.webp',
    title: 'The Eternal Sahasrara Living Room Mandala',
    requirement: 'A massive 24x24 inch center-piece mandala frame with metallic gold and deep burgundy accents to align with modern wooden living room interiors.',
    inspiration: 'Inspired by the Sahasrara (Crown) Chakra representing pure consciousness and spiritual connection.',
    completionTime: '12 days',
    materials: 'Archival ink on 300 GSM cotton paper, float mount frame with anti-reflective museum glass.',
  }
];

export const customerShowcase: CustomerShowcaseItem[] = [
  {
    id: 'cs1',
    customerPhoto: '',
    artworkPhoto: '/images/welcomeframe1.webp',
    review: 'The Teal & Copper Welcome Name Board looks stunning at our main door. Almost every visitor has paused to admire it. The custom process on WhatsApp was extremely smooth!',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
  },
  {
    id: 'cs2',
    customerPhoto: '',
    artworkPhoto: '/images/fullframe-azure-peacock.webp',
    review: 'The Teal Peacock Wall Frame is a masterpiece in our living room. The teal and gold dots shine beautifully in the evening lights. Safe shipping and perfect packaging.',
    name: 'Arjun Mehta',
    location: 'Bangalore, Karnataka',
  },
  {
    id: 'cs3',
    customerPhoto: '',
    artworkPhoto: '/images/blue_keychain.webp',
    review: 'Gifted a dot mandala keychain to my sister. The resin finishing is so smooth and the line precision is unreal for something this small. Absolutely love Mandala Blend!',
    name: 'Chirag',
    location: 'Mangalore, Karnataka',
  }
];

export const getGalleryByCategory = (category: string) =>
  category === 'all' ? galleryItems : galleryItems.filter(i => i.category === category);
