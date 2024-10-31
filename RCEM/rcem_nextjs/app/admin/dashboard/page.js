function page() {
  return (
    <div className = "h-screen bg-gray-100 flex flex-1 flex-col">
      <div className = "h-full w-full flex flex-col">
          <div className = "flex flex-row h-full">
            <section className = "basis-2/5 h-full text-black bg-white border border-solid border-black">
              Section 1
            </section>
            <section className = "basis-3/5 h-full bg-white flex flex-col">
              <aside className = "basis-2/5 w-full text-black bg-white border border-solid border-black px-6 py-3">
                <form action="" method="post">
                  <fieldset className = "w-2/5 flex flex-col">
                    <legend className = "text-2x1 mb-2">Add Equipment</legend>
                    <label htmlFor="equipmentName" className = "flex-1 text-sm font-medium text-gray-700 space-y-6">Equipment Name</label>
                    <input
                      type = "text"
                      name = "eqipmentName"
                      id = "equpmentName"
                      className = "flex-1 mt-1 mb-2 p-1 w-full text-sm border border-gray-600 shadow-sm"
                      placeholder = "Enter Equipment Name" />
                    <label htmlFor="equipmentId" className = "flex-1 text-sm font-medium text-gray-700 space-y-6">Equipment ID</label>
                    <input
                      type = "text"
                      name = "eqipmentId"
                      id = "equpmentId"
                      className = "flex-1 mt-1 mb-2 p-1 w-full text-sm border border-gray-600 shadow-sm"
                      placeholder = "Enter Equipment Id" />
                    <label htmlFor="quantity" className = "flex-1 text-sm font-medium text-gray-700 space-y-6">Quantity</label>
                    <input
                      type = "text"
                      name = "quantity"
                      id = "quantity"
                      className = "flex-1 mt-1 mb-2 p-1 w-full text-sm border border-gray-600 shadow-sm"
                      placeholder = "Enter Quantity" />
                    <div className = "flex flex-row flex-1 gap-x-2 justify-center">
                      <button type = "submit" className="p-1 text-sm border border-gray-600 shadow-sm">Add Item</button>
                      <button type = "reset" className="p-1 text-sm border border-gray-600 shadow-sm">Reset</button>
                    </div>
                  </fieldset>
                </form>
              </aside>
              <aside className = "flex flex-col basis-3/5 w-full text-black bg-white border border-solid border-black px-6 py-3 gap-y-3">
                <nav className = "flex flex-row w-1/4 border border-solid border-black gap-x-2">
                  <button className = "text-black text-sm p-1">All Bookings</button>
                  <button className = "text-black text-sm p-1">Pending Bookings</button>
                </nav>
                <table className = "min-w-full border-collapse border border-gray-900">
                  <thead>
                    <tr>
                      <th className = "font-normal text-sm border border-gray-900 text-left px-2 py-1">Equipment Name</th>
                      <th className = "font-normal text-sm border border-gray-900 text-left px-2 py-1">Booked By</th>
                      <th className = "font-normal text-sm border border-gray-900 text-left px-2 py-1">Equipment ID</th>
                      <th className = "font-normal text-sm border border-gray-900 text-left px-2 py-1">Booked Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className = "text-sm border border-gray-900 px-2 py-1">equipment1</td>
                      <td className = "text-sm border border-gray-900 px-2 py-1">booked1</td>
                      <td className = "text-sm border border-gray-900 px-2 py-1">id1</td>
                      <td className = "text-sm border border-gray-900 px-2 py-1">time1</td>
                    </tr>
                  </tbody>
                </table>
              </aside>
            </section>
          </div>
      </div>
    </div>
  );
}

export default page;
