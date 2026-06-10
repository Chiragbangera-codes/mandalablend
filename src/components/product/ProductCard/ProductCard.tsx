import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaHeart, FaStar } from 'react-icons/fa';
import { Product } from '@/data/products';
import { createWhatsappLink } from '@/services/whatsapp';
import { scaleIn } from '@/utils/animations';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [wished, setWished] = useState(false);

  return (
    <motion.div className="product-card" variants={scaleIn}>
      <Link to={`/collections/${product.slug}`} className="product-card__img-wrap">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/hero-mandala.png';
          }}
        />
        <div className="product-card__overlay" />
        {product.bestSeller && (
          <span className="product-card__badge product-card__badge--bestseller">Best Seller</span>
        )}
        {product.originalPrice && (
          <span className="product-card__badge product-card__badge--sale">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </Link>

      <button
        className={`product-card__wish ${wished ? 'product-card__wish--active' : ''}`}
        onClick={() => setWished(!wished)}
        aria-label="Add to wishlist"
      >
        <FaHeart />
      </button>

      <div className="product-card__body">
        <span className="product-card__category">{product.category.replace(/-/g, ' ')}</span>
        <Link to={`/collections/${product.slug}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <div className="product-card__rating">
          <FaStar />
          <span>{product.rating}</span>
          <span className="product-card__reviews">({product.reviewCount})</span>
        </div>
        <div className="product-card__price-row">
          <span className="product-card__price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="product-card__original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
        <a
          href={createWhatsappLink(product.name, product.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__whatsapp"
          id={`product-whatsapp-${product.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FaWhatsapp />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
