function page() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-600">Report Damage</h1>
        <form className="space-y-6">

          <div>
            <label htmlFor="equipmentId" className="block text-sm font-medium text-gray-700">
              Equipment ID
            </label>
            <input
              type="text"
              name="equipmentId"
              id="equipmentId"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Equipment ID"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Damage Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              placeholder="Describe the damage..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-700 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Damage Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
