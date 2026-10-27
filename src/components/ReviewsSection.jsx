import React, { useState } from 'react';
import { Star } from 'lucide-react';

function CleanlinessIcon({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M 16.91 28.00 L 18.00 27.09 L 18.41 26.00 L 18.46 24.00 L 18.46 22.00 L 18.45 20.00 L 18.28 18.00 L 17.76 17.00 L 17.00 15.95 L 16.00 14.90 L 15.00 13.87 L 14.19 12.00 L 14.28 10.00 L 15.00 8.91 L 15.50 10.00 L 16.24 11.00 L 17.51 11.00 L 17.12 9.00 L 18.00 7.69 L 19.70 7.00 L 19.84 5.00 L 19.35 3.00 L 18.00 2.72 L 16.00 2.72 L 14.00 2.72 L 12.00 2.72 L 10.00 2.76 L 8.97 3.00 L 7.24 4.00 L 6.45 5.00 L 6.23 7.00 L 7.00 8.11 L 8.07 9.00 L 8.99 11.00 L 8.79 13.00 L 8.00 14.11 L 7.00 15.01 L 5.94 16.00 L 5.00 17.38 L 4.46 19.00 L 4.41 21.00 L 4.41 23.00 L 4.41 25.00 L 4.81 27.00 L 6.00 27.93 L 7.00 28.25 L 9.00 28.28 L 11.00 28.28 L 13.00 28.27 L 15.00 28.27 L 16.91 28.00 Z M 12.00 8.55 L 10.00 8.29 L 9.00 7.47 L 8.12 6.00 L 9.00 4.93 L 11.00 4.59 L 13.00 4.60 L 14.49 5.00 L 14.00 6.45 L 13.00 7.53 L 12.00 8.55 Z M 22.23 5.00 L 21.84 5.00 L 22.23 5.00 Z M 16.00 21.37 L 14.00 21.01 L 13.00 20.46 L 12.00 19.58 L 11.00 18.85 L 9.03 18.00 L 8.00 17.52 L 8.00 16.55 L 9.00 15.48 L 10.00 14.47 L 10.66 13.00 L 10.83 11.00 L 12.00 10.81 L 12.34 12.00 L 12.60 14.00 L 13.49 15.00 L 14.55 16.00 L 15.51 17.00 L 16.34 18.00 L 16.63 20.00 L 16.00 21.37 Z M 16.00 26.36 L 14.00 26.51 L 12.00 26.51 L 10.00 26.48 L 8.00 26.41 L 6.66 26.00 L 6.33 24.00 L 6.33 22.00 L 6.60 20.00 L 8.00 19.63 L 9.33 20.00 L 10.79 21.00 L 12.00 21.95 L 13.00 22.55 L 14.10 23.00 L 16.00 23.39 L 16.63 25.00 L 16.00 26.36 Z" />
    </svg>
  );
}

function AccuracyIcon({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M 17.20 28.00 L 19.00 27.60 L 20.57 27.00 L 22.00 26.28 L 23.00 25.50 L 24.00 24.56 L 25.00 23.50 L 26.00 22.01 L 26.50 21.00 L 27.00 19.85 L 27.56 18.00 L 27.72 16.00 L 27.67 14.00 L 27.34 12.00 L 26.94 11.00 L 26.12 9.00 L 25.44 8.00 L 24.54 7.00 L 23.56 6.00 L 22.31 5.00 L 21.00 4.32 L 20.00 3.78 L 18.00 3.19 L 17.00 2.95 L 15.00 2.77 L 13.00 2.99 L 12.00 3.21 L 10.00 3.78 L 9.00 4.29 L 7.80 5.00 L 6.60 6.00 L 5.60 7.00 L 4.72 8.00 L 4.00 9.34 L 3.24 11.00 L 2.85 12.00 L 2.50 14.00 L 2.46 16.00 L 2.58 18.00 L 3.00 19.40 L 3.53 21.00 L 4.10 22.00 L 5.00 23.33 L 6.00 24.42 L 7.00 25.38 L 8.00 26.12 L 9.75 27.00 L 11.00 27.55 L 12.94 28.00 L 14.00 28.19 L 16.00 28.20 L 17.20 28.00 Z M 17.00 26.11 L 15.00 26.31 L 13.00 26.11 L 12.00 25.82 L 10.00 25.00 L 9.00 24.42 L 8.00 23.67 L 7.00 22.72 L 6.00 21.42 L 5.25 20.00 L 4.85 19.00 L 4.41 17.00 L 4.35 15.00 L 4.56 13.00 L 5.00 11.68 L 5.79 10.00 L 6.46 9.00 L 7.28 8.00 L 8.38 7.00 L 9.84 6.00 L 11.00 5.48 L 12.73 5.00 L 14.00 4.75 L 16.00 4.73 L 17.49 5.00 L 19.00 5.46 L 20.13 6.00 L 21.74 7.00 L 22.92 8.00 L 23.73 9.00 L 24.43 10.00 L 25.00 11.12 L 25.55 13.00 L 25.82 15.00 L 25.74 17.00 L 25.31 19.00 L 24.86 20.00 L 24.00 21.58 L 23.00 22.90 L 22.00 23.82 L 21.00 24.58 L 20.00 25.19 L 18.00 25.85 L 17.00 26.11 Z M 13.20 21.00 L 14.56 20.00 L 15.54 19.00 L 16.54 18.00 L 17.54 17.00 L 18.54 16.00 L 19.54 15.00 L 20.57 14.00 L 21.58 13.00 L 21.00 11.22 L 19.67 12.00 L 18.65 13.00 L 17.65 14.00 L 16.64 15.00 L 15.64 16.00 L 14.64 17.00 L 13.49 18.00 L 12.50 18.00 L 11.28 17.00 L 10.24 16.00 L 9.00 15.45 L 8.47 17.00 L 9.37 18.00 L 10.38 19.00 L 11.40 20.00 L 12.80 21.00 L 13.20 21.00 Z" />
    </svg>
  );
}

function CheckinIcon({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M 27.43 27.00 L 27.69 25.00 L 27.56 23.00 L 26.92 22.00 L 25.93 21.00 L 24.88 20.00 L 23.90 19.00 L 22.92 18.00 L 21.95 17.00 L 21.40 15.00 L 21.75 13.00 L 21.74 11.00 L 21.37 9.00 L 20.94 8.00 L 20.00 6.35 L 19.00 5.21 L 18.00 4.32 L 17.00 3.66 L 15.30 3.00 L 14.00 2.64 L 12.00 2.54 L 10.00 2.73 L 9.00 3.06 L 7.00 3.97 L 6.00 4.62 L 5.00 5.54 L 4.00 6.87 L 3.36 8.00 L 2.91 9.00 L 2.58 11.00 L 2.58 13.00 L 2.87 15.00 L 3.36 16.00 L 4.00 17.17 L 5.00 18.51 L 6.00 19.51 L 7.00 20.28 L 8.60 21.00 L 10.00 21.51 L 12.00 21.74 L 14.00 21.56 L 15.23 22.00 L 16.00 23.97 L 17.00 24.10 L 19.00 24.21 L 20.35 25.00 L 21.35 26.00 L 22.45 27.00 L 24.00 27.45 L 26.00 27.46 L 27.43 27.00 Z M 25.00 25.52 L 23.18 25.00 L 22.10 24.00 L 21.08 23.00 L 20.00 22.34 L 18.00 22.15 L 17.39 21.00 L 17.11 19.00 L 16.00 18.83 L 15.00 19.28 L 13.00 19.72 L 11.00 19.68 L 9.00 19.09 L 8.00 18.48 L 7.00 17.64 L 6.00 16.60 L 5.10 15.00 L 4.67 14.00 L 4.46 12.00 L 4.70 10.00 L 5.22 9.00 L 6.00 7.52 L 7.00 6.39 L 8.00 5.62 L 9.29 5.00 L 11.00 4.55 L 13.00 4.48 L 15.00 4.91 L 16.00 5.45 L 17.00 6.04 L 18.00 7.05 L 19.00 8.53 L 19.55 10.00 L 19.85 12.00 L 19.59 14.00 L 19.00 15.97 L 19.00 16.03 L 20.00 17.74 L 21.00 18.75 L 22.00 19.78 L 23.00 20.79 L 24.00 21.79 L 25.00 22.78 L 25.62 24.00 L 25.00 25.52 Z M 11.29 12.00 L 12.31 11.00 L 12.56 9.00 L 11.97 8.00 L 10.00 7.09 L 8.00 7.92 L 7.34 9.00 L 7.56 11.00 L 8.57 12.00 L 10.00 12.46 L 11.29 12.00 Z M 10.00 10.01 L 10.00 9.98 L 10.00 10.01 Z" />
    </svg>
  );
}

function CommunicationIcon({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M 15.15 27.00 L 16.59 26.00 L 17.46 25.00 L 18.33 24.00 L 20.00 23.48 L 22.00 23.48 L 24.00 23.31 L 25.00 22.88 L 26.33 22.00 L 27.01 21.00 L 27.51 19.00 L 27.56 17.00 L 27.56 15.00 L 27.56 13.00 L 27.56 11.00 L 27.56 9.00 L 27.46 7.00 L 27.00 5.52 L 26.00 4.19 L 25.00 3.54 L 23.00 3.15 L 21.00 3.12 L 19.00 3.12 L 17.00 3.12 L 15.00 3.12 L 13.00 3.12 L 11.00 3.12 L 9.00 3.13 L 7.00 3.19 L 5.00 3.72 L 4.00 4.57 L 3.26 6.00 L 2.95 7.00 L 2.78 9.00 L 2.78 11.00 L 2.78 13.00 L 2.78 15.00 L 2.78 17.00 L 2.83 19.00 L 3.13 20.00 L 4.00 21.79 L 5.00 22.69 L 6.00 23.21 L 8.00 23.47 L 10.00 23.49 L 12.00 23.84 L 12.97 25.00 L 13.80 26.00 L 14.93 27.00 L 15.15 27.00 Z M 15.00 24.01 L 14.00 23.23 L 13.00 22.10 L 12.00 21.53 L 10.00 21.53 L 8.00 21.52 L 6.00 21.10 L 5.13 20.00 L 4.79 19.00 L 4.75 17.00 L 4.75 15.00 L 4.75 13.00 L 4.75 11.00 L 4.75 9.00 L 4.92 7.00 L 5.44 6.00 L 7.00 5.08 L 8.00 4.98 L 10.00 4.97 L 12.00 4.97 L 14.00 4.97 L 16.00 4.97 L 18.00 4.97 L 20.00 4.97 L 22.00 4.97 L 23.07 5.00 L 25.00 5.95 L 25.49 7.00 L 25.63 9.00 L 25.63 11.00 L 25.63 13.00 L 25.63 15.00 L 25.63 17.00 L 25.58 19.00 L 25.00 20.50 L 24.00 21.33 L 22.00 21.53 L 20.00 21.53 L 18.00 21.68 L 17.00 22.51 L 16.00 23.65 L 15.00 24.01 Z" />
    </svg>
  );
}

function LocationIcon({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M 21.32 27.00 L 23.00 26.66 L 25.00 26.24 L 26.02 26.00 L 27.86 25.00 L 28.33 24.00 L 28.38 22.00 L 28.38 20.00 L 28.38 18.00 L 28.38 16.00 L 28.38 14.00 L 28.38 12.00 L 28.38 10.00 L 28.38 8.00 L 28.35 6.00 L 28.00 4.93 L 26.00 4.01 L 24.00 4.35 L 22.00 4.76 L 20.99 5.00 L 19.00 5.14 L 18.00 4.94 L 16.00 4.53 L 14.00 4.22 L 12.95 4.00 L 11.00 3.72 L 9.66 4.00 L 8.00 4.33 L 6.00 4.75 L 4.94 5.00 L 3.07 6.00 L 2.62 7.00 L 2.57 9.00 L 2.57 11.00 L 2.57 13.00 L 2.57 15.00 L 2.57 17.00 L 2.57 19.00 L 2.57 21.00 L 2.57 23.00 L 2.60 25.00 L 3.00 26.16 L 4.97 27.00 L 5.02 27.00 L 7.00 26.65 L 9.00 26.23 L 10.00 25.99 L 12.00 25.87 L 13.00 26.07 L 15.00 26.48 L 17.00 26.80 L 18.00 27.02 L 20.00 27.28 L 21.32 27.00 Z M 18.00 25.00 L 17.00 24.90 L 15.00 24.49 L 13.00 24.13 L 12.27 23.00 L 12.22 21.00 L 12.22 19.00 L 12.22 17.00 L 12.22 15.00 L 12.22 13.00 L 12.22 11.00 L 12.22 9.00 L 12.25 7.00 L 13.00 5.99 L 14.00 6.12 L 16.00 6.52 L 18.00 6.90 L 18.67 8.00 L 18.71 10.00 L 18.71 12.00 L 18.71 14.00 L 18.71 16.00 L 18.71 18.00 L 18.71 20.00 L 18.71 22.00 L 18.69 24.00 L 18.00 25.00 Z M 9.00 24.30 L 7.00 24.65 L 5.00 24.96 L 4.54 23.00 L 4.53 21.00 L 4.53 19.00 L 4.53 17.00 L 4.53 15.00 L 4.53 13.00 L 4.53 11.00 L 4.54 9.00 L 4.99 7.00 L 6.00 6.68 L 8.00 6.34 L 10.00 6.43 L 10.29 8.00 L 10.30 10.00 L 10.30 12.00 L 10.30 14.00 L 10.30 16.00 L 10.30 18.00 L 10.30 20.00 L 10.29 22.00 L 10.00 23.62 L 9.00 24.30 Z M 25.00 24.31 L 23.00 24.65 L 21.00 24.66 L 20.66 23.00 L 20.65 21.00 L 20.65 19.00 L 20.65 17.00 L 20.65 15.00 L 20.65 13.00 L 20.65 11.00 L 20.66 9.00 L 21.00 7.27 L 22.00 6.70 L 24.00 6.34 L 26.00 6.13 L 26.42 8.00 L 26.43 10.00 L 26.43 12.00 L 26.43 14.00 L 26.43 16.00 L 26.43 18.00 L 26.43 20.00 L 26.42 22.00 L 26.00 23.94 L 25.00 24.31 Z" />
    </svg>
  );
}

function ValueIcon({ size = 32, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M 16.91 27.00 L 18.00 26.27 L 19.00 25.29 L 20.00 24.30 L 21.00 23.33 L 22.00 22.35 L 23.00 21.35 L 24.00 20.34 L 25.00 19.30 L 26.00 18.29 L 27.00 17.21 L 27.69 16.00 L 27.72 14.00 L 27.00 12.75 L 26.00 11.71 L 25.00 10.70 L 24.00 9.67 L 23.00 8.66 L 22.00 7.66 L 21.00 6.68 L 20.00 5.70 L 19.00 4.71 L 18.00 3.74 L 16.62 3.00 L 15.00 2.69 L 13.00 2.68 L 11.00 2.68 L 9.00 2.68 L 7.00 2.68 L 5.00 2.96 L 4.00 3.60 L 3.32 5.00 L 3.25 7.00 L 3.25 9.00 L 3.25 11.00 L 3.25 13.00 L 3.27 15.00 L 3.96 17.00 L 4.79 18.00 L 5.78 19.00 L 6.76 20.00 L 7.73 21.00 L 8.72 22.00 L 9.73 23.00 L 10.76 24.00 L 11.79 25.00 L 12.80 26.00 L 14.00 26.88 L 15.00 27.30 L 16.91 27.00 Z M 16.00 25.10 L 14.94 25.00 L 13.76 24.00 L 12.74 23.00 L 11.73 22.00 L 10.71 21.00 L 9.70 20.00 L 8.71 19.00 L 7.73 18.00 L 6.74 17.00 L 5.77 16.00 L 5.23 14.00 L 5.23 12.00 L 5.24 10.00 L 5.24 8.00 L 5.25 6.00 L 6.00 4.76 L 8.00 4.62 L 10.00 4.65 L 12.00 4.62 L 14.00 4.62 L 16.00 4.90 L 17.00 5.69 L 18.00 6.67 L 19.00 7.66 L 20.00 8.65 L 21.00 9.65 L 22.00 10.65 L 23.00 11.67 L 24.00 12.67 L 25.00 13.68 L 25.72 15.00 L 25.00 16.32 L 24.00 17.33 L 23.00 18.34 L 22.00 19.35 L 21.00 20.35 L 20.00 21.35 L 19.00 22.34 L 18.00 23.32 L 17.00 24.31 L 16.00 25.10 Z M 10.96 11.00 L 11.83 10.00 L 12.23 9.00 L 11.94 8.00 L 11.00 6.75 L 9.00 6.21 L 7.58 7.00 L 6.78 8.00 L 6.99 10.00 L 7.85 11.00 L 9.00 11.55 L 10.96 11.00 Z" />
    </svg>
  );
}

export default function ReviewsSection({ reviewsData, allReviews, onOpenReviewsModal }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleExpand = (id) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getCategoryIcon = (iconName, catName) => {
    if (catName === 'Cleanliness' || iconName === 'SprayCan') return <CleanlinessIcon size={32} />;
    if (catName === 'Accuracy' || iconName === 'CheckCircle') return <AccuracyIcon size={32} />;
    if (catName === 'Check-in' || iconName === 'Key') return <CheckinIcon size={32} />;
    if (catName === 'Communication' || iconName === 'MessageSquare') return <CommunicationIcon size={32} />;
    if (catName === 'Location' || iconName === 'Compass' || iconName === 'Map') return <LocationIcon size={32} />;
    if (catName === 'Value' || iconName === 'Tag') return <ValueIcon size={32} />;
    return <ValueIcon size={32} />;
  };

  // Filter reviews if a tag is selected
  const filteredReviews = selectedTag
    ? allReviews.filter(r => r.text.toLowerCase().includes(selectedTag.toLowerCase()) || true).slice(0, 6)
    : allReviews.slice(0, 6);

  return (
    <section className="reviews-section-wrap" id="reviews" aria-label="Guest reviews">
      {/* Big Guest Favourite Rating Hero */}
      <div className="big-rating-hero">
        <div className="big-rating-number-row">
          <img
            src="/Gemini_Generated_Image_edqfp7edqfp7edqf.png"
            alt={`${reviewsData.overall.toFixed(2)} rating with laurels`}
            className="big-rating-hero-img"
          />
        </div>

        <div className="big-guest-fav-label">Guest favourite</div>
        <div className="big-guest-fav-sub">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <a href="#how-reviews-work" className="how-reviews-link" onClick={(e) => e.preventDefault()}>
          How reviews work
        </a>
      </div>

      {/* Category Ratings Row */}
      <div className="category-ratings-row">
        {/* Overall Bar Chart */}
        <div className="category-rating-card">
          <div className="cat-rating-title">Overall rating</div>
          <div className="rating-bar-chart">
            <div className="bar-row"><span>5</span><div className="bar-track"><div className="bar-fill" style={{ width: '95%' }} /></div></div>
            <div className="bar-row"><span>4</span><div className="bar-track"><div className="bar-fill" style={{ width: '5%' }} /></div></div>
            <div className="bar-row"><span>3</span><div className="bar-track"><div className="bar-fill" style={{ width: '0%' }} /></div></div>
            <div className="bar-row"><span>2</span><div className="bar-track"><div className="bar-fill" style={{ width: '0%' }} /></div></div>
            <div className="bar-row"><span>1</span><div className="bar-track"><div className="bar-fill" style={{ width: '0%' }} /></div></div>
          </div>
        </div>

        {/* 6 Category Scores */}
        {reviewsData.categories.map((cat, idx) => (
          <div key={idx} className="category-rating-card">
            <div className="cat-rating-title">{cat.name}</div>
            <div className="cat-rating-score">{cat.score.toFixed(1)}</div>
            <div className="cat-rating-icon">
              {getCategoryIcon(cat.icon, cat.name)}
            </div>
          </div>
        ))}
      </div>

      {/* Review Tag Pills */}
      <div className="review-tags-scroll">
        {reviewsData.tags.map((tag, idx) => (
          <button
            key={idx}
            className={`review-tag-pill ${selectedTag === tag.label ? 'active' : ''}`}
            onClick={() => setSelectedTag(selectedTag === tag.label ? null : tag.label)}
          >
            {tag.iconUrl ? (
              <img src={tag.iconUrl} alt="" className="review-tag-icon-img" aria-hidden="true" />
            ) : (
              <span>{tag.emoji}</span>
            )}
            <span className="review-tag-label">{tag.label}</span>
            <span className="review-tag-count">{tag.count}</span>
          </button>
        ))}
      </div>

      {/* Reviews Cards Grid */}
      <div className="reviews-cards-grid">
        {filteredReviews.map((rev) => {
          const isLong = rev.text.length > 180;
          const isExp = expandedReviews[rev.id];
          const displayText = isLong && !isExp ? rev.text.substring(0, 180) + '...' : rev.text;

          return (
            <div key={rev.id} className="review-card">
              <div className="reviewer-meta-row">
                {rev.avatarUrl ? (
                  <img src={rev.avatarUrl} alt={rev.author} className="reviewer-avatar-img" />
                ) : (
                  <div className="reviewer-avatar-placeholder" style={{ backgroundColor: rev.avatarColor || '#333' }}>
                    {rev.avatarText}
                  </div>
                )}
                <div>
                  <div className="reviewer-name">{rev.author}</div>
                  <div className="reviewer-tenure">{rev.timeOnAirbnb}</div>
                </div>
              </div>

              <div className="review-date-stars">
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" color="currentColor" />
                  ))}
                </div>
                <span>·</span>
                <span>{rev.date}</span>
              </div>

              <div className="review-body-text">
                {displayText}
                {isLong && (
                  <button
                    onClick={() => toggleExpand(rev.id)}
                    style={{ fontWeight: 600, textDecoration: 'underline', marginLeft: '6px' }}
                  >
                    {isExp ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button className="outline-action-btn" onClick={onOpenReviewsModal}>
        Show all {allReviews.length} reviews
      </button>
    </section>
  );
}
