import create from 'zustand';
import axios from 'axios';
import { ShowTiming, Booking } from '../types/booking';

interface BookingStore {
  selectedSeats: string[];
  selectedShow: ShowTiming | null;
  bookings: Booking[];
  setSelectedSeats: (seats: string[]) => void;
  setSelectedShow: (show: ShowTiming) => void;
  createBooking: (showId: string, seats: string[]) => Promise<string>;
  fetchUserBookings: () => Promise<void>;
}

const API_URL = 'http://localhost:5000/api';

export const useBookingStore = create<BookingStore>((set, get) => ({
  selectedSeats: [],
  selectedShow: null,
  bookings: [],

  setSelectedSeats: (seats) => set({ selectedSeats: seats }),
  setSelectedShow: (show) => set({ selectedShow: show }),

  createBooking: async (showId: string, seats: string[]) => {
    try {
      const response = await axios.post(`${API_URL}/bookings`, {
        showId,
        seats,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data.paymentIntentClientSecret;
    } catch (error) {
      throw new Error('Booking failed');
    }
  },

  fetchUserBookings: async () => {
    try {
      const response = await axios.get(`${API_URL}/bookings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      set({ bookings: response.data });
    } catch (error) {
      throw new Error('Failed to fetch bookings');
    }
  },
}));