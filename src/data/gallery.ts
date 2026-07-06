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
  { id: 'g1', image: '/images/gallery-1.png', category: 'frames', title: 'Royal Lotus Mandala Frame', height: 'tall' },
  { id: 'g2', image: '/images/gallery-2.png', category: 'keychains', title: 'Peacock Mandala Keychain', height: 'short' },
  { id: 'g3', image: '/images/gallery-3.png', category: 'name-boards', title: 'Sharma Family Name Board', height: 'medium' },
  { id: 'g4', image: '/images/gallery-4.png', category: 'frames', title: 'Star Mandala Night Frame', height: 'tall' },
  { id: 'g5', image: '/images/gallery-5.png', category: 'happy-customers', title: 'Happy Customer — Priya from Mumbai', height: 'medium' },
  { id: 'g6', image: '/images/gallery-6.png', category: 'keychains', title: 'Lotus Resin Keychain Set', height: 'short' },
  { id: 'g7', image: '/images/gallery-7.png', category: 'work-in-progress', title: 'Creating a Geometric Mandala', height: 'tall' },
  { id: 'g8', image: '/images/gallery-8.png', category: 'frames', title: 'Floral Grand Mandala Frame', height: 'medium' },
  { id: 'g9', image: '/images/gallery-9.png', category: 'name-boards', title: 'Welcome Home Name Board', height: 'short' },
  { id: 'g10', image: '/images/gallery-10.png', category: 'happy-customers', title: 'Happy Customer — Arjun from Bangalore', height: 'medium' },
  { id: 'g11', image: '/images/gallery-11.png', category: 'work-in-progress', title: 'Layering the Gold Details', height: 'tall' },
  { id: 'g12', image: '/images/gallery-12.png', category: 'keychains', title: 'Anniversary Keychain Pair', height: 'short' },
];

export const customOrders: CustomOrder[] = [
  {
    id: 'co1',
    image: '/images/gallery-3.png',
    title: 'Sharma Family Welcoming Name Board',
    requirement: 'A customized 16x16 inch family name board with gold detailing and blue background representing calmness and prosperity for their new home entrance.',
    inspiration: 'Inspired by traditional Rajasthani motifs and concentric lotus petals representing wealth and peace.',
    completionTime: '7 days',
    materials: 'Acrylic on MDF, gold pigment ink, high gloss resin protective coat.',
  },
  {
    id: 'co2',
    image: '/images/gallery-8.png',
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
    customerPhoto: '/images/testimonial-1.png',
    artworkPhoto: '/images/gallery-3.png',
    review: 'The name board looks stunning at our main door. Almost every visitor has paused to admire it. The custom process on WhatsApp was extremely smooth!',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
  },
  {
    id: 'cs2',
    customerPhoto: '/images/testimonial-2.png',
    artworkPhoto: '/images/gallery-8.png',
    review: 'The living room centerpiece is a masterpiece. The gold inks shine beautifully in the evening lights. Safe shipping and perfect packaging.',
    name: 'Arjun Mehta',
    location: 'Bangalore, Karnataka',
  },
  {
    id: 'cs3',
    customerPhoto: '/images/testimonial-3.png',
    artworkPhoto: '/images/gallery-2.png',
    review: 'Gifted a peacock keychain to my sister. The resin finishing is so smooth and the line precision is unreal for something this small.',
    name: 'Kavya Reddy',
    location: 'Hyderabad, Telangana',
  }
];

export const getGalleryByCategory = (category: string) =>
  category === 'all' ? galleryItems : galleryItems.filter(i => i.category === category);
