import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useBookingStore } from '../store/bookingStore';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const { selectedShow, selectedSeats, createBooking } = useBookingStore();
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!selectedShow || selectedSeats.length === 0) return;

    try {
      setLoading(true);
      const clientSecret = await createBooking(selectedShow.id, selectedSeats);
      const stripe = await stripePromise;

      if (!stripe) throw new Error('Stripe failed to load');

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card'),
          billing_details: {
            name: 'User Name',
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      navigate('/booking-confirmation');
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <div className="mb-4">
        <div id="card-element" className="p-3 border rounded-md" />
      </div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};