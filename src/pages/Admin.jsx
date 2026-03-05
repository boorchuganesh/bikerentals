import React, { useState } from 'react';
import BikeIllustration from '../components/BikeIllustration';
import { BIKES, ADMIN_STATS, HUBS, USERS } from '../data/bikes';
import './Admin.css';

const CHART_DATA = [65, 80, 45, 90, 70, 85, 95];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Admin({ showToast }) {
  const [tab, setTab] = useState('overview');
  const max = Math.max(...CHART_DATA);

  return (
    <div className="admin-wrap page-enter">
      <div className="admin-top">
        <div>
          <h1 className="admin-title">ADMIN PANEL</h1>
          <p className="admin-sub">CycleGo Operations Dashboard · Bengaluru</p>
        </div>
        <div style={{ display:'flex', gap:'0.5rem' }}>
          {['overview', 'fleet', 'users'].map(t => (
            <button
              key={t}
              className={`tab-btn${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="admin-stats">
        {ADMIN_STATS.map(s => (
          <div key={s.label} className="admin-stat">
            <div className="admin-stat-label">{s.label.toUpperCase()}</div>
            <div className="admin-stat-val" style={{ color: s.up ? 'var(--accent)' : 'var(--accent2)' }}>{s.value}</div>
            <div className="admin-stat-change" style={{ color: s.up ? 'var(--accent)' : 'var(--accent2)' }}>{s.change} this week</div>
          </div>
        ))}
      </div>

      {/* Overview Tab */}
      {tab === 'overview' && (
        <div className="admin-grid">
          <div>
            {/* Revenue Chart */}
            <div className="admin-panel" style={{ marginBottom:'1.5rem' }}>
              <div className="admin-panel-title">📊 Weekly Revenue</div>
              <div className="chart-bar-wrap">
                {CHART_DATA.map((v, i) => (
                  <div
                    key={i}
                    className="chart-bar"
                    style={{ height:`${(v / max) * 100}%` }}
                  />
                ))}
              </div>
              <div className="chart-labels">
                {DAYS.map(d => <div key={d} className="chart-label">{d}</div>)}
              </div>
            </div>

            {/* Fleet Status */}
            <div className="admin-panel">
              <div className="admin-panel-title">🚲 Fleet Status</div>
              {BIKES.slice(0, 6).map(b => (
                <div key={b.id} className="admin-bike-row">
                  <BikeIllustration type={b.type} color={b.color} size={44} />
                  <div className="admin-bike-info">
                    <div className="admin-bike-name">{b.name}</div>
                    <div className="admin-bike-status">
                      {b.type} · {b.available ? '✅ Available' : '🔴 Rented'} · ⭐ {b.rating}
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:'0.5rem' }}>
                    <button className="admin-btn admin-btn-edit" onClick={() => showToast(`✏️ Editing ${b.name}`)}>Edit</button>
                    <button className="admin-btn admin-btn-del" onClick={() => showToast(`🔧 Maintenance: ${b.name}`)}>Maint.</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Live Activity */}
            <div className="admin-panel" style={{ marginBottom:'1.5rem' }}>
              <div className="admin-panel-title">⚡ Live Activity</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {[
                  { dot:'green', text:'New booking: Volt Pro 3000 by Priya S.', time:'2m ago' },
                  { dot:'red', text:'Zipster Neo returned — needs inspection', time:'8m ago' },
                  { dot:'yellow', text:'Payment received ₹180 for BK998712', time:'15m ago' },
                  { dot:'green', text:'New user registered: Arjun K.', time:'22m ago' },
                  { dot:'red', text:'Summit Beast 29 battery low (18%)', time:'35m ago' },
                  { dot:'green', text:'Metro Cruiser maintenance complete', time:'1h ago' },
                  { dot:'yellow', text:'Weekly revenue target 87% achieved', time:'2h ago' },
                ].map((a, i) => (
                  <div key={i} className="activity-item">
                    <div className={`activity-dot dot-${a.dot}`} />
                    <div style={{ fontSize:'0.8rem', flex:1 }}>{a.text}</div>
                    <div style={{ fontSize:'0.7rem', color:'var(--muted)', whiteSpace:'nowrap' }}>{a.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hub Status */}
            <div className="admin-panel">
              <div className="admin-panel-title">🗺️ Hub Status</div>
              {HUBS.map(h => (
                <div key={h.name} className="hub-row">
                  <div>
                    <div style={{ fontWeight:600, fontSize:'0.85rem' }}>{h.name}</div>
                    <div style={{ color:'var(--muted)', fontSize:'0.75rem' }}>{h.bikes} bikes total</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ color:'var(--accent)', fontWeight:700, fontSize:'0.9rem' }}>{h.active} active</div>
                    <div style={{ background:'var(--bg3)', borderRadius:'100px', height:'4px', width:'80px', marginTop:'4px' }}>
                      <div style={{ height:'100%', borderRadius:'100px', background:'var(--accent)', width:`${(h.active / h.bikes) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fleet Tab */}
      {tab === 'fleet' && (
        <div className="admin-panel">
          <div className="admin-panel-title">🚲 Complete Fleet Management</div>
          <div style={{ overflowX:'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Bike</th><th>Type</th><th>Rate</th><th>Rating</th><th>Status</th><th>Battery</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {BIKES.map(b => (
                  <tr key={b.id}>
                    <td style={{ fontWeight:600 }}>{b.name}</td>
                    <td><span style={{ background:'var(--bg3)', padding:'0.2rem 0.6rem', borderRadius:'100px', fontSize:'0.75rem' }}>{b.type}</span></td>
                    <td style={{ color:'var(--accent)', fontWeight:700 }}>₹{b.price}/hr</td>
                    <td style={{ color:'var(--accent3)' }}>⭐ {b.rating}</td>
                    <td>
                      <span className={`fleet-status ${b.available ? 'status-avail' : 'status-rented'}`}>
                        {b.available ? 'Available' : 'Rented'}
                      </span>
                    </td>
                    <td>{b.battery ? `${b.battery}%` : 'N/A'}</td>
                    <td>
                      <div style={{ display:'flex', gap:'0.5rem' }}>
                        <button className="admin-btn admin-btn-edit" onClick={() => showToast(`✏️ Editing ${b.name}`)}>Edit</button>
                        <button className="admin-btn admin-btn-del" onClick={() => showToast(`🚨 Alert set for ${b.name}`)}>Alert</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {tab === 'users' && (
        <div className="admin-panel">
          <div className="admin-panel-title">👥 Registered Users</div>
          <div style={{ overflowX:'auto' }}>
            <table>
              <thead>
                <tr><th>User</th><th>Email</th><th>Rides</th><th>Spent</th><th>Tier</th><th>Status</th></tr>
              </thead>
              <tbody>
                {USERS.map(u => (
                  <tr key={u.email}>
                    <td style={{ fontWeight:600 }}>{u.name}</td>
                    <td style={{ color:'var(--muted)', fontSize:'0.8rem' }}>{u.email}</td>
                    <td>{u.rides}</td>
                    <td style={{ color:'var(--accent)', fontWeight:700 }}>{u.spent}</td>
                    <td>
                      <span style={{
                        background:'var(--bg3)', padding:'0.2rem 0.7rem', borderRadius:'100px', fontSize:'0.72rem', fontWeight:700,
                        color: u.member === 'Platinum' ? 'var(--accent3)' : u.member === 'Gold' ? '#ffd700' : u.member === 'Silver' ? '#c0c0c0' : '#cd7f32'
                      }}>
                        {u.member}
                      </span>
                    </td>
                    <td>
                      <span className={`fleet-status ${u.status === 'Active' ? 'status-avail' : 'status-rented'}`}>
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
