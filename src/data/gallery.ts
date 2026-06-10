export interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
  height?: 'short' | 'medium' | 'tall';
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

export const getGalleryByCategory = (category: string) =>
  category === 'all' ? galleryItems : galleryItems.filter(i => i.category === category);
