import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SeatSelection } from '../components/SeatSelection';

const SAMPLE_SEATS = Array.from({ length: 80 }, (_, i) => ({
  id: `seat-${i + 1}`,
  row: String.fromCharCode(65 + Math.floor(i / 10)),
  number: (i % 10) + 1,
  type: i < 40 ? 'classic' : i < 70 ? 'prime' : 'recliner',
  price: i < 40 ? 150 : i < 70 ? 200 : 400,
  isBooked: Math.random() > 0.8,
}));

export const SeatBooking = () => {
  const { showId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">Select Your Seats</h1>
        </div>
        <SeatSelection seats={SAMPLE_SEATS} />
        <div className="p-6 border-t bg-gray-50">
          <button
            onClick={() => navigate(`/booking/${showId}/payment`)}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};