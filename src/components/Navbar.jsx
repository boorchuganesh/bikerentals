import React from 'react';
import './Navbar.css';

export default function Navbar({ page, navigate }) {
  const links = [
    ['home', 'Home'],
    ['listings', 'Browse Bikes'],
    ['booking', 'Book Now'],
    ['dashboard', 'My Rides'],
    ['admin', 'Admin'],
  ];

  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => navigate('home')}>
        CYCLE<span>GO</span>
      </div>
      <div className="nav-links">
        {links.map(([p, l]) => (
          <button
            key={p}
            className={`nav-link${page === p ? ' active' : ''}`}
            onClick={() => navigate(p)}
          >
            {l}
          </button>
        ))}
      </div>
      <button className="nav-btn" onClick={() => navigate('listings')}>
        Rent Now →
      </button>
    </nav>
  );
}
