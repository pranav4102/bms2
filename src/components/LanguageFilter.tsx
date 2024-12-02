import React from 'react';
import { languages } from '../data/languages';

interface LanguageFilterProps {
  selectedLanguage: string | null;
  onLanguageSelect: (language: string | null) => void;
}

export const LanguageFilter = ({ selectedLanguage, onLanguageSelect }: LanguageFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-6 bg-white shadow-sm">
      <button
        onClick={() => onLanguageSelect(null)}
        className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
          selectedLanguage === null
            ? 'border-red-500 bg-red-50 text-red-500'
            : 'border-gray-300 hover:bg-red-50 hover:border-red-500 hover:text-red-500'
        }`}
      >
        All Languages
      </button>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageSelect(lang.name)}
          className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
            selectedLanguage === lang.name
              ? 'border-red-500 bg-red-50 text-red-500'
              : 'border-gray-300 hover:bg-red-50 hover:border-red-500 hover:text-red-500'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};