export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'f1',
    question: 'How do I place an order?',
    answer:
      'Simply browse our Collections or Product pages and click the "Order on WhatsApp" button. This will open a pre-filled WhatsApp message to us. We\'ll confirm availability, customization details, and payment within a few hours.',
  },
  {
    id: 'f2',
    question: 'Do you accept custom orders?',
    answer:
      'Absolutely! Customization is our specialty. You can request custom sizes, names, colors, patterns, and designs. Just reach out to us on WhatsApp with your requirements and we\'ll create something truly unique for you.',
  },
  {
    id: 'f3',
    question: 'What is your delivery time?',
    answer:
      'Standard products ship within 5-7 business days. Custom and personalized orders take 7-14 business days depending on complexity. We ship Pan India via trusted courier partners with tracking.',
  },
  {
    id: 'f4',
    question: 'What payment methods do you accept?',
    answer:
      'We accept UPI (GPay, PhonePe, Paytm), NEFT/IMPS bank transfer, and cash on delivery (select locations). Payment details are shared after order confirmation on WhatsApp.',
  },
  {
    id: 'f5',
    question: 'Do you offer free shipping?',
    answer:
      'Yes! Orders above ₹999 qualify for free shipping anywhere in India. For orders below ₹999, a flat ₹80 shipping charge applies.',
  },
  {
    id: 'f6',
    question: 'What if I receive a damaged product?',
    answer:
      'We pack all artwork with extra care using bubble wrap and protective sleeves. However, if your order arrives damaged, please share photos with us on WhatsApp within 24 hours of delivery and we\'ll arrange a replacement or refund.',
  },
  {
    id: 'f7',
    question: 'Are the products 100% handmade?',
    answer:
      'Yes — every single piece is hand-drawn and crafted by our artist. No digital printing or machine work. Each artwork takes anywhere from 8 to 40+ hours to complete depending on size and complexity.',
  },
  {
    id: 'f8',
    question: 'Can I return or exchange a product?',
    answer:
      'Personalized and custom orders cannot be returned. For standard products, we offer exchange within 7 days of delivery if the product is unused and in original packaging. Please contact us on WhatsApp to initiate an exchange.',
  },
];
