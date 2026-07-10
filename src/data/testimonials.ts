export interface Testimonial {
  id: string;
  name: string;
  city: string;
  image: string;
  rating: number;
  review: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    city: 'Mumbai',
    image: '/images/testimonial-1.webp',
    rating: 5,
    review:
      'I ordered a custom welcome name board for my new home and it exceeded every expectation. The teal and copper mandala detailing is absolutely gorgeous — every guest who visits asks about it. Mandala Blend is truly special!',
    product: 'Teal & Copper Welcome Mandala Frame',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    city: 'Bangalore',
    image: '/images/testimonial-2.webp',
    rating: 5,
    review:
      'Gifted the Sage Green Mirror Frame to my wife and she was in tears (happy ones!). The dot mandala detailing around the mirror is museum quality. Worth every rupee. Will definitely order again!',
    product: 'Sage Green Mandala Dot Art Mirror Frame',
  },
  {
    id: 't3',
    name: 'Chirag',
    city: 'Mangalore',
    image: '/images/testimonial-3.webp',
    rating: 5,
    review:
      'The golden keychain I ordered is so beautiful that I almost don\'t want to use it as a keychain — it looks more like jewellery! The quality of the resin and the dot mandala paint is absolutely outstanding.',
    product: 'Gold & White Mandala Keychain',
  },
  {
    id: 't4',
    name: 'Rohan Gupta',
    city: 'Delhi',
    image: '/images/testimonial-4.webp',
    rating: 5,
    review:
      'Ordered 12 keychains as return gifts for our daughter\'s birthday and everyone loved them! WhatsApp ordering made it so simple — prompt replies, on-time delivery. Highly recommend!',
    product: 'Mandala Keychain Set',
  },
  {
    id: 't5',
    name: 'Divya Nair',
    city: 'Kochi',
    image: '/images/testimonial-5.webp',
    rating: 5,
    review:
      'The Teal Peacock Dot Mandala Frame is the centerpiece of my living room now. People think it\'s museum art. The craftsmanship is unmatched — you can see the love and care in every single dot.',
    product: 'Teal Peacock Dot Mandala Wall Frame',
  },
];
