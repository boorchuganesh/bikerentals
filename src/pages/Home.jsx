import React from 'react';
import BikeIllustration from '../components/BikeIllustration';
import { BIKES } from '../data/bikes';
import './Home.css';

export default function Home({ navigate }) {
  const featured = BIKES.filter(b => b.available).slice(0, 3);

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">🚴 #1 Bike Rental Platform in India</div>
          <h1 className="hero-title">RIDE FREE.<br /><span>EXPLORE</span><br />MORE.</h1>
          <p className="hero-sub">
            Premium bikes for every adventure. City cruisers, mountain beasts,
            electric movers & zippy scooters — all at your fingertips.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('listings')}>Browse Bikes →</button>
            <button className="btn-secondary" onClick={() => navigate('dashboard')}>My Rides</button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-val">48+</div>
              <div className="hero-stat-label">BIKES AVAILABLE</div>
            </div>
            <div>
              <div className="hero-stat-val">2.4K</div>
              <div className="hero-stat-label">HAPPY RIDERS</div>
            </div>
            <div>
              <div className="hero-stat-val">4.9★</div>
              <div className="hero-stat-label">AVERAGE RATING</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          {featured.map((b, i) => (
            <div
              key={b.id}
              className={`hero-card${i === 0 ? ' featured' : ''}`}
              onClick={() => navigate('listings')}
            >
              <BikeIllustration type={b.type} color={b.color} size={80} />
              <div className="hero-card-info">
                <div className="hero-card-name">{b.name}</div>
                <div className="hero-card-type">{b.type} · ⭐ {b.rating}</div>
                <div style={{ display:'flex', gap:'0.5rem', marginTop:'0.4rem' }}>
                  <span className="badge badge-avail">Available</span>
                  {i === 0 && <span className="badge badge-hot">🔥 Popular</span>}
                </div>
              </div>
              <div>
                <div className="hero-card-price">₹{b.price}<span>/hr</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-dark">
        <div className="section-label">WHY CYCLEGO</div>
        <h2 className="section-title">BUILT FOR<br />REAL RIDERS</h2>
        <p className="section-sub">Every bike is maintained to perfection. Every rental is seamless. Every ride is unforgettable.</p>
        <div className="features-grid">
          {[
            ['⚡', 'Instant Booking', 'Reserve your ride in under 60 seconds. No paperwork, no waiting.'],
            ['🛡️', 'Fully Insured', 'Every rental includes comprehensive insurance and 24/7 roadside support.'],
            ['🔧', 'Maintained Daily', 'Our expert team inspects every bike before it goes out. Safety first.'],
            ['📍', 'GPS Enabled', 'Live tracking on all electric bikes and scooters. Know your route.'],
            ['💳', 'Flexible Plans', 'Hourly, daily, or weekly — choose what fits your adventure.'],
            ['♻️', 'Eco Friendly', 'Reduce your carbon footprint. Our electric fleet cuts emissions by 90%.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="feature-card">
              <div className="feature-icon">{icon}</div>
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="section-label">CATEGORIES</div>
        <h2 className="section-title">FIND YOUR<br />PERFECT RIDE</h2>
        <div className="categories-grid">
          {[
            { type:'Mountain', emoji:'🏔️', color:'#e74c3c', desc:'Trail conquerors' },
            { type:'Electric', emoji:'⚡', color:'#00d4aa', desc:'Smart movers' },
            { type:'City', emoji:'🌆', color:'#f39c12', desc:'Urban explorers' },
            { type:'Scooter', emoji:'🛴', color:'#9b59b6', desc:'Quick zippers' },
          ].map(c => (
            <div
              key={c.type}
              className="category-card"
              style={{ borderColor: c.color + '44' }}
              onClick={() => navigate('listings')}
            >
              <div style={{ fontSize:'3rem', marginBottom:'0.75rem' }}>{c.emoji}</div>
              <div className="feature-title" style={{ fontSize:'1.2rem', color:c.color }}>{c.type}</div>
              <div className="feature-desc">{c.desc}</div>
              <div style={{ marginTop:'1rem', fontSize:'0.8rem', color:c.color, fontWeight:600 }}>
                {BIKES.filter(b => b.type === c.type).length} bikes →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-dark">
        <div className="section-label">TESTIMONIALS</div>
        <h2 className="section-title" style={{ marginBottom:'2rem' }}>RIDERS LOVE US</h2>
        <div className="testimonials-grid">
          {[
            { name:'Arjun K.', loc:'Bengaluru', text:'Rented the Volt Pro for a weekend trip. Absolutely mind-blowing range and the booking was super smooth!', rating:5 },
            { name:'Priya S.', loc:'Mumbai', text:'Best city bikes in town. Rode the Metro Cruiser for 3 hours and it was pure joy. Will rent again!', rating:5 },
            { name:'Rahul M.', loc:'Hyderabad', text:'The Summit Beast handled the Nandi Hills trails like a dream. Professional service, clean bikes.', rating:5 },
          ].map(t => (
            <div key={t.name} className="feature-card">
              <div style={{ color:'var(--accent3)', fontSize:'1.2rem', marginBottom:'0.75rem' }}>{'★'.repeat(t.rating)}</div>
              <p style={{ color:'var(--text)', fontSize:'0.9rem', lineHeight:1.6, marginBottom:'1rem', fontStyle:'italic' }}>"{t.text}"</p>
              <div style={{ fontWeight:700, fontSize:'0.875rem' }}>{t.name}</div>
              <div style={{ color:'var(--muted)', fontSize:'0.75rem' }}>{t.loc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">READY TO RIDE?</h2>
        <p className="cta-sub">Join 2,400+ riders who chose CycleGo for their adventures.</p>
        <button className="btn-primary" onClick={() => navigate('listings')} style={{ fontSize:'1.1rem', padding:'1rem 2.5rem' }}>
          Browse All Bikes →
        </button>
      </section>
    </div>
  );
}
