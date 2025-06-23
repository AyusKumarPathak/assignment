"use client";
import Link from "next/link";
import {
  FaMicrophone,
  FaMusic,
  FaUserTie,
  FaHeadphones,
} from "react-icons/fa";

const categories = [
  {
    name: "Singers",
    icon: <FaMicrophone size={38} className="text-gradient-blue" />,
  },
  {
    name: "Dancers",
    icon: <FaMusic size={38} className="text-gradient-pink" />,
  },
  {
    name: "Speakers",
    icon: <FaUserTie size={38} className="text-gradient-gold" />,
  },
  {
    name: "DJs",
    icon: <FaHeadphones size={38} className="text-gradient-green" />,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2e9fa] via-[#e0e6f6] to-[#f9e9ef] text-gray-900 font-sans flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-serif font-extrabold mb-6 leading-tight text-gradient-gold">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-600 bg-clip-text text-transparent animate-glitter drop-shadow-lg">
              Artistly
            </span>
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-300 shadow-glitter animate-pulse-glitter"></span>
          </span>
          <span className="block text-2xl font-semibold text-gray-500 mt-2 tracking-wide">
            Luxury Event Management
          </span>
        </h1>
 <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 mb-10 text-center leading-relaxed">
  <span className="font-medium">
    Experience the pinnacle of elegance and artistry with
  </span>{' '}
  <span className="font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
    Artistly
  </span>
  . We curate
  <span className="font-semibold text-gray-800"> India&rsquo;s most exclusive events</span>, featuring
  <span className="font-semibold text-gray-800"> world-class performers</span> and seamless service. <br className="hidden sm:block" />
  From star-studded galas to intimate soirées, our handpicked roster of
  <span className="text-indigo-600 font-semibold"> singers, dancers, speakers, and DJs</span>{' '}
  ensures your occasion is as unforgettable as it is luxurious.
</p>
   <Link
          href="/artists"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-300"
        >
          Explore Artists
        </Link>
      </section>

      {/* Luxury Category Grid */}
      <section className="w-full max-w-5xl mx-auto mt-12 mb-0 pb-0 overflow-hidden">
        <div className="relative">
          <div className="flex gap-8 animate-marquee hide-scrollbar">
            {categories.concat(categories).map((cat, idx) => (
              <div
                key={cat.name + idx}
                className="flex flex-col items-center justify-center bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 min-w-[200px] mx-2 font-semibold text-gray-900 border border-yellow-100 hover:scale-105 hover:shadow-gold transition-all duration-300 text-center"
                style={{
                  boxShadow:
                    "0 6px 24px 0 rgba(220, 180, 80, 0.08), 0 1.5px 6px 0 rgba(220, 180, 80, 0.06)",
                  border: "1.5px solid #f5e1b7",
                  background:
                    "linear-gradient(135deg,rgba(255,255,255,0.8) 60%,rgba(255,244,200,0.3) 100%)",
                }}
              >
                <span className="mb-4">{cat.icon}</span>
                <span className="mt-1 text-xl font-serif">{cat.name}</span>
              </div>
            ))}
          </div>
          {/* Glitter, marquee, and scrollbar-hiding CSS */}
          <style jsx global>{`
            @keyframes glitter {
              0%, 100% { filter: brightness(1.1) drop-shadow(0 0 6px #fff8); }
              50% { filter: brightness(1.6) drop-shadow(0 0 16px #fff); }
            }
            .animate-glitter { animation: glitter 1.8s infinite alternate; }
            @keyframes pulse-glitter {
              0%, 100% { opacity: 0.7; transform: scale(1);}
              50% { opacity: 1; transform: scale(1.3);}
            }
            .animate-pulse-glitter { animation: pulse-glitter 1.5s infinite; }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 18s linear infinite;
            }
            .shadow-glitter {
              box-shadow: 0 0 10px 2px #ffe06688, 0 0 6px 1px #fff8;
            }
            .text-gradient-gold {
              background: linear-gradient(90deg, #f5d97c 30%, #ffb07c 60%, #bca3f7 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
            .text-gradient-blue {
              background: linear-gradient(90deg, #4f8cff 0%, #8fd3f4 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .text-gradient-pink {
              background: linear-gradient(90deg, #ff6fb1 0%, #ffe6fa 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .text-gradient-green {
              background: linear-gradient(90deg, #1de9b6 0%, #b2ff59 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .shadow-gold {
              box-shadow: 0 6px 24px 0 #f5e1b7, 0 1.5px 6px 0 #f5e1b7;
            }
            /* Hide scrollbars for all browsers */
            .hide-scrollbar {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE 10+ */
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome/Safari/Webkit */
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}
