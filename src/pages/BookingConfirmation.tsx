import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Home } from 'lucide-react';

export const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Your tickets have been booked successfully.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center text-red-500 hover:text-red-600">
              <Download className="h-5 w-5 mr-2" />
              Download Ticket
            </button>
          </div>
          <div className="space-y-4 text-left">
            <div>
              <div className="text-sm text-gray-600">Booking ID</div>
              <div className="font-semibold">BKID12345678</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Show Time</div>
              <div className="font-semibold">Today, 7:00 PM</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Seats</div>
              <div className="font-semibold">A1, A2, A3</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center mx-auto text-red-500 hover:text-red-600"
        >
          <Home className="h-5 w-5 mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};