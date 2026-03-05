import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import BikeModal from './components/BikeModal';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import './components/Modal.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  // Booking state
  const [bookingBike, setBookingBike] = useState(null);
  const [bookStep, setBookStep] = useState(1);
  const [booked, setBooked] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [bookForm, setBookForm] = useState({
    name: '', email: '', phone: '', location: '',
    date: '', hours: '2', type: 'hourly'
  });

  // Auto-clear toast
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const showToast = (msg) => setToast(msg);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBook = (bike) => {
    setBookingBike(bike);
    setBookStep(1);
    setBooked(false);
    setBookForm({ name: '', email: '', phone: '', location: '', date: '', hours: '2', type: 'hourly' });
    navigate('booking');
  };

  const toggleWish = (id) => {
    const already = wishlist.includes(id);
    setWishlist(w => already ? w.filter(x => x !== id) : [...w, id]);
    showToast(already ? 'Removed from wishlist' : '❤️ Added to wishlist!');
  };

  const calcPrice = () => {
    if (!bookingBike) return 0;
    return bookingBike.price * (parseInt(bookForm.hours) || 1);
  };

  const submitBooking = () => {
    const id = 'BK' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setBooked(true);
    setBookStep(3);
    showToast('🎉 Booking confirmed!');
  };

  return (
    <>
      <Navbar page={page} navigate={navigate} />
      <div style={{ paddingTop: '64px' }}>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'listings' && (
          <Listings
            openBook={openBook}
            toggleWish={toggleWish}
            wishlist={wishlist}
            setModal={setModal}
          />
        )}
        {page === 'booking' && (
          <Booking
            bike={bookingBike}
            step={bookStep}
            setStep={setBookStep}
            form={bookForm}
            setForm={setBookForm}
            calcPrice={calcPrice}
            submit={submitBooking}
            booked={booked}
            bookingId={bookingId}
            navigate={navigate}
            openBook={openBook}
          />
        )}
        {page === 'dashboard' && (
          <Dashboard navigate={navigate} openBook={openBook} />
        )}
        {page === 'admin' && (
          <Admin showToast={showToast} />
        )}
      </div>

      <BikeModal
        bike={modal}
        onClose={() => setModal(null)}
        onBook={openBook}
      />

      <Toast message={toast} />
    </>
  );
}
