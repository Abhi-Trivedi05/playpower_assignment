import React from 'react';
import { Star } from 'lucide-react';

export default function HostBadge({ type, specs, rating, reviewCount, guestFavouriteText, host }) {
  return (
    <div className="property-overview-wrap">
      {/* Property Subtitle and Specs */}
      <div className="property-subtitle-block">
        <h2>{type}</h2>
        <div className="property-specs-text">{specs}</div>
      </div>

      {/* Guest Favourite Badge Card */}
      <div className="guest-favourite-card">
        <div className="gf-laurel-badge">
          <img
            src="/botanical_sprig_left.svg"
            alt=""
            className="gf-sprig-icon"
            aria-hidden="true"
          />
          <div className="gf-badge-text">
            <span>Guest</span>
            <span>favourite</span>
          </div>
          <img
            src="/botanical_sprig_right.svg"
            alt=""
            className="gf-sprig-icon"
            aria-hidden="true"
          />
        </div>

        <div className="gf-center-desc">
          {guestFavouriteText}
        </div>

        <div className="gf-rating-block">
          <div className="gf-score-stars">
            <span className="score-num">{rating.toFixed(2)}</span>
            <div className="gf-stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="currentColor" color="currentColor" />
              ))}
            </div>
          </div>
          <div className="gf-divider-line" />
          <div className="gf-reviews-count">
            <span className="rev-num">{reviewCount}</span>
            <span className="rev-lbl">Reviews</span>
          </div>
        </div>
      </div>

      {/* Host Snippet Row */}
      <div className="host-snippet-row">
        <img
          src={host.avatar}
          alt={host.name}
          className="host-snippet-avatar"
        />
        <div>
          <div className="host-snippet-name">Hosted by {host.name}</div>
          <div className="host-snippet-tenure">{host.yearsHosting} years hosting</div>
        </div>
      </div>
    </div>
  );
}
