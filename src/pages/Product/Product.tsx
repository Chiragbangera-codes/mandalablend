import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaStar, FaShieldAlt, FaLeaf, FaBox, FaTruck } from 'react-icons/fa';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { createWhatsappLink } from '@/services/whatsapp';
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import './Product.scss';

const TRUST_ITEMS = [
  { icon: <FaLeaf />, label: '100% Handmade' },
  { icon: <FaShieldAlt />, label: 'Premium Quality' },
  { icon: <FaBox />, label: 'Safe Packaging' },
  { icon: <FaTruck />, label: 'Pan India Delivery' },
];

const TABS = ['Description', 'Materials & Care', 'Shipping Info'];

const Product: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  if (!product) return <Navigate to="/collections" replace />;

  const related = getRelatedProducts(product);

  const handleWhatsApp = () => {
    window.open(
      createWhatsappLink(product.name, product.price, selectedSize || product.sizes[0], quantity),
      '_blank'
    );
  };

  return (
    <div className="product-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="product-page__breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/collections">Collections</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Main Layout */}
        <div className="product-page__layout">
          {/* Gallery */}
          <motion.div className="product-page__gallery" variants={fadeLeft} initial="hidden" animate="visible">
            <div className="product-page__main-img">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-mandala.png'; }}
              />
            </div>
            <div className="product-page__thumbs">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`product-page__thumb ${activeImage === i ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`}
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-mandala.png'; }}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div className="product-page__info" variants={fadeRight} initial="hidden" animate="visible">
            <span className="product-page__category">{product.category.replace(/-/g, ' ')}</span>
            <h1 className="product-page__name">{product.name}</h1>

            <div className="product-page__rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : 'empty'} />
              ))}
              <span>{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <div className="product-page__price-row">
              <span className="product-page__price">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="product-page__original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              )}
              {product.bestSeller && <span className="product-page__badge">Best Seller</span>}
            </div>

            <p className="product-page__desc">{product.description}</p>

            {/* Specs */}
            <div className="product-page__specs">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className="product-page__spec">
                  <span>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            {/* Size Selector */}
            <div className="product-page__sizes">
              <label>Select Size:</label>
              <div className="product-page__size-btns">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`product-page__size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="product-page__qty">
              <label>Quantity:</label>
              <div className="product-page__qty-ctrl">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button className="product-page__order-btn" onClick={handleWhatsApp} id="product-order-whatsapp-btn">
              <FaWhatsapp />
              Order on WhatsApp
            </button>

            {/* Delivery */}
            <p className="product-page__delivery">🚚 Delivery in {product.deliveryTime}</p>

            {/* Trust Strip */}
            <div className="product-page__trust">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="product-page__trust-item">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="product-page__tabs">
          <div className="product-page__tab-nav">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`product-page__tab-btn ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="product-page__tab-content">
            {activeTab === 0 && <p>{product.description}</p>}
            {activeTab === 1 && (
              <p>Material: {product.material}. All inks used are archival-quality and fade-resistant. Clean with a soft dry cloth only.</p>
            )}
            {activeTab === 2 && (
              <p>We ship Pan India via trusted courier partners. Estimated delivery: {product.deliveryTime}. Free shipping on orders above ₹999.</p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="product-page__related">
            <h2>You Might Also Like</h2>
            <motion.div
              className="product-page__related-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
