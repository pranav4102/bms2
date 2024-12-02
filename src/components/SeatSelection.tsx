import React from 'react';
import { useBookingStore } from '../store/bookingStore';
import { Seat } from '../types/booking';

interface SeatSelectionProps {
  seats: Seat[];
}

export const SeatSelection = ({ seats }: SeatSelectionProps) => {
  const { selectedSeats, setSelectedSeats } = useBookingStore();

  const toggleSeat = (seatId: string) => {
    const isSelected = selectedSeats.includes(seatId);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getSeatColor = (seat: Seat) => {
    if (seat.isBooked) return 'bg-gray-400 cursor-not-allowed';
    if (selectedSeats.includes(seat.id)) return 'bg-green-500';
    return 'bg-white hover:bg-gray-100';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Select Seats</h3>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white border rounded mr-2" />
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded mr-2" />
            <span>Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-400 rounded mr-2" />
            <span>Booked</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        {seats.map((seat) => (
          <button
            key={seat.id}
            onClick={() => !seat.isBooked && toggleSeat(seat.id)}
            disabled={seat.isBooked}
            className={`
              p-2 rounded border transition-colors
              ${getSeatColor(seat)}
            `}
          >
            {seat.row}{seat.number}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <div className="text-lg font-semibold">
          Selected Seats: {selectedSeats.length}
        </div>
        <div className="text-gray-600">
          Total Amount: ₹{selectedSeats.reduce((total, seatId) => {
            const seat = seats.find(s => s.id === seatId);
            return total + (seat?.price || 0);
          }, 0)}
        </div>
      </div>
    </div>
  );
};