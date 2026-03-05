import React, { useState } from 'react';
import BikeIllustration from '../components/BikeIllustration';
import { BIKES } from '../data/bikes';
import './Listings.css';

const TYPES = ['All', 'Mountain', 'Electric', 'City', 'Scooter'];

export default function Listings({ openBook, toggleWish, wishlist, setModal }) {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('default');

  let bikes = filter === 'All' ? [...BIKES] : BIKES.filter(b => b.type === filter);

  if (sort === 'price-asc') bikes.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') bikes.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') bikes.sort((a, b) => b.rating - a.rating);

  return (
    <div className="page-enter">
      <div className="listings-header">
        <div>
          <h1 className="listings-title">BROWSE BIKES</h1>
          <p className="listings-sub">{bikes.length} bikes available · Bengaluru</p>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
          <span style={{ color:'var(--muted)', fontSize:'0.8rem' }}>Sort:</span>
          <select
            className="sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="filter-bar">
        {TYPES.map(t => (
          <button
            key={t}
            className={`filter-btn${filter === t ? ' active' : ''}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bikes-grid">
        {bikes.map(bike => (
          <div
            key={bike.id}
            className={`bike-card${!bike.available ? ' unavail' : ''}`}
          >
            <div className="bike-card-visual" onClick={() => setModal(bike)}>
              <BikeIllustration type={bike.type} color={bike.color} size={130} />
              {!bike.available && (
                <div className="bike-badge bike-badge-unavail">UNAVAILABLE</div>
              )}
              {bike.available && (
                <div className="bike-badge bike-badge-avail">● AVAILABLE</div>
              )}
            </div>
            <div className="bike-card-body">
              <div className="bike-card-top">
                <div>
                  <div className="bike-card-name">{bike.name}</div>
                  <div className="bike-card-type">{bike.type} Bike</div>
                </div>
                <div className="bike-price">₹{bike.price}<span>/hr</span></div>
              </div>
              <div className="bike-rating">
                {'★'.repeat(Math.floor(bike.rating))}
                <span>{bike.rating} ({bike.reviews})</span>
              </div>
              <div className="bike-specs">
                <div className="bike-spec">⚡ {bike.speed}</div>
                <div className="bike-spec">⚖️ {bike.weight}</div>
                {bike.battery && <div className="bike-spec">🔋 {bike.battery}%</div>}
              </div>
              {bike.battery && (
                <div className="battery-bar">
                  <div
                    className="battery-fill"
                    style={{
                      width: `${bike.battery}%`,
                      background: bike.battery > 50 ? 'var(--accent)' : bike.battery > 25 ? 'var(--accent3)' : 'var(--accent2)'
                    }}
                  />
                </div>
              )}
              <div className="bike-features">
                {bike.features.slice(0, 3).map(f => (
                  <span key={f} className="bike-feat">{f}</span>
                ))}
              </div>
              <div className="bike-actions">
                <button
                  className="btn-book"
                  disabled={!bike.available}
                  onClick={() => openBook(bike)}
                >
                  {bike.available ? 'Book Now →' : 'Unavailable'}
                </button>
                <button
                  className="btn-wish"
                  onClick={() => toggleWish(bike.id)}
                >
                  {wishlist.includes(bike.id) ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
