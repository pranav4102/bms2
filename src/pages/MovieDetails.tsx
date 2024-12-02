import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Star, Calendar } from 'lucide-react';
import { movies } from '../data/movies';

export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <div className="flex gap-8">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-80 h-120 object-cover rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center mb-4">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            <span className="ml-2 text-xl">{movie.rating}/5</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <Clock className="h-5 w-5 mr-2" />
            <span>{movie.duration}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map(g => (
              <span key={g} className="px-3 py-1 bg-gray-100 rounded-full">
                {g}
              </span>
            ))}
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Available in</h3>
            <div className="flex gap-2">
              {movie.language.map(lang => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate(`/movie/${id}/theaters`)}
            className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors flex items-center"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};