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
    image: '/images/testimonial-1.png',
    rating: 5,
    review:
      'I ordered a custom name board for my new home and it exceeded every expectation. The mandala detailing is absolutely gorgeous — every guest who visits asks about it. Mandala Blend is truly special!',
    product: 'Personalized Mandala Name Board',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    city: 'Bangalore',
    image: '/images/testimonial-2.png',
    rating: 5,
    review:
      'Gifted the anniversary gift set to my wife and she was in tears (happy ones!). The packaging was luxury-level, the frame was museum quality. Worth every rupee. Will definitely order again!',
    product: 'Mandala Anniversary Gift Set',
  },
  {
    id: 't3',
    name: 'Kavya Reddy',
    city: 'Hyderabad',
    image: '/images/testimonial-3.png',
    rating: 5,
    review:
      'The lotus mandala keychain I ordered is so beautiful that I almost don\'t want to use it as a keychain — it looks more like jewelry! The quality of the resin and paint is outstanding.',
    product: 'Lotus Mandala Keychain',
  },
  {
    id: 't4',
    name: 'Rohan Gupta',
    city: 'Delhi',
    image: '/images/testimonial-4.png',
    rating: 5,
    review:
      'Ordered 12 keychains as return gifts for our daughter\'s birthday and everyone loved them! WhatsApp ordering made it so simple — prompt replies, on-time delivery. Highly recommend!',
    product: 'Set of 6 Mandala Keychains',
  },
  {
    id: 't5',
    name: 'Divya Nair',
    city: 'Kochi',
    image: '/images/testimonial-5.png',
    rating: 5,
    review:
      'The Royal Mandala Frame is the centerpiece of my living room now. People think it\'s museum art. The craftsmanship is unmatched — you can see the love and care in every stroke.',
    product: 'Royal Mandala Frame',
  },
];
