import React from 'react';
import BikeIllustration from '../components/BikeIllustration';
import { BIKES } from '../data/bikes';
import './Booking.css';

const STEPS = ['Select Bike', 'Your Details', 'Confirm'];

export default function Booking({ bike, step, setStep, form, setForm, calcPrice, submit, booked, bookingId, navigate, openBook }) {
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (!bike) return (
    <div style={{ padding:'4rem', textAlign:'center' }}>
      <div style={{ fontSize:'4rem', marginBottom:'1rem' }}>🚲</div>
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'2.5rem', marginBottom:'0.75rem' }}>SELECT A BIKE FIRST</h2>
      <p style={{ color:'var(--muted)', marginBottom:'2rem' }}>Browse our collection and pick your perfect ride</p>
      <button className="btn-primary-booking" onClick={() => navigate('listings')}>Browse Bikes →</button>
    </div>
  );

  return (
    <div className="booking-wrap page-enter">
      {/* Steps */}
      <div className="booking-steps">
        {STEPS.map((s, i) => (
          <div key={s} className="step">
            <div className={`step-dot${i + 1 < step || booked ? ' done' : i + 1 === step ? ' active' : ''}`}>
              {i + 1 < step || booked ? '✓' : i + 1}
            </div>
            <div className="step-label">{s}</div>
          </div>
        ))}
      </div>

      {/* Step 1: Select Bike */}
      {step === 1 && (
        <div className="booking-card">
          <h2 className="booking-title">CHOOSE YOUR RIDE</h2>
          <p className="booking-sub">Currently selected: <strong style={{ color:'var(--accent)' }}>{bike.name}</strong></p>
          <div className="bike-select-grid">
            {BIKES.filter(b => b.available).map(b => (
              <div
                key={b.id}
                className={`bike-select-card${b.id === bike.id ? ' selected' : ''}`}
                onClick={() => openBook(b)}
              >
                <BikeIllustration type={b.type} color={b.color} size={60} />
                <div>
                  <div style={{ fontWeight:700, fontSize:'0.875rem' }}>{b.name}</div>
                  <div style={{ color:'var(--muted)', fontSize:'0.75rem' }}>{b.type}</div>
                  <div style={{ color:'var(--accent)', fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.2rem' }}>₹{b.price}/hr</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', marginTop:'1.5rem' }}>
            <button className="btn-primary-booking" onClick={() => setStep(2)}>Continue → Fill Details</button>
          </div>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div className="booking-card">
          <h2 className="booking-title">YOUR DETAILS</h2>
          <p className="booking-sub">Booking <strong style={{ color:'var(--accent)' }}>{bike.name}</strong> — ₹{bike.price}/hr</p>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">FULL NAME</label>
              <input className="form-input" placeholder="Rahul Sharma" value={form.name} onChange={e => update('name', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL</label>
              <input className="form-input" type="email" placeholder="rahul@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">PHONE</label>
              <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">PICKUP LOCATION</label>
              <select className="form-input" value={form.location} onChange={e => update('location', e.target.value)}>
                <option value="">Select location</option>
                <option>Koramangala Hub</option>
                <option>Indiranagar Station</option>
                <option>MG Road Center</option>
                <option>Whitefield Point</option>
                <option>HSR Layout</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">RENTAL DATE</label>
              <input className="form-input" type="date" value={form.date} onChange={e => update('date', e.target.value)} min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="form-group">
              <label className="form-label">DURATION (HOURS)</label>
              <select className="form-input" value={form.hours} onChange={e => update('hours', e.target.value)}>
                {[1, 2, 3, 4, 6, 8, 12, 24].map(h => (
                  <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="form-group full">
              <label className="form-label">PLAN TYPE</label>
              <div style={{ display:'flex', gap:'1rem' }}>
                {['hourly', 'daily', 'weekly'].map(t => (
                  <div
                    key={t}
                    className={`plan-type${form.type === t ? ' selected' : ''}`}
                    onClick={() => update('type', t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="price-summary">
            <div className="price-row"><span>Base rate</span><span>₹{bike.price}/hr</span></div>
            <div className="price-row"><span>Duration</span><span>{form.hours} hours</span></div>
            <div className="price-row"><span>Insurance</span><span>Included ✓</span></div>
            <div className="price-row total"><span>Total</span><span className="price-val">₹{calcPrice()}</span></div>
          </div>

          <div style={{ display:'flex', gap:'1rem', marginTop:'1.5rem', justifyContent:'space-between' }}>
            <button className="btn-secondary-booking" onClick={() => setStep(1)}>← Back</button>
            <button
              className="btn-primary-booking"
              onClick={() => setStep(3)}
              disabled={!form.name || !form.email || !form.location || !form.date}
            >
              Review Booking →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && !booked && (
        <div className="booking-card">
          <h2 className="booking-title">CONFIRM BOOKING</h2>
          <p className="booking-sub">Review your details before confirming</p>
          <div className="confirm-details-grid">
            {[
              ['Bike', bike.name], ['Type', bike.type],
              ['Name', form.name], ['Email', form.email],
              ['Phone', form.phone || '—'], ['Location', form.location],
              ['Date', form.date], ['Duration', `${form.hours} hours`],
            ].map(([l, v]) => (
              <div key={l} className="confirm-detail-box">
                <div className="confirm-detail-label">{l.toUpperCase()}</div>
                <div className="confirm-detail-val">{v}</div>
              </div>
            ))}
          </div>
          <div className="price-summary" style={{ marginBottom:'1.5rem' }}>
            <div className="price-row total"><span>Total Payable</span><span className="price-val">₹{calcPrice()}</span></div>
          </div>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'space-between' }}>
            <button className="btn-secondary-booking" onClick={() => setStep(2)}>← Edit</button>
            <button className="btn-primary-booking" style={{ background:'var(--accent2)' }} onClick={submit}>
              🎉 Confirm & Pay ₹{calcPrice()}
            </button>
          </div>
        </div>
      )}

      {/* Success */}
      {booked && (
        <div className="booking-card">
          <div style={{ textAlign:'center', padding:'3rem' }}>
            <div style={{ fontSize:'4rem', marginBottom:'1rem' }}>🎉</div>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'2.5rem', marginBottom:'0.75rem' }}>BOOKING CONFIRMED!</h2>
            <p style={{ color:'var(--muted)', marginBottom:'1.5rem' }}>
              Your {bike.name} is reserved. See you at {form.location}!
            </p>
            <div style={{
              background:'rgba(0,212,170,0.12)', border:'1px solid rgba(0,212,170,0.3)',
              borderRadius:'10px', padding:'0.75rem 1.5rem', display:'inline-block',
              fontFamily:"'Bebas Neue',sans-serif", fontSize:'1.5rem', color:'var(--accent)', letterSpacing:'2px'
            }}>
              {bookingId}
            </div>
            <p style={{ color:'var(--muted)', fontSize:'0.8rem', margin:'1rem 0 2rem' }}>Save this ID for pickup</p>
            <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
              <button className="btn-primary-booking" onClick={() => navigate('dashboard')}>View My Rides →</button>
              <button className="btn-secondary-booking" onClick={() => navigate('listings')}>Browse More Bikes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
