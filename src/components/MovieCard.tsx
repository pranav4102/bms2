import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Ticket } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 right-2 bg-gray-900/80 text-white px-2 py-1 rounded text-sm">
          {movie.certificate}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-700">{movie.rating}/5</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {movie.genre.map((g) => (
            <span
              key={g}
              className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
            >
              {g}
            </span>
          ))}
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{movie.duration}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {movie.language.map((lang) => (
            <span
              key={lang}
              className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
        <div className="border-t pt-3">
          <p className="text-sm text-gray-600 mb-3">Cast: {movie.cast.join(', ')}</p>
          <button
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
          >
            <Ticket className="h-4 w-4" />
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};