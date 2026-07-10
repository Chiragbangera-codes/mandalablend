import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaStar } from 'react-icons/fa';
import { Product } from '@/data/products';
import { fadeUp } from '@/animations/variants';
import { trackProductCardClicked } from '@/analytics';
import LazyImage from '@/components/common/LazyImage';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  showBadge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, showBadge = true }) => {
  const [wished, setWished] = useState(false);

  const handleTrackClick = () => {
    trackProductCardClicked(product.id, product.name);
  };

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
        onClick={handleTrackClick}
      >
        <LazyImage
          src={product.images[0]}
          alt={product.name}
          className="product-card__img"
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

        <Link to={`/collections/${product.slug}`} onClick={handleTrackClick}>
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

        {/* Shop Now link */}
        <Link
          to={`/collections/${product.slug}`}
          className="product-card__shop-now"
          id={`product-shop-${product.id}`}
          aria-label={`Shop ${product.name}`}
          onClick={handleTrackClick}
        >
          Shop Now →
        </Link>
      </div>
    </motion.article>
  );
});

export default ProductCard;
