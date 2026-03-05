import React from 'react';

export default function BikeIllustration({ type, color, size = 120 }) {
  const c = color || '#00d4aa';

  if (type === 'Scooter') return (
    <svg width={size} height={size * 0.7} viewBox="0 0 140 100" fill="none">
      <ellipse cx="30" cy="80" rx="18" ry="18" stroke={c} strokeWidth="5" fill="none" />
      <ellipse cx="110" cy="80" rx="18" ry="18" stroke={c} strokeWidth="5" fill="none" />
      <path d="M30 62 L30 40 L60 20 L100 20 L120 40 L110 62" stroke={c} strokeWidth="5" fill={c + '22'} strokeLinecap="round" strokeLinejoin="round" />
      <rect x="55" y="10" width="30" height="12" rx="3" fill={c} opacity="0.7" />
      <line x1="30" y1="62" x2="110" y2="62" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <circle cx="30" cy="80" r="6" fill={c} />
      <circle cx="110" cy="80" r="6" fill={c} />
      <rect x="85" y="18" width="10" height="30" rx="2" fill={c} opacity="0.5" />
    </svg>
  );

  if (type === 'Electric') return (
    <svg width={size} height={size * 0.7} viewBox="0 0 140 100" fill="none">
      <ellipse cx="25" cy="78" rx="19" ry="19" stroke={c} strokeWidth="5" fill="none" />
      <ellipse cx="115" cy="78" rx="19" ry="19" stroke={c} strokeWidth="5" fill="none" />
      <path d="M25 60 L45 25 L80 25 L95 45 L115 60" stroke={c} strokeWidth="5" fill={c + '22'} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 25 L95 10 L105 10 L95 28" stroke={c} strokeWidth="4" fill={c} strokeLinecap="round" />
      <path d="M45 25 L40 10 L50 10" stroke={c} strokeWidth="4" strokeLinecap="round" />
      <rect x="55" y="50" width="28" height="14" rx="4" fill={c} opacity="0.8" />
      <text x="62" y="61" fontSize="9" fill="white" fontWeight="bold">⚡</text>
      <circle cx="25" cy="78" r="7" fill={c} />
      <circle cx="115" cy="78" r="7" fill={c} />
    </svg>
  );

  if (type === 'City') return (
    <svg width={size} height={size * 0.7} viewBox="0 0 140 100" fill="none">
      <ellipse cx="28" cy="76" rx="20" ry="20" stroke={c} strokeWidth="5" fill="none" />
      <ellipse cx="112" cy="76" rx="20" ry="20" stroke={c} strokeWidth="5" fill="none" />
      <line x1="28" y1="56" x2="70" y2="30" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <line x1="70" y1="30" x2="112" y2="56" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <line x1="70" y1="30" x2="70" y2="56" stroke={c} strokeWidth="4" strokeLinecap="round" />
      <line x1="70" y1="56" x2="28" y2="76" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <line x1="70" y1="56" x2="112" y2="76" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <line x1="55" y1="20" x2="85" y2="20" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <line x1="70" y1="30" x2="70" y2="20" stroke={c} strokeWidth="4" strokeLinecap="round" />
      <circle cx="28" cy="76" r="7" fill={c} />
      <circle cx="112" cy="76" r="7" fill={c} />
      <rect x="95" y="12" width="22" height="10" rx="3" fill={c} opacity="0.5" />
    </svg>
  );

  // Mountain (default)
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 140 100" fill="none">
      <ellipse cx="26" cy="77" rx="21" ry="21" stroke={c} strokeWidth="6" fill="none" />
      <ellipse cx="114" cy="77" rx="21" ry="21" stroke={c} strokeWidth="6" fill="none" />
      <line x1="26" y1="56" x2="68" y2="28" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="68" y1="28" x2="114" y2="56" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="68" y1="28" x2="68" y2="58" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <line x1="68" y1="58" x2="26" y2="77" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="68" y1="58" x2="114" y2="77" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="52" y1="18" x2="84" y2="18" stroke={c} strokeWidth="6" strokeLinecap="round" />
      <line x1="68" y1="28" x2="68" y2="18" stroke={c} strokeWidth="5" strokeLinecap="round" />
      <path d="M84 18 L100 18 L100 28" stroke={c} strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="26" cy="77" r="8" fill={c} />
      <circle cx="114" cy="77" r="8" fill={c} />
      <rect x="26" y="50" width="8" height="16" rx="2" fill={c} opacity="0.6" />
    </svg>
  );
}
