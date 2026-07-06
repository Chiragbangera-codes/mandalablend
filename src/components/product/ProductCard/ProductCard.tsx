import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaHeart, FaStar } from 'react-icons/fa';
import { Product } from '@/data/products';
import { createWhatsappLink } from '@/services/whatsapp';
import { fadeUp } from '@/animations/variants';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  showBadge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showBadge = true }) => {
  const [wished, setWished] = useState(false);

  return (
    <motion.article
      className="product-card"
      variants={fadeUp}
      aria-label={product.name}
    >
      {/* Image Area */}
      <Link
        to={`/collections/${product.slug}`}
        className="product-card__img-wrap"
        aria-label={`View ${product.name}`}
        tabIndex={-1}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero-mandala.png';
          }}
        />
        <div className="product-card__img-overlay" aria-hidden="true" />

        {/* Badge — top left */}
        {showBadge && product.bestSeller && (
          <span className="product-card__badge product-card__badge--bestseller">
            Best Seller
          </span>
        )}
        {showBadge && product.originalPrice && !product.bestSeller && (
          <span className="product-card__badge product-card__badge--sale">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
        {showBadge && product.category === 'new-arrivals' && !product.bestSeller && (
          <span className="product-card__badge product-card__badge--new">New</span>
        )}
      </Link>

      {/* Wishlist — top right */}
      <button
        className={`product-card__wish ${wished ? 'product-card__wish--active' : ''}`}
        onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
        aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        aria-pressed={wished}
      >
        <FaHeart />
      </button>

      {/* Body */}
      <div className="product-card__body">
        <span className="product-card__category">
          {product.category.replace(/-/g, ' ')}
        </span>

        <Link to={`/collections/${product.slug}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>

        <div className="product-card__rating" aria-label={`Rating: ${product.rating} out of 5`}>
          <FaStar aria-hidden="true" />
          <span>{product.rating}</span>
          <span className="product-card__reviews">({product.reviewCount})</span>
        </div>

        <div className="product-card__price-row">
          <span className="product-card__price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="product-card__original-price">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* WhatsApp CTA — full width green */}
        <a
          href={createWhatsappLink(product.name, product.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__whatsapp"
          id={`product-whatsapp-${product.id}`}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Order ${product.name} on WhatsApp`}
        >
          <FaWhatsapp aria-hidden="true" />
          Order on WhatsApp
        </a>
      </div>
    </motion.article>
  );
};

export default ProductCard;
