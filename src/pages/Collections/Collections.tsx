import React, { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { staggerContainer, fadeUp, fadeLeft, viewportConfig } from '@/animations/variants';
import { products, getProductsByCategory } from '@/data/products';
import { PRODUCT_CATEGORIES } from '@/utils/constants';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import './Collections.scss';

const ITEMS_PER_PAGE = 8;

const sortOptions = [
  { value: 'default',    label: 'Featured' },
  { value: 'newest',     label: 'Newest' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating',     label: 'Top Rated' },
];

const Collections: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [filterOpen, setFilterOpen] = useState(false); // mobile filter drawer
  const [availability, setAvailability] = useState({ available: false, custom: false });

  const activeCategory = searchParams.get('cat') || 'all';

  const filtered = useMemo(() => {
    let result = getProductsByCategory(activeCategory);
    result = result.filter(p => p.price <= maxPrice);
    if (availability.custom) result = result.filter(p => p.customizable);
    if (sortBy === 'price-asc')  result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating')     result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sortBy, maxPrice, availability]);

  const setCategory = useCallback((cat: string) => {
    setSearchParams(cat === 'all' ? {} : { cat });
  }, [setSearchParams]);

  const resetFilters = useCallback(() => {
    setMaxPrice(5000);
    setSortBy('default');
    setAvailability({ available: false, custom: false });
  }, []);

  return (
    <div className="collections-page">
      {/* Chapter 4.5 — Hero Banner */}
      <div className="collections-page__banner">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="collections-page__banner-eyebrow">Our Creations</span>
            <h1 className="collections-page__banner-title">Our Collections</h1>
            <p className="collections-page__banner-desc">
              Discover handcrafted mandala artwork made with love and precision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chapter 4.6 — Category Navigation Pills */}
      <div className="collections-page__pills-bar">
        <div className="container">
          <div className="collections-page__pills">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                className={`collections-page__pill ${activeCategory === cat.value ? 'collections-page__pill--active' : ''}`}
                onClick={() => setCategory(cat.value)}
                id={`tab-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container collections-page__body">
        <div className="collections-page__layout">

          {/* Chapter 4.8 — Sticky Sidebar */}
          <aside className="collections-page__sidebar" aria-label="Filters">
            <h3 className="collections-page__sidebar-heading">Filters</h3>

            {/* Categories */}
            <div className="collections-page__filter-group">
              <h4 className="collections-page__filter-label">Categories</h4>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  className={`collections-page__sidebar-cat ${activeCategory === cat.value ? 'active' : ''}`}
                  onClick={() => setCategory(cat.value)}
                >
                  {activeCategory === cat.value && (
                    <span className="collections-page__sidebar-dot" aria-hidden="true" />
                  )}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div className="collections-page__filter-group">
              <h4 className="collections-page__filter-label">
                Max Price: ₹{maxPrice.toLocaleString('en-IN')}
              </h4>
              <input
                type="range"
                className="collections-page__price-slider"
                min={200}
                max={5000}
                step={100}
                value={maxPrice}
                onChange={e => { setMaxPrice(Number(e.target.value)); }}
                aria-label={`Maximum price: ₹${maxPrice}`}
              />
              <div className="collections-page__price-range">
                <span>₹200</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* Availability */}
            <div className="collections-page__filter-group">
              <h4 className="collections-page__filter-label">Options</h4>
              <label className="collections-page__checkbox">
                <input
                  type="checkbox"
                  checked={availability.custom}
                  onChange={e => { setAvailability(a => ({ ...a, custom: e.target.checked })); }}
                />
                <span>Customizable Only</span>
              </label>
            </div>

            {/* Reset */}
            <button className="collections-page__reset-btn" onClick={resetFilters}>
              Reset Filters
            </button>

            {/* Custom Order CTA */}
            <div className="collections-page__custom-cta">
              <h4>Need a Custom Order?</h4>
              <p>Tell us your design and we'll create it just for you.</p>
                <a
                href="https://wa.me/919480675351"
                target="_blank"
                rel="noopener noreferrer"
                className="collections-page__custom-btn"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </aside>

          {/* Main Product Grid */}
          <div className="collections-page__main">
            {/* Chapter 4.7 — Toolbar */}
            <div className="collections-page__toolbar">
              <span className="collections-page__results-info">
                Showing <strong>{filtered.length}</strong> products
              </span>
              <select
                className="collections-page__sort"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                aria-label="Sort products"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Product Grid */}
            {filtered.length > 0 ? (
              <motion.div
                className="collections-page__grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                key={activeCategory + sortBy}
              >
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              /* Chapter 4.12 — Empty State */
              <div className="collections-page__empty">
                <div className="collections-page__empty-icon">🖼️</div>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or browse all collections.</p>
                <button onClick={resetFilters} className="collections-page__empty-btn">
                  Browse All Collections
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <InstagramFeed />
    </div>
  );
};

export default Collections;
