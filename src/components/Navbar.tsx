import React from 'react';
import { Search, Menu, MapPin, Film, Calendar, Mic, Ticket } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-red-500">BookMyShow</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays and Activities"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 w-80 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
              <MapPin className="h-5 w-5 mr-1" />
              <span>Mumbai</span>
            </div>
            <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Sign In
            </button>
            <Menu className="h-6 w-6 cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="flex items-center space-x-8 py-2 px-6 text-sm border-t border-gray-800">
          <a href="#" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Film className="h-4 w-4" />
            <span>Movies</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Mic className="h-4 w-4" />
            <span>Plays</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-red-500 transition-colors">
            <Ticket className="h-4 w-4" />
            <span>Activities</span>
          </a>
        </div>
      </div>
    </nav>
  );
};