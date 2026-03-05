import React from 'react';
import BikeIllustration from './BikeIllustration';

export default function BikeModal({ bike, onClose, onBook }) {
  if (!bike) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-visual">
          <BikeIllustration type={bike.type} color={bike.color} size={150} />
        </div>
        <div className="modal-body">
          <div className="modal-name">{bike.name}</div>
          <div className="modal-type">{bike.type} Bike</div>
          <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', fontSize:'0.8rem', color:'var(--accent3)', marginBottom:'1rem' }}>
            {'★'.repeat(Math.floor(bike.rating))}
            <span style={{ color:'var(--muted)' }}>{bike.rating} ({bike.reviews} reviews)</span>
          </div>
          <div className="modal-specs">
            <div className="modal-spec">
              <div className="modal-spec-val">{bike.speed}</div>
              <div className="modal-spec-label">Top Speed</div>
            </div>
            <div className="modal-spec">
              <div className="modal-spec-val">{bike.weight}</div>
              <div className="modal-spec-label">Weight</div>
            </div>
            {bike.battery && (
              <div className="modal-spec">
                <div className="modal-spec-val">{bike.battery}%</div>
                <div className="modal-spec-label">Battery</div>
              </div>
            )}
            <div className="modal-spec">
              <div className="modal-spec-val" style={{ color:'var(--accent)' }}>₹{bike.price}/hr</div>
              <div className="modal-spec-label">Rental Rate</div>
            </div>
          </div>
          <div style={{ marginBottom:'1rem' }}>
            <div style={{ fontSize:'0.75rem', color:'var(--muted)', fontWeight:600, marginBottom:'0.5rem' }}>FEATURES</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
              {bike.features.map(f => (
                <span key={f} style={{
                  background:'rgba(0,212,170,0.1)', border:'1px solid rgba(0,212,170,0.2)',
                  color:'var(--accent)', borderRadius:'6px', padding:'0.25rem 0.6rem', fontSize:'0.75rem'
                }}>{f}</span>
              ))}
            </div>
          </div>
          <button
            onClick={() => { onClose(); onBook(bike); }}
            disabled={!bike.available}
            style={{
              width:'100%', padding:'0.75rem', borderRadius:'10px',
              background: bike.available ? 'var(--accent)' : 'var(--bg3)',
              color: bike.available ? '#000' : 'var(--muted)',
              border:'none', fontWeight:700, fontSize:'0.95rem', cursor: bike.available ? 'pointer' : 'not-allowed'
            }}
          >
            {bike.available ? 'Book This Bike →' : 'Currently Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}
