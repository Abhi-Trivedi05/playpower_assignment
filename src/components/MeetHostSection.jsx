import React from 'react';

// Custom Airbnb Born Decade Balloon SVG Icon
function BalloonIcon({ size = 22, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5C8 2.5 5 5.8 5 9.8c0 3.2 2 5.9 5.5 6.9L10 18.5h4l-0.5-1.8c3.5-1 5.5-3.7 5.5-6.9 0-4-3-7.3-7-7.3z" />
      <path d="M12 18.5v2.5" />
    </svg>
  );
}

// Custom Airbnb Education Graduation Cap SVG Icon
function GraduationCapIcon({ size = 22, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 4 2 9 12 14 22 9 12 4" />
      <path d="M6 11.5v4.5c0 2.2 2.7 4 6 4s6-1.8 6-4v-4.5" />
      <path d="M21 9.5v6" />
    </svg>
  );
}

// Custom Airbnb Security Shield SVG Icon
function ShieldProtectionIcon({ size = 22, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 26"
      width={size}
      height={size * (26 / 24)}
      fill="none"
      stroke="#717171"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5L4 5.5v7.5c0 6.2 3.8 10.3 8 11.5 4.2-1.2 8-5.3 8-11.5V5.5L12 2.5z" />
      <line x1="12" y1="2.5" x2="12" y2="24.5" />
    </svg>
  );
}

// Custom Airbnb Identity Verified Coral Badge SVG with crisp white checkmark
function VerifiedBadge({ size = 28, className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="Verified Host"
    >
      {/* Outer subtle ring */}
      <circle cx="16" cy="16" r="15" stroke="#FF385C" strokeWidth="1.2" opacity="0.85" />
      {/* White spacer ring */}
      <circle cx="16" cy="16" r="13.5" fill="#FFFFFF" />
      {/* Solid Airbnb coral/pink badge circle */}
      <circle cx="16" cy="16" r="11" fill="#FF385C" />
      {/* Bold crisp white checkmark */}
      <path
        d="M10.8 16.2L14.2 19.6L21.2 12.6"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MeetHostSection({ host }) {
  return (
    <section className="meet-host-section-wrap" aria-label="Host information">
      <h3 className="section-heading-lg host-main-title">Meet your host</h3>

      <div className="meet-host-grid">
        {/* Left Column: Host Profile Card & Bio Points */}
        <div className="host-left-col">
          <div className="host-profile-card">
            {/* Left side of card: avatar + stacked name + role */}
            <div className="host-card-profile-side">
              <div className="host-avatar-container">
                <img
                  src={host.avatar}
                  alt={host.name}
                  className="host-card-avatar"
                />
                <div className="host-verified-badge" aria-label="Identity verified">
                  <VerifiedBadge size={28} />
                </div>
              </div>
              <div className="host-card-name">
                <span>Mirashya</span>
                <span>Homes</span>
              </div>
              <div className="host-card-role">Host</div>
            </div>

            {/* Right side of card: stats with dividers */}
            <div className="host-card-stats-side">
              <div className="host-stat-item">
                <span className="host-stat-num">{host.reviewsCount.toLocaleString()}</span>
                <span className="host-stat-lbl">Reviews</span>
              </div>
              <div className="host-stat-item">
                <span className="host-stat-num">{host.rating.toFixed(2)}★</span>
                <span className="host-stat-lbl">Rating</span>
              </div>
              <div className="host-stat-item last">
                <span className="host-stat-num">{host.yearsHosting}</span>
                <span className="host-stat-lbl">Years hosting</span>
              </div>
            </div>
          </div>

          <div className="host-bio-points">
            <div className="bio-point-row">
              <BalloonIcon size={24} />
              <span>{host.bornDecade}</span>
            </div>
            <div className="bio-point-row">
              <GraduationCapIcon size={24} />
              <span>Where I went to school: {host.education}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-hosts and Host Details */}
        <div className="host-right-col">
          <div className="cohosts-wrap">
            <h4 className="host-subheading">Co-Hosts</h4>
            <div className="cohosts-grid">
              {host.coHosts.map((cohost, idx) => (
                <div key={idx} className="cohost-item-row">
                  {cohost.avatar ? (
                    <img
                      src={cohost.avatar}
                      alt={cohost.name}
                      className="cohost-avatar-img"
                    />
                  ) : (
                    <div
                      className="cohost-avatar-initial"
                      style={{
                        backgroundColor: cohost.avatarColor || '#FCE8EC',
                        color: cohost.textColor || '#222'
                      }}
                    >
                      {cohost.avatarText}
                    </div>
                  )}
                  <span className="cohost-name">{cohost.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="host-meta-details-box">
            <h4 className="host-subheading">Host details</h4>
            <div className="host-meta-line">Response rate: {host.responseRate}</div>
            <div className="host-meta-line">{host.responseTime}</div>

            <button
              className="message-host-btn"
              onClick={() => alert('Host messaging dialog opened.')}
            >
              Message host
            </button>
          </div>

          <div className="payment-protection-note">
            <ShieldProtectionIcon size={24} />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
