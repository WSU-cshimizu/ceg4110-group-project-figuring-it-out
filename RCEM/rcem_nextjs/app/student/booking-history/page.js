function page() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Booking History</h1>
      
      <div className="flex flex-wrap justify-between items-center mb-6 ">
        <div className="flex flex-wrap items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search bookings..."
            className="border rounded-md shadow-sm px-3 py-2"
          />
          <select className="border rounded-md shadow-sm px-3 py-2 ">
            <option>Equipment Types</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-md shadow-sm">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 divide-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Equipment Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Bicycle</td>
              <td className="px-6 py-4">2024-06-01</td>
              <td className="px-6 py-4">2023-06-10</td>
              <td className="px-6 py-4">Returned</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Basketball</td>
              <td className="px-6 py-4">2023-06-01</td>
              <td className="px-6 py-4">TBD</td>
              <td className="px-6 py-4">In Use</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Tennis Racket</td>
              <td className="px-6 py-4">2023-07-05</td>
              <td className="px-6 py-4">2023-07-10</td>
              <td className="px-6 py-4">Returned</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Soccer Ball</td>
              <td className="px-6 py-4">2024-06-06</td>
              <td className="px-6 py-4">TBD</td>
              <td className="px-6 py-4">In Use</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Bicycle</td>
              <td className="px-6 py-4">2023-05-01</td>
              <td className="px-6 py-4">2023-05-11</td>
              <td className="px-6 py-4">Returned</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default page;