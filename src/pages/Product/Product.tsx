import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaStar, FaCheckCircle } from 'react-icons/fa';
import { FiPackage, FiAward, FiTruck, FiEdit3, FiChevronLeft, FiChevronRight, FiShare2, FiCopy, FiCheck } from 'react-icons/fi';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { WHATSAPP_NUMBER } from '@/utils/constants';
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewportConfig } from '@/animations/variants';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import LazyImage from '@/components/common/LazyImage';
import SEO from '@/components/common/SEO/SEO';
import {
  trackProductViewed,
  trackWhatsAppOrderClicked,
  trackShareButtonClicked,
  trackProductImageViewed
} from '@/analytics';
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
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customWord, setCustomWord] = useState('');

  // Track product viewed event
  React.useEffect(() => {
    if (product) {
      trackProductViewed(product.id, product.name, product.price);
    }
  }, [product]);

  // Track image viewed event
  React.useEffect(() => {
    if (product) {
      trackProductImageViewed(product.id, activeImage);
    }
  }, [activeImage, product]);

  const letterCount = useMemo(() => {
    if (!product || product.id !== 'p66') return 1;
    const cleanWord = customWord.replace(/[^a-zA-Z]/g, '');
    return cleanWord.length > 0 ? cleanWord.length : 1;
  }, [customWord, product]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    if (product) trackShareButtonClicked(product.id, 'clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!product) return;
    const text = `Check out this beautiful ${product.name} on Mandala Blend! 🎨\n\n${window.location.href}`;
    trackShareButtonClicked(product.id, 'whatsapp');
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (!product) return;
    if ('share' in navigator && typeof (navigator as { share?: unknown }).share === 'function') {
      try {
        trackShareButtonClicked(product.id, 'native');
        await navigator.share({
          title: product.name,
          text: `Check out this beautiful ${product.name} on Mandala Blend! 🎨`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const handleShareClick = () => {
    if ('share' in navigator && typeof (navigator as { share?: unknown }).share === 'function') {
      handleNativeShare();
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const related = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product]
  );

  if (!product) return <Navigate to="/collections" replace />;

  // Chapter 5.12 — pre-filled WhatsApp message
  const handleWhatsApp = () => {
    if (product.id !== 'p66' && product.sizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);

    let message = '';
    if (product.id === 'p66') {
      const cleanWord = customWord.replace(/[^a-zA-Z]/g, '');
      const wordToSubmit = cleanWord.length > 0 ? cleanWord.toUpperCase() : 'None Specified';
      const calculatedPrice = 649 * (cleanWord.length > 0 ? cleanWord.length : 1);
      message = `Hello Mandala Blend! 🎨\n\nI would like to order:\n📦 Product: ${product.name}\n🔤 Custom Word/Name: ${wordToSubmit} (${cleanWord.length > 0 ? cleanWord.length : 1} Letter(s))\n💰 Total Price: ₹${(calculatedPrice * quantity).toLocaleString('en-IN')}\n🔢 Quantity: ${quantity}\n\nPlease share availability and payment details.\nThank you! 🙏`;
    } else {
      const currentPrice = product.sizePrices && selectedSize ? product.sizePrices[selectedSize] : product.price;
      message = `Hello Mandala Blend! 🎨\n\nI would like to order:\n📦 Product: ${product.name}\n📐 Size: ${selectedSize || 'Standard'}\n💰 Total Price: ₹${(currentPrice * quantity).toLocaleString('en-IN')}\n🔢 Quantity: ${quantity}\n\nPlease share payment details.\nThank you! 🙏`;
    }
    trackWhatsAppOrderClicked(product.id, product.name, product.price, selectedSize, quantity);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const prevImage = () => setActiveImage(i => (i - 1 + product.images.length) % product.images.length);
  const nextImage = () => setActiveImage(i => (i + 1) % product.images.length);

  return (
    <div className="product-page">
      <SEO
        title={`${product.name} | The Mandala Blend`}
        description={`Buy ${product.name} under ${product.category.replace(/-/g, ' ')}. 100% handmade dot mandala artwork. ${product.customizable ? 'Custom orders and personalization options available.' : ''} Delivery time: ${product.deliveryTime}.`}
        ogType="product"
        ogImage={product.images[0]}
        productData={{
          name: product.name,
          description: product.description,
          category: product.category,
          image: product.images[0],
          price: product.price,
          customizable: product.customizable,
          slug: product.slug
        }}
        breadcrumbs={[
          { name: 'Home', item: 'https://themandalablend.in/' },
          { name: 'Collections', item: 'https://themandalablend.in/collections' },
          { name: product.name, item: `https://themandalablend.in/collections/${product.slug}` }
        ]}
      />
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
              <LazyImage
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                priority
                objectFit="cover"
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
                    <LazyImage
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
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
                {product.id === 'p66' ? (
                  `₹${(649 * letterCount).toLocaleString('en-IN')}`
                ) : product.sizePrices ? (
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

            {/* Custom word input for p66 */}
            {product.id === 'p66' && (
              <div className="product-page__custom-word">
                <label className="product-page__sizes-label">Custom Word / Name</label>
                <input
                  type="text"
                  placeholder="e.g. MANDALA"
                  value={customWord}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                    setCustomWord(val);
                  }}
                  className="product-page__custom-word-input"
                />
                <p className="product-page__custom-word-hint">
                  {customWord.replace(/[^a-zA-Z]/g, '').length} letter(s) detected (₹649 per letter).
                </p>
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

            {/* Action Buttons */}
            <div className="product-page__actions">
              <button
                className="product-page__order-btn"
                onClick={handleWhatsApp}
                id="product-order-whatsapp-btn"
                aria-label={`Order ${product.name} on WhatsApp`}
              >
                <FaWhatsapp aria-hidden="true" />
                Order on WhatsApp
              </button>

              <div className="product-page__share-container">
                <button
                  className={`product-page__share-btn ${showShareOptions ? 'active' : ''}`}
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  aria-expanded={showShareOptions}
                  aria-haspopup="true"
                  aria-label="Share this product"
                >
                  <FiShare2 aria-hidden="true" />
                  Share Product
                </button>

                <AnimatePresence>
                  {showShareOptions && (
                    <motion.div
                      className="product-page__share-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      <button
                        className="product-page__share-item"
                        onClick={handleShareWhatsApp}
                      >
                        <FaWhatsapp className="icon-whatsapp" aria-hidden="true" />
                        Share on WhatsApp
                      </button>

                      <button
                        className="product-page__share-item"
                        onClick={handleCopyLink}
                      >
                        {copied ? (
                          <FiCheck className="icon-check" aria-hidden="true" />
                        ) : (
                          <FiCopy className="icon-copy" aria-hidden="true" />
                        )}
                        {copied ? 'Link Copied!' : 'Copy Link'}
                      </button>

                      {'share' in navigator && (
                        <button
                          className="product-page__share-item"
                          onClick={handleNativeShare}
                        >
                          <FiShare2 className="icon-share" aria-hidden="true" />
                          Share via Devices
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

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
                    vibrant, lasting color. The MDF base is precision-cut and sealed with a smooth
                    resin finish coat for a glossy, premium look and long-lasting durability.
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
          {product.id === 'p66' ? (
            `₹${(649 * letterCount).toLocaleString('en-IN')}`
          ) : product.sizePrices ? (
            selectedSize ? (
              `₹${product.sizePrices[selectedSize].toLocaleString('en-IN')}`
            ) : (
              `₹${Math.min(...Object.values(product.sizePrices)).toLocaleString('en-IN')} - ₹${Math.max(...Object.values(product.sizePrices)).toLocaleString('en-IN')}`
            )
          ) : (
            `₹${product.price.toLocaleString('en-IN')}`
          )}
        </div>
        <div className="product-page__mobile-actions">
          <button
            className="product-page__mobile-order"
            onClick={handleWhatsApp}
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <FaWhatsapp aria-hidden="true" />
            Order
          </button>
          
          <div className="product-page__mobile-share-wrapper">
            <button
              className={`product-page__mobile-share ${showShareOptions ? 'active' : ''}`}
              onClick={handleShareClick}
              aria-label="Share this product"
            >
              <FiShare2 aria-hidden="true" />
            </button>

            <AnimatePresence>
              {showShareOptions && !navigator.share && (
                <motion.div
                  className="product-page__mobile-share-dropdown"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <button
                    className="product-page__share-item"
                    onClick={handleShareWhatsApp}
                  >
                    <FaWhatsapp className="icon-whatsapp" aria-hidden="true" />
                    WhatsApp
                  </button>

                  <button
                    className="product-page__share-item"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <FiCheck className="icon-check" aria-hidden="true" />
                    ) : (
                      <FiCopy className="icon-copy" aria-hidden="true" />
                    )}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
