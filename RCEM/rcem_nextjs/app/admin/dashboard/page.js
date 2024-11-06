import PageLayout from "@/app/components/pageLayout";

function page() {
  return (
    <PageLayout>
      <div className="w-full flex p-8">
        <div className="flex gap-2 justify-center  w-full">
          <div className="w-full  flex flex-col gap-6  border rounded-lg">
            <div className="overflow-y-auto h-[70vh] ">
              <div className="p-4 flex flex-col gap-4 ">
                <h2 className="font-semibold text-lg">Available Equipments</h2>
                <div className="flex gap-2 ">
                  <input
                    className="border px-4 py-2 rounded-lg w-full"
                    placeholder="Search Equipments "
                  />
                  <div className="flex gap-2 ">
                    <button className="px-4 py-2  border rounded-lg hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all transition-2s">
                      Search
                    </button>
                    <button className="px-4 py-2  border rounded-lg hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all transition-2s">
                      Refresh
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <table className="w-full ">
                  <thead className="bg-gray-200   ">
                    <tr className="w-full">
                      <th className="w-1/4 px-4 py-2 text-left">
                        Equipment Name
                      </th>
                      <th className="w-1/4 px-4 py-2 text-left">
                        Equipment ID
                      </th>
                      <th className="w-1/4 px-4 py-2 text-left">Quantity</th>
                      <th className="w-1/4 px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-1/4 px-4 py-2">Bicycles</td>
                      <td className="w-1/4 px-4 py-2">54987</td>
                      <td className="w-1/4 px-4 py-2">20</td>
                      <td className="w-1/4 px-4 py-2">Edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/4 px-4 py-2">Scooters</td>
                      <td className="w-1/4 px-4 py-2">45612</td>
                      <td className="w-1/4 px-4 py-2">15</td>
                      <td className="w-1/4 px-4 py-2">Edit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6  ">
            <div className="gap-4 flex flex-col border rounded-lg p-4">
              <div className="font-semibold text-lg">Add Equipments</div>
              <div className="flex gap-2">
                <input
                  className="border px-4 py-2 rounded-lg w-full"
                  placeholder="Equipments"
                />
                <input
                  className="border px-4 py-2 rounded-lg w-full"
                  placeholder="Quantity "
                />
              </div>
              <div className="flex gap-2 bgw">
                <button className="px-4 py-2  border rounded-lg hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all transition-2s">
                  Add Item
                </button>
                <button className="px-4 py-2  border rounded-lg hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all transition-2s">
                  Reset
                </button>
              </div>
              <div></div>
            </div>
           
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default page;
