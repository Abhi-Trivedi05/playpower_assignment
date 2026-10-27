import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function NearbyStays({ stays = [] }) {
  const sliderRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);

  const calculatePages = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) {
        setTotalPages(1);
        setCurrentPage(1);
        return;
      }
      const pageCount = Math.round(scrollWidth / clientWidth);
      const total = Math.max(1, pageCount);
      const current = Math.min(Math.max(1, Math.round(scrollLeft / clientWidth) + 1), total);
      setTotalPages(total);
      setCurrentPage(current);
    }
  };

  useEffect(() => {
    calculatePages();
    window.addEventListener('resize', calculatePages);
    return () => window.removeEventListener('resize', calculatePages);
  }, [stays]);

  const handlePrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      if (scrollLeft <= 10) {
        sliderRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: -(clientWidth + 16), behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: clientWidth + 16, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="nearby-stays-wrap" aria-label="Nearby accommodations">
      <div className="nearby-header-row">
        <h3 className="section-heading-lg" style={{ marginBottom: 0 }}>More stays nearby</h3>
        <div className="carousel-nav-controls">
          <span className="page-index-indicator">{currentPage} / {totalPages}</span>
          <button className="carousel-arrow-btn" onClick={handlePrev} aria-label="Previous stays">
            <ChevronLeft size={16} />
          </button>
          <button className="carousel-arrow-btn" onClick={handleNext} aria-label="Next stays">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        className="nearby-cards-slider"
        ref={sliderRef}
        onScroll={calculatePages}
      >
        {stays.map((stay) => (
          <div key={stay.id} className="nearby-card" role="button" tabIndex={0}>
            <div className="nearby-card-img-wrap">
              <img
                src={stay.image}
                alt={stay.title}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80";
                }}
              />
            </div>
            <div className="nearby-stay-title">{stay.title}</div>
            <div className="nearby-stay-price-rating">
              <span style={{ fontWeight: 600 }}>₹{stay.price.toLocaleString('en-IN')}</span>
              <span style={{ color: '#717171' }}>·</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Star size={12} fill="currentColor" />
                <span>{stay.rating.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
