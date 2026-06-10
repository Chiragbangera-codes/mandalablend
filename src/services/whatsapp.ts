import { WHATSAPP_NUMBER } from '@/utils/constants';

export const createWhatsappLink = (
  productName: string,
  price: number | string,
  size?: string,
  quantity?: number
): string => {
  const message = encodeURIComponent(
    `Hello Mandala Blend! 🎨\n\nI would like to order:\n\n📦 Product: ${productName}\n💰 Price: ₹${price}${size ? `\n📐 Size: ${size}` : ''}${quantity ? `\n🔢 Quantity: ${quantity}` : ''}\n\nPlease share availability and payment details.\n\nThank you! 🙏`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const createGeneralWhatsappLink = (message?: string): string => {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent('Hello Mandala Blend! 🎨\n\nI would like to inquire about a custom order.\n\nThank you!');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
