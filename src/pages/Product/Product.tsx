import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaStar, FaCheckCircle } from 'react-icons/fa';
import { FiPackage, FiAward, FiTruck, FiEdit3, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { createWhatsappLink } from '@/services/whatsapp';
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import './Product.scss';

// Chapter 5.13 — Trust Indicators (outline icons only)
const TRUST_ITEMS = [
  { icon: <FiEdit3 />, label: '100% Handmade' },
  { icon: <FiAward />, label: 'Premium Materials' },
  { icon: <FiPackage />, label: 'Secure Packaging' },
  { icon: <FiTruck />, label: 'Pan India Delivery' },
];

// Chapter 5.14 — Tab definitions
const TABS = [
  { id: 'description', label: 'Description' },
  { id: 'materials',   label: 'Materials' },
  { id: 'care',        label: 'Care' },
  { id: 'shipping',    label: 'Shipping' },
];

const Product: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [sizeError, setSizeError] = useState(false);

  if (!product) return <Navigate to="/collections" replace />;

  const related = getRelatedProducts(product, 4);

  // Chapter 5.12 — pre-filled WhatsApp message
  const handleWhatsApp = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);

    const message = `Hello Mandala Blend! 🎨\n\nI would like to order:\nProduct: ${product.name}\nSize: ${selectedSize || 'Standard'}\nQuantity: ${quantity}\n\nPlease share payment details.\nThank you!`;
    window.open(`https://wa.me/919480675351?text=${encodeURIComponent(message)}`, '_blank');
  };

  const prevImage = () => setActiveImage(i => (i - 1 + product.images.length) % product.images.length);
  const nextImage = () => setActiveImage(i => (i + 1) % product.images.length);

  return (
    <div className="product-page">
      <div className="container">
        {/* Chapter 5.5 — Breadcrumb */}
        <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> › </span>
          <Link to="/collections">Collections</Link>
          <span aria-hidden="true"> › </span>
          <Link to={`/collections?cat=${product.category}`}>
            {product.category.replace(/-/g, ' ')}
          </Link>
          <span aria-hidden="true"> › </span>
          <span aria-current="page">{product.name}</span>
        </nav>

        {/* Chapter 5.4 — Main Layout 55/45 */}
        <div className="product-page__layout">

          {/* Chapter 5.6 — Product Gallery */}
          <motion.div
            className="product-page__gallery"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            {/* Main Image */}
            <div className="product-page__main-img" role="img" aria-label={product.name}>
              <img
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-mandala.png'; }}
              />
              {product.images.length > 1 && (
                <>
                  <button
                    className="product-page__nav-btn product-page__nav-btn--prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    className="product-page__nav-btn product-page__nav-btn--next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="product-page__thumbs" role="list">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`product-page__thumb ${activeImage === i ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={activeImage === i}
                    role="listitem"
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-mandala.png'; }}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Chapter 5.7 — Product Information */}
          <motion.div
            className="product-page__info"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            {/* Category Badge */}
            {product.bestSeller && (
              <span className="product-page__category-badge">Best Seller</span>
            )}

            {/* Product Name */}
            <h1 className="product-page__name">{product.name}</h1>

            {/* Rating */}
            <div className="product-page__rating" aria-label={`Rating: ${product.rating} stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? 'filled' : 'empty'}
                  aria-hidden="true"
                />
              ))}
              <span className="product-page__rating-score">{product.rating}</span>
              <span className="product-page__rating-count">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="product-page__price-row">
              <span className="product-page__price">
                {product.sizePrices ? (
                  selectedSize ? (
                    `₹${product.sizePrices[selectedSize].toLocaleString('en-IN')}`
                  ) : (
                    `₹${Math.min(...Object.values(product.sizePrices)).toLocaleString('en-IN')} - ₹${Math.max(...Object.values(product.sizePrices)).toLocaleString('en-IN')}`
                  )
                ) : (
                  `₹${product.price.toLocaleString('en-IN')}`
                )}
              </span>
              {product.originalPrice && !product.sizePrices && (
                <span className="product-page__original">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Availability & Delivery */}
            <div className="product-page__meta-row">
              <span className="product-page__instock">
                <FaCheckCircle aria-hidden="true" /> In Stock
              </span>
              <span className="product-page__delivery">
                Ships in {product.deliveryTime}
              </span>
            </div>

            {/* Short description */}
            <p className="product-page__short-desc">{product.description}</p>

            {/* Chapter 5.8 — Specifications */}
            <div className="product-page__specs" aria-label="Product specifications">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className="product-page__spec">
                  <span className="product-page__spec-key">{k}</span>
                  <span className="product-page__spec-val">{v}</span>
                </div>
              ))}
            </div>

            {/* Chapter 5.9 — Size Selection */}
            {product.sizes.length > 0 && (
              <div className="product-page__sizes">
                <label className="product-page__sizes-label">Choose Size</label>
                <div className="product-page__size-btns" role="radiogroup" aria-label="Select size">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`product-page__size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => { setSelectedSize(size); setSizeError(false); }}
                      role="radio"
                      aria-checked={selectedSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="product-page__size-error" role="alert">
                    ⚠️ Please select a size before placing your order.
                  </p>
                )}
              </div>
            )}

            {/* Chapter 5.11 — Quantity Selector */}
            <div className="product-page__qty">
              <span className="product-page__sizes-label">Quantity</span>
              <div className="product-page__qty-ctrl" role="group" aria-label="Quantity">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >−</button>
                <span aria-live="polite">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>

            {/* Chapter 5.12 — WhatsApp CTA */}
            <button
              className="product-page__order-btn"
              onClick={handleWhatsApp}
              id="product-order-whatsapp-btn"
              aria-label={`Order ${product.name} on WhatsApp`}
            >
              <FaWhatsapp aria-hidden="true" />
              Order on WhatsApp
            </button>

            {/* Chapter 5.13 — Trust Indicators */}
            <div className="product-page__trust" aria-label="Trust indicators">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="product-page__trust-item">
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Chapter 5.14 — Description Tabs */}
        <div className="product-page__tabs">
          <div className="product-page__tab-nav" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tab-panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`product-page__tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="product-page__tab-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                role="tabpanel"
                id={`tab-panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'description' && <p>{product.description}</p>}
                {activeTab === 'materials' && (
                  <p>
                    <strong>Materials:</strong> {product.material}.<br /><br />
                    All inks used are archival-quality, UV-resistant, and carefully selected for
                    vibrant, lasting color. The wood frames are sustainably sourced and finished with
                    an anti-dust matte coating.
                  </p>
                )}
                {activeTab === 'care' && (
                  <p>
                    Keep away from direct sunlight and moisture. Clean only with a soft, dry cloth.
                    Do not use water or chemical cleaners on the mandala artwork. Display indoors for
                    maximum longevity.
                  </p>
                )}
                {activeTab === 'shipping' && (
                  <p>
                    <strong>Delivery:</strong> {product.deliveryTime}.<br /><br />
                    We ship Pan India via trusted courier partners (Blue Dart, Delhivery, DTDC).
                    All orders are carefully bubble-wrapped and packed in a rigid box to ensure
                    safe delivery. Free shipping on orders above ₹999.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Chapter 5.15 — Related Products */}
        {related.length > 0 && (
          <section className="product-page__related" aria-labelledby="related-heading">
            <h2 className="product-page__related-title" id="related-heading">
              You May Also Like
            </h2>
            <motion.div
              className="product-page__related-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </motion.div>
          </section>
        )}
      </div>

      <InstagramFeed />

      {/* Chapter 5.21 — Sticky Mobile Bottom Bar */}
      <div className="product-page__mobile-bar">
        <div className="product-page__mobile-price">
          {product.sizePrices ? (
            selectedSize ? (
              `₹${product.sizePrices[selectedSize].toLocaleString('en-IN')}`
            ) : (
              `₹${Math.min(...Object.values(product.sizePrices)).toLocaleString('en-IN')} - ₹${Math.max(...Object.values(product.sizePrices)).toLocaleString('en-IN')}`
            )
          ) : (
            `₹${product.price.toLocaleString('en-IN')}`
          )}
        </div>
        <button
          className="product-page__mobile-order"
          onClick={handleWhatsApp}
          aria-label={`Order ${product.name} on WhatsApp`}
        >
          <FaWhatsapp aria-hidden="true" />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Product;
