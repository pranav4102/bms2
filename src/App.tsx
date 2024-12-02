import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails';
import { TheaterSelection } from './pages/TheaterSelection';
import { SeatBooking } from './pages/SeatBooking';
import { Payment } from './pages/Payment';
import { BookingConfirmation } from './pages/BookingConfirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id/theaters" element={<TheaterSelection />} />
          <Route path="/booking/:showId/seats" element={<SeatBooking />} />
          <Route path="/booking/:bookingId/payment" element={<Payment />} />
          <Route path="/booking/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;