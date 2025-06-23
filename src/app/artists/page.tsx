'use client';

import { useEffect, useState } from 'react';
import data from '../data/artists.json';
import ArtistCard from '../components/ArtistCard';
import FilterBlock from '../components/FilterBlock';

export default function ArtistsPage() {
  const [artists, setArtists] = useState(data);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6f3ff] via-[#e8eafc] to-[#fbeffb] py-12 px-4">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
          Explore Artists
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Discover and book India’s finest performers for your next luxury event. Use the filters to find the perfect singer, dancer, speaker, or DJ to elevate your occasion.
        </p>
        
        {/* Filter Block in a glassy card */}
        <div className="mb-10 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-100">
          <FilterBlock setFiltered={setArtists} original={data} />
        </div>

        {/* Responsive Artist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-xl py-12">
              No artists found for the selected filters.
            </div>
          ) : (
            artists.map((artist) => (
              <div
                key={artist.id}
                className="transition-transform duration-300 hover:scale-105"
              >
                <ArtistCard artist={artist} />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
