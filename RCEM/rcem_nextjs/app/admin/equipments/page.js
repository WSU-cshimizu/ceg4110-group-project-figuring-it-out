import PageLayout from "@/app/components/pageLayout";

function page() {
  return (
    <PageLayout>
      <div className="gap-4 flex flex-col border rounded-lg p-4">
        <h3 className="font-semibold text-lg">Equipment Bookings</h3>
        <div className="flex border w-fit rounded-lg">
          <div className="bg-[#026937] text-white px-4 py-2">All Bookings</div>
          <div className="px-4 py-2 hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all transition-2s">
            Pending Bookings
          </div>
        </div>
        <div className="overflow-auto max-h-96"> {/* Set max height here */}
          <table className="table table-xs w-full">
            <thead className="bg-gray-200 sticky top-0 z-10"> {/* Sticky header */}
              <tr>
                <th className="w-1/4 px-2 py-1 text-left">Equipment Name</th>
                <th className="w-1/4 px-4 py-2 text-left">Equipment ID</th>
                <th className="w-1/4 px-4 py-2 text-left">Booked By</th>
                <th className="w-1/4 px-4 py-2 text-left">Booked On</th>
                <th className="w-1/4 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="w-1/4 px-4 py-2">Bicycles</td>
                <td className="w-1/4 px-4 py-2">54987</td>
                <td className="w-1/4 px-4 py-2">Estuardo</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              <tr>
                <td className="w-1/4 px-4 py-2">Scooters</td>
                <td className="w-1/4 px-4 py-2">45612</td>
                <td className="w-1/4 px-4 py-2">Skylar</td>
                <td className="w-1/4 px-4 py-2">2020/02/2 03:14 AM</td>
                <td className="w-1/4 px-4 py-2">Edit</td>
              </tr>
              {/* Additional rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}

export default page;
