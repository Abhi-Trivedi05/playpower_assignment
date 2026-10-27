import React, { useState } from 'react';

export default function ThingsToKnowSection({ thingsToKnow }) {
  const [activeModal, setActiveModal] = useState(null);

  const cancellationLines = thingsToKnow?.cancellation?.lines || [
    "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    "Review this host's full policy for details."
  ];

  const houseRulesLines = thingsToKnow?.houseRules?.lines || [
    "Check-in after 2:00 pm",
    "Checkout before 11:00 am",
    "3 guests maximum"
  ];

  const safetyLines = thingsToKnow?.safety?.lines || [
    "Carbon monoxide alarm not reported",
    "Smoke alarm not reported",
    "Exterior security cameras on property"
  ];

  return (
    <section className="things-to-know-wrap" aria-label="House rules and policies">
      <h3 className="section-heading-lg">Things to know</h3>

      <div className="things-to-know-grid">
        {/* Cancellation Policy */}
        <div className="ttk-col">
          <svg
            className="ttk-icon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="10" y1="14" x2="14" y2="18" />
            <line x1="14" y1="14" x2="10" y2="18" />
          </svg>
          <h4 className="ttk-title">Cancellation policy</h4>
          <div className="ttk-desc-group">
            {cancellationLines.map((line, idx) => (
              <p key={idx} className="ttk-line">{line}</p>
            ))}
          </div>
          <button
            type="button"
            className="ttk-learn-more"
            onClick={() => setActiveModal('cancellation')}
          >
            Learn more
          </button>
        </div>

        {/* House Rules */}
        <div className="ttk-col">
          <svg
            className="ttk-icon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="7.5" cy="7.5" r="4.5" />
            <circle cx="7.5" cy="7.5" r="1.5" />
            <path d="m11 11 9 9" />
            <path d="m16 16-2 2" />
            <path d="m19 19-2 2" />
          </svg>
          <h4 className="ttk-title">House rules</h4>
          <div className="ttk-desc-group">
            {houseRulesLines.map((line, idx) => (
              <p key={idx} className="ttk-line">{line}</p>
            ))}
          </div>
          <button
            type="button"
            className="ttk-learn-more"
            onClick={() => setActiveModal('houseRules')}
          >
            Learn more
          </button>
        </div>

        {/* Safety & Property */}
        <div className="ttk-col">
          <svg
            className="ttk-icon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
          <h4 className="ttk-title">Safety & property</h4>
          <div className="ttk-desc-group">
            {safetyLines.map((line, idx) => (
              <p key={idx} className="ttk-line">{line}</p>
            ))}
          </div>
          <button
            type="button"
            className="ttk-learn-more"
            onClick={() => setActiveModal('safety')}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Mini info dialog if clicked */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-dialog-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>
              {activeModal === 'cancellation' && 'Cancellation Policy Details'}
              {activeModal === 'houseRules' && 'Full House Rules'}
              {activeModal === 'safety' && 'Safety & Property Details'}
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#444' }}>
              {activeModal === 'cancellation' && 'Full refund available up to 48 hours before check-in. If booked within 48 hours, cancel within 2 hours for a full refund.'}
              {activeModal === 'houseRules' && 'No smoking indoors. Quiet hours begin at 10:00 pm. Maximum 3 registered guests. Parties and commercial events are strictly prohibited.'}
              {activeModal === 'safety' && 'Exterior CCTV cameras monitor the building gate and common parking area. Smoke and carbon monoxide detectors are not present; please take necessary precautions.'}
            </p>
            <button
              className="outline-action-btn"
              style={{ marginTop: '24px' }}
              onClick={() => setActiveModal(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
