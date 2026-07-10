import React, { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiX, FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { staggerContainer, fadeUp } from '@/animations/variants';
import { getProductsByCategory } from '@/data/products';
import { PRODUCT_CATEGORIES, WHATSAPP_NUMBER } from '@/utils/constants';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import SEO from '@/components/common/SEO/SEO';
import { trackCategorySelected, trackSearchPerformed, trackFilterApplied } from '@/analytics';
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
  const [maxPrice, setMaxPrice] = useState(7500);
  const [filterOpen, setFilterOpen] = useState(false); // mobile filter drawer
  const [availability, setAvailability] = useState({ available: false, custom: false });
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = searchParams.get('cat') || 'all';

  const filtered = useMemo(() => {
    let result = getProductsByCategory(activeCategory);
    result = result.filter(p => p.price <= maxPrice);
    if (availability.custom) result = result.filter(p => p.customizable);
    if (searchQuery.trim()) {
      const words = searchQuery.trim().toLowerCase().split(/\s+/);
      result = result.filter(p =>
        words.every(w => p.name.toLowerCase().includes(w))
      );
    }
    if (sortBy === 'price-asc')  result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating')     result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sortBy, maxPrice, availability, searchQuery]);

  const setCategory = useCallback((cat: string) => {
    setSearchParams(cat === 'all' ? {} : { cat });
    trackCategorySelected(cat);
  }, [setSearchParams]);

  const resetFilters = useCallback(() => {
    setMaxPrice(7500);
    setSortBy('default');
    setAvailability({ available: false, custom: false });
    setSearchQuery('');
  }, []);

  // Track search query with debounce
  React.useEffect(() => {
    if (searchQuery.trim()) {
      const timer = setTimeout(() => {
        trackSearchPerformed(searchQuery);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  // Track filters
  React.useEffect(() => {
    if (maxPrice !== 7500) {
      trackFilterApplied('max_price', maxPrice);
    }
  }, [maxPrice]);

  React.useEffect(() => {
    if (availability.custom) {
      trackFilterApplied('customizable_only', true);
    }
  }, [availability.custom]);

  React.useEffect(() => {
    if (sortBy !== 'default') {
      trackFilterApplied('sort_by', sortBy);
    }
  }, [sortBy]);

  return (
    <div className="collections-page">
      <SEO
        title="Collections | The Mandala Blend"
        description="Browse our complete collection of handmade mandala artwork including frames, keychains, personalized gifts and custom creations."
      />
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
            <h2 className="collections-page__sidebar-heading">Filters</h2>

            {/* Categories */}
            <div className="collections-page__filter-group">
              <h3 className="collections-page__filter-label">Categories</h3>
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
              <h3 className="collections-page__filter-label">
                Max Price: ₹{maxPrice.toLocaleString('en-IN')}
              </h3>
              <input
                type="range"
                className="collections-page__price-slider"
                min={200}
                max={7500}
                step={100}
                value={maxPrice}
                onChange={e => { setMaxPrice(Number(e.target.value)); }}
                aria-label={`Maximum price: ₹${maxPrice}`}
              />
              <div className="collections-page__price-range">
                <span>₹200</span>
                <span>₹7,500</span>
              </div>
            </div>

            {/* Availability */}
            <div className="collections-page__filter-group">
              <h3 className="collections-page__filter-label">Options</h3>
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
              <h3>Need a Custom Order?</h3>
              <p>Tell us your design and we'll create it just for you.</p>
                <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
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
            {/* Search Bar */}
            <div className="collections-page__search-bar">
              <FiSearch className="collections-page__search-icon" aria-hidden="true" />
              <input
                type="text"
                className="collections-page__search-input"
                placeholder="Search products… (e.g. keychain, frame)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search products"
                id="collections-search"
              />
              {searchQuery && (
                <button
                  className="collections-page__search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* Toolbar */}
            <div className="collections-page__toolbar">
              <span className="collections-page__results-info">
                Showing <strong>{filtered.length}</strong> products
                {searchQuery && <em> for &ldquo;{searchQuery}&rdquo;</em>}
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
                <h2>No Products Found</h2>
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
