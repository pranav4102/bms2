import React, { useState } from 'react';
import { MovieCard } from './MovieCard';
import { movies } from '../data/movies';
import { LanguageFilter } from './LanguageFilter';

export const MovieList = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filteredMovies = selectedLanguage
    ? movies.filter(movie => movie.language.includes(selectedLanguage))
    : movies;

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="px-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Recommended Movies</h2>
        <p className="text-gray-600">The best of Indian cinema, handpicked for you</p>
      </div>
      <LanguageFilter 
        selectedLanguage={selectedLanguage} 
        onLanguageSelect={setSelectedLanguage} 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};