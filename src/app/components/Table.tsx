type Submission = {
  id: number;
  name: string;
  category: string[];
  location: string;
  fee: string;
};

export default function Table({ data }: { data: Submission[] }) {
  return (
    <div className="w-full mt-4">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Category</th>
              <th className="border p-3 text-left">Location</th>
              <th className="border p-3 text-left">Fee</th>
              <th className="border p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sub) => (
              <tr key={sub.id} className="bg-white hover:bg-gray-50 transition">
                <td className="border p-3">{sub.name}</td>
                <td className="border p-3">{sub.category.join(', ')}</td>
                <td className="border p-3">{sub.location}</td>
                <td className="border p-3">₹{sub.fee}</td>
                <td className="border p-3">
                  <button className="text-blue-600 font-semibold hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4">
        {data.map((sub) => (
          <div
            key={sub.id}
            className="rounded-xl shadow bg-white p-4 flex flex-col gap-2 border border-gray-100"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{sub.name}</span>
              <button className="text-blue-600 font-semibold hover:underline">View</button>
            </div>
            <div>
              <span className="font-semibold text-gray-500">Category: </span>
              <span>{sub.category.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500">Location: </span>
              <span>{sub.location}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500">Fee: </span>
              <span>₹{sub.fee}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
