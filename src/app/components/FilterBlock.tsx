'use client';

import { useState, useEffect } from 'react';

export default function FilterBlock({ setFiltered, original }: any) {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  // Filter automatically on change
  useEffect(() => {
    let result = original;
    if (category) result = result.filter((a: any) => a.category === category);
    if (location) result = result.filter((a: any) =>
      a.location.toLowerCase().includes(location.toLowerCase())
    );
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
      onSubmit={e => e.preventDefault()}
      aria-label="Filter Artists"
    >
      <label className="sr-only" htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-2 bg-white/60 backdrop-blur placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 transition"
      >
        <option value="">Category</option>
        <option value="Singers">Singers</option>
        <option value="Dancers">Dancers</option>
        <option value="Speakers">Speakers</option>
        <option value="DJs">DJs</option>
      </select>

      <label className="sr-only" htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-2 bg-white/60 backdrop-blur placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 transition"
        autoComplete="off"
      />

      {(category || location) ? (
        <button
          type="button"
          onClick={clearFilters}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Clear
        </button>
      ) : null}

      {/* Looks like a button but is hidden on mobile if filters are auto */}
      <button
        type="submit"
        className="hidden"
        aria-hidden="true"
      >
        Filter
      </button>
    </form>
  );
}
