import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportConfig } from '@/utils/animations';
import { products, getProductsByCategory } from '@/data/products';
import { PRODUCT_CATEGORIES } from '@/utils/constants';
import ProductCard from '@/components/product/ProductCard/ProductCard';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import InstagramFeed from '@/components/sections/InstagramFeed/InstagramFeed';
import './Collections.scss';

const ITEMS_PER_PAGE = 8;

const Collections: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(5000);

  const activeCategory = searchParams.get('cat') || 'all';

  const filtered = useMemo(() => {
    let result = getProductsByCategory(activeCategory);
    result = result.filter(p => p.price <= maxPrice);
    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sortBy, maxPrice]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const setCategory = (cat: string) => {
    setSearchParams(cat === 'all' ? {} : { cat });
    setCurrentPage(1);
  };

  return (
    <div className="collections-page">
      {/* Banner */}
      <div className="collections-page__banner">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="collections-page__banner-eyebrow">Our Creations</span>
            <h1 className="collections-page__banner-title">Mandala Collections</h1>
            <p className="collections-page__banner-desc">
              Browse our curated collection of handmade mandala art — each piece crafted with love.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container collections-page__body">
        {/* Category Tabs */}
        <div className="collections-page__tabs">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`collections-page__tab ${activeCategory === cat.value ? 'collections-page__tab--active' : ''}`}
              onClick={() => setCategory(cat.value)}
              id={`tab-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="collections-page__layout">
          {/* Sidebar */}
          <aside className="collections-page__sidebar">
            <h3>Filters</h3>
            <div className="collections-page__filter-group">
              <label>Sort By</label>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <div className="collections-page__filter-group">
              <label>Max Price: ₹{maxPrice.toLocaleString('en-IN')}</label>
              <input
                type="range"
                min={200}
                max={5000}
                step={100}
                value={maxPrice}
                onChange={e => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
              />
              <div className="collections-page__price-range">
                <span>₹200</span>
                <span>₹5000</span>
              </div>
            </div>
            <div className="collections-page__custom-cta">
              <h4>Need a Custom Order?</h4>
              <p>Tell us your design and we'll create something just for you.</p>
              <a href="https://wa.me/919480675351" target="_blank" rel="noopener noreferrer" className="collections-page__custom-btn">
                WhatsApp Us
              </a>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="collections-page__main">
            <div className="collections-page__results-info">
              <span>{filtered.length} products found</span>
            </div>
            {paginated.length > 0 ? (
              <motion.div
                className="collections-page__grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                key={activeCategory + currentPage}
              >
                {paginated.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <div className="collections-page__empty">
                <p>No products found. Try different filters.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="collections-page__pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`collections-page__page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
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
