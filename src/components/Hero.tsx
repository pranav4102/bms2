import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1920"
        alt="Bollywood Cinema"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">
            Experience the Magic of Indian Cinema
          </h1>
          <p className="text-xl mb-8">
            Book tickets for the latest Bollywood, Hollywood, and Regional movies
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Find Theaters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};