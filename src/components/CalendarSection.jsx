import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarSection({
  checkIn,
  checkOut,
  onDateSelect,
  onClearDates,
  totalNights
}) {
  // Days of week header
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // October 2026: 31 days. Starts on Thursday (day index 4, where Sun=0)
  const octOffset = 4;
  const octTotalDays = 31;

  // November 2026: 30 days. Starts on Sunday (day index 0)
  const novOffset = 0;
  const novTotalDays = 30;

  // Blocked / unavailable dates in November 2026 as shown in reference:
  // 18, 19, 20, 21, 22, 23, 24, 29, 30
  const isDateDisabled = (month, day) => {
    if (month === 11) {
      return [18, 19, 20, 21, 22, 23, 24, 29, 30].includes(day);
    }
    return false;
  };

  const isCheckIn = (month, day) => {
    if (!checkIn) return false;
    const formatted = `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted === checkIn;
  };

  const isCheckOut = (month, day) => {
    if (!checkOut) return false;
    const formatted = `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted === checkOut;
  };

  const isSelected = (month, day) => {
    return isCheckIn(month, day) || isCheckOut(month, day);
  };

  const isRangeStart = (month, day) => {
    return isCheckIn(month, day) && Boolean(checkOut && checkIn < checkOut);
  };

  const isRangeEnd = (month, day) => {
    return isCheckOut(month, day) && Boolean(checkIn && checkIn < checkOut);
  };

  const isInRange = (month, day) => {
    if (!checkIn || !checkOut) return false;
    const current = `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return current > checkIn && current < checkOut;
  };

  const formatDateLabel = (isoDate) => {
    if (!isoDate) return '';
    const [y, m, d] = isoDate.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
  };

  return (
    <div className="calendar-section-wrap">
      <h3 className="calendar-headline">
        {totalNights > 0 ? `${totalNights} nights in Candolim` : 'Select dates'}
      </h3>
      <div className="calendar-sub-dates">
        {checkIn && checkOut
          ? `${formatDateLabel(checkIn)} - ${formatDateLabel(checkOut)}`
          : 'Add your travel dates for exact pricing'}
      </div>

      <div className="dual-calendar-container">
        {/* October 2026 */}
        <div className="month-table">
          <div className="month-header-row">
            <button className="cal-nav-btn" aria-label="Previous month">
              <ChevronLeft size={18} />
            </button>
            <div className="month-name">October 2026</div>
            <div style={{ width: '32px' }} />
          </div>

          <div className="weekdays-row">
            {weekdays.map((wd, i) => (
              <span key={i}>{wd}</span>
            ))}
          </div>

          <div className="days-grid">
            {/* Empty offset days */}
            {[...Array(octOffset)].map((_, i) => (
              <div key={`oct-empty-${i}`} className="day-cell empty" />
            ))}

            {/* Days 1 to 31 */}
            {[...Array(octTotalDays)].map((_, i) => {
              const day = i + 1;
              const dateStr = `2026-10-${String(day).padStart(2, '0')}`;
              const selected = isSelected(10, day);
              const inRange = isInRange(10, day);
              const rangeStart = isRangeStart(10, day);
              const rangeEnd = isRangeEnd(10, day);

              return (
                <div
                  key={`oct-${day}`}
                  className={`day-cell ${selected ? 'selected-endpoint' : ''} ${rangeStart ? 'range-start' : ''} ${rangeEnd ? 'range-end' : ''} ${inRange ? 'in-range' : ''}`}
                  onClick={() => onDateSelect(dateStr)}
                  role="button"
                  tabIndex={0}
                  aria-label={`October ${day}, 2026`}
                >
                  <span className="day-num">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div className="month-table">
          <div className="month-header-row">
            <div style={{ width: '32px' }} />
            <div className="month-name">November 2026</div>
            <button className="cal-nav-btn" aria-label="Next month">
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="weekdays-row">
            {weekdays.map((wd, i) => (
              <span key={i}>{wd}</span>
            ))}
          </div>

          <div className="days-grid">
            {/* Empty offset days */}
            {[...Array(novOffset)].map((_, i) => (
              <div key={`nov-empty-${i}`} className="day-cell empty" />
            ))}

            {/* Days 1 to 30 */}
            {[...Array(novTotalDays)].map((_, i) => {
              const day = i + 1;
              const dateStr = `2026-11-${String(day).padStart(2, '0')}`;
              const disabled = isDateDisabled(11, day);
              const selected = isSelected(11, day);
              const inRange = isInRange(11, day);
              const rangeStart = isRangeStart(11, day);
              const rangeEnd = isRangeEnd(11, day);

              return (
                <div
                  key={`nov-${day}`}
                  className={`day-cell ${selected ? 'selected-endpoint' : ''} ${rangeStart ? 'range-start' : ''} ${rangeEnd ? 'range-end' : ''} ${inRange ? 'in-range' : ''} ${disabled ? 'disabled' : ''}`}
                  onClick={() => !disabled && onDateSelect(dateStr)}
                  role={disabled ? 'presentation' : 'button'}
                  tabIndex={disabled ? -1 : 0}
                  aria-disabled={disabled}
                  aria-label={`November ${day}, 2026${disabled ? ' (unavailable)' : ''}`}
                >
                  <span className="day-num">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="calendar-bottom-toolbar">
        <button className="cal-keyboard-btn" aria-label="Keyboard shortcuts" title="Keyboard shortcuts">
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" aria-hidden="true">
            <rect x="0.75" y="0.75" width="20.5" height="13.5" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <line x1="6" y1="10.5" x2="16" y2="10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
        <button className="clear-dates-btn" onClick={onClearDates}>
          Clear dates
        </button>
      </div>
    </div>
  );
}
