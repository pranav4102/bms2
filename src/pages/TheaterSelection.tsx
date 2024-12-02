import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Wifi, Coffee, Car } from 'lucide-react';
import { movies } from '../data/movies';

const SAMPLE_THEATERS = [
  {
    id: '1',
    name: 'PVR Cinemas',
    location: 'Phoenix Mall, Lower Parel',
    city: 'Mumbai',
    facilities: ['Parking', 'Food Court', 'Wifi'],
    shows: [
      { id: 'show1', time: '10:30 AM', price: { classic: 150, prime: 200, recliner: 400 } },
      { id: 'show2', time: '1:45 PM', price: { classic: 180, prime: 240, recliner: 450 } },
      { id: 'show3', time: '6:30 PM', price: { classic: 200, prime: 280, recliner: 500 } },
    ],
  },
  {
    id: '2',
    name: 'INOX',
    location: 'R-City Mall, Ghatkopar',
    city: 'Mumbai',
    facilities: ['Parking', 'Food Court', 'Wifi'],
    shows: [
      { id: 'show4', time: '11:00 AM', price: { classic: 140, prime: 190, recliner: 380 } },
      { id: 'show5', time: '2:15 PM', price: { classic: 170, prime: 230, recliner: 430 } },
      { id: 'show6', time: '7:00 PM', price: { classic: 190, prime: 270, recliner: 480 } },
    ],
  },
];

export const TheaterSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  if (!movie) return <div>Movie not found</div>;

  const getFacilityIcon = (facility: string) => {
    switch (facility) {
      case 'Wifi': return <Wifi className="h-4 w-4" />;
      case 'Food Court': return <Coffee className="h-4 w-4" />;
      case 'Parking': return <Car className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <h1 className="text-2xl font-bold mb-6">Select Theater & Show Time</h1>
      <div className="space-y-6">
        {SAMPLE_THEATERS.map(theater => (
          <div key={theater.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{theater.name}</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{theater.location}</span>
                </div>
              </div>
              <div className="flex gap-3">
                {theater.facilities.map(facility => (
                  <div
                    key={facility}
                    className="flex items-center gap-1 text-gray-600 text-sm bg-gray-50 px-2 py-1 rounded"
                    title={facility}
                  >
                    {getFacilityIcon(facility)}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {theater.shows.map(show => (
                <button
                  key={show.id}
                  onClick={() => navigate(`/booking/${show.id}/seats`)}
                  className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <div className="font-semibold">{show.time}</div>
                  <div className="text-sm text-gray-600">
                    ₹{show.price.classic} - ₹{show.price.recliner}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};