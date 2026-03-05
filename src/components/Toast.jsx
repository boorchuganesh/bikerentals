import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div style={{
      position: 'fixed', bottom: '2rem', right: '2rem',
      background: 'var(--card)', border: '1px solid var(--accent)',
      borderRadius: '12px', padding: '0.875rem 1.25rem',
      color: 'var(--text)', fontSize: '0.875rem', zIndex: 300,
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      animation: 'slideIn 0.3s ease',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      ✓ {message}
    </div>
  );
}
