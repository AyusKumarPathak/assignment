import data from '../data/submissions.json';
import Table from '../components/Table';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6f3ff] via-[#e8eafc] to-[#fbeffb] py-10 px-2">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-6">
        <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent font-serif drop-shadow-lg">
          Manager Dashboard
        </h2>
        <Table data={data} />
      </div>
    </main>
  );
}
