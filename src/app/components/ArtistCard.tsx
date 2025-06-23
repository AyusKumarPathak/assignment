type Artist = {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center p-4 gap-4">
      {/* Image: Circle, contained, luxury shadow */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-28 h-28 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
          style={{ background: "#f6f3ff" }}
        />
      </div>
      {/* Info */}
      <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
        <h3 className="text-xl font-semibold font-serif text-gray-900">{artist.name}</h3>
        <p className="text-gray-600 mb-1">{artist.category} &bull; {artist.location}</p>
        <p className="text-sm text-gray-500 mb-2">Starts at <span className="font-semibold text-indigo-600">₹{artist.priceRange}</span></p>
        <button className="mt-auto w-full sm:w-fit px-6 py-2 bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-400 text-white rounded-full font-semibold shadow hover:scale-105 transition">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
