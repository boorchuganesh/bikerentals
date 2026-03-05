import React from 'react';
import BikeIllustration from '../components/BikeIllustration';
import { BIKES, MY_RIDES } from '../data/bikes';
import './Dashboard.css';

export default function Dashboard({ navigate, openBook }) {
  return (
    <div className="dash-wrap page-enter">
      {/* Profile Header */}
      <div className="dash-header">
        <div className="dash-avatar">RS</div>
        <div style={{ flex: 1 }}>
          <div className="dash-name">Rahul Sharma</div>
          <div className="dash-info">rahul.sharma@email.com · Member since Jan 2024 · 🥇 Gold Rider</div>
          <div style={{ display:'flex', gap:'0.5rem', marginTop:'0.5rem' }}>
            <span className="badge badge-green">✓ Verified Rider</span>
            <span className="badge badge-gold">⭐ Gold Member</span>
          </div>
        </div>
        <button className="dash-new-btn" onClick={() => navigate('listings')}>+ New Booking</button>
      </div>

      {/* Active Ride Banner */}
      <div className="active-ride-banner">
        <div className="pulse" />
        <BikeIllustration type="Mountain" color="#f5c518" size={60} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight:700, marginBottom:'0.25rem' }}>Active Ride: Summit Beast 29</div>
          <div style={{ color:'var(--muted)', fontSize:'0.875rem' }}>Started 2h 15min ago · Nandi Hills Route · Est. return 6:30 PM</div>
        </div>
        <div style={{ textAlign:'right' }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'2rem', color:'var(--accent3)' }}>₹67.50</div>
          <div style={{ color:'var(--muted)', fontSize:'0.75rem' }}>current charge</div>
        </div>
      </div>

      {/* Stats */}
      <div className="dash-stats">
        {[
          { val:'4', label:'Total Rides', icon:'🚴' },
          { val:'59 km', label:'Total Distance', icon:'📍' },
          { val:'₹465', label:'Total Spent', icon:'💳' },
          { val:'4.9★', label:'Rider Rating', icon:'⭐' },
        ].map(s => (
          <div key={s.label} className="dash-stat">
            <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>{s.icon}</div>
            <div className="dash-stat-val">{s.val}</div>
            <div className="dash-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Ride History Table */}
      <div className="rides-table">
        <div className="rides-table-header">📋 My Ride History</div>
        <div style={{ overflowX:'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Bike</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Distance</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MY_RIDES.map(r => (
                <tr key={r.id}>
                  <td style={{ fontFamily:'monospace', color:'var(--accent)', fontSize:'0.8rem' }}>{r.id}</td>
                  <td style={{ fontWeight:600 }}>{r.bike}</td>
                  <td style={{ color:'var(--muted)' }}>{r.date}</td>
                  <td>{r.duration}</td>
                  <td>{r.distance}</td>
                  <td style={{ fontWeight:700 }}>₹{r.cost}</td>
                  <td>
                    <span className={`ride-status ${r.status === 'Active' ? 'status-active' : 'status-done'}`}>
                      {r.status === 'Active' ? '● ' : '✓ '}{r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div style={{ marginTop:'2rem' }}>
        <h3 className="recom-title">RECOMMENDED FOR YOU</h3>
        <div className="recom-grid">
          {BIKES.filter(b => b.available).slice(0, 4).map(b => (
            <div
              key={b.id}
              className="recom-card"
              onClick={() => openBook(b)}
            >
              <BikeIllustration type={b.type} color={b.color} size={80} />
              <div style={{ fontWeight:700, marginTop:'0.75rem' }}>{b.name}</div>
              <div style={{ color:'var(--muted)', fontSize:'0.75rem', marginBottom:'0.5rem' }}>{b.type}</div>
              <div style={{ color:'var(--accent)', fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.4rem' }}>₹{b.price}/hr</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
