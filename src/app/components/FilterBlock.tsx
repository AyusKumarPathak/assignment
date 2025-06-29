'use client';

import { useState, useEffect } from 'react';

// Define a proper type for artist data
type Artist = {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
};

type FilterBlockProps = {
  original: Artist[];
  setFiltered: (data: Artist[]) => void;
};

export default function FilterBlock({ setFiltered, original }: FilterBlockProps) {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  // Filter logic
  useEffect(() => {
    let result = original;

    if (category) {
      result = result.filter((a) => a.category === category);
    }

    if (location) {
      result = result.filter((a) =>
        a.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    setFiltered(result);
  }, [category, location, original, setFiltered]);

  const clearFilters = () => {
    setCategory('');
    setLocation('');
    setFiltered(original);
  };

  return (
    <form
      className="flex flex-col sm:flex-row gap-4 items-stretch"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Filter Artists"
    >
      <label className="sr-only" htmlFor="category">
        Category
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-2 bg-white/60 backdrop-blur placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 transition"
      >
        <option value="">Category</option>
        <option value="Singers">Singers</option>
        <option value="Dancers">Dancers</option>
        <option value="Speakers">Speakers</option>
        <option value="DJs">DJs</option>
      </select>

      <label className="sr-only" htmlFor="location">
        Location
      </label>
      <input
        id="location"
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-2 bg-white/60 backdrop-blur placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 transition"
        autoComplete="off"
      />

      {(category || location) && (
        <button
          type="button"
          onClick={clearFilters}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Clear
        </button>
      )}

      <button type="submit" className="hidden" aria-hidden="true">
        Filter
      </button>
    </form>
  );
}
