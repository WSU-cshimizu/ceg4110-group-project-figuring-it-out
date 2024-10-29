function page() {
  return (
    <div className = "h-screen bg-gray-100 flex-1 flex-col">
      <div className = "h-full w-full flex flex-col">
          <div className = "flex flex-row h-full">
            <section className = "basis-2/5 h-full text-black bg-white border border-solid border-black">
              Section 1
            </section>
            <section className = "basis-3/5 h-full bg-white flex flex-col">
              <aside className = "basis-2/5 w-full text-black bg-white border border-solid border-black px-6 py-3">
                <form action="" method="post">
                  <fieldset className = "w-2/5">
                    <legend className = "text-2x1 mb-2">Add Equipment</legend>
                    <label htmlFor="equipmentName" className = "block text-sm font-medium text-gray-700 space-y-6">Equipment Name</label>
                    <input
                      type = "text"
                      name = "eqipmentName"
                      id = "equpmentName"
                      className = "block mt-1 mb-2 p-1 w-full text-sm border border-gray-600 shadow-sm"
                      placeholder = "Enter Equipment Name" />
                    <label htmlFor="equipmentId" className = "block text-sm font-medium text-gray-700 space-y-6">Equipment ID</label>
                    <input
                      type = "text"
                      name = "eqipmentId"
                      id = "equpmentId"
                      className = "block mt-1 mb-2 p-1 w-full text-sm border border-gray-600 shadow-sm"
                      placeholder = "Enter Equipment Id" />
                    <label htmlFor="quantity" className = "block text-sm font-medium text-gray-700 space-y-6">Quantity</label>
                    <input
                      type = "text"
                      name = "quantity"
                      id = "quantity"
                      className = "block mt-1 mb-2 p-1 w-full text-sm border border-gray-600 shadow-sm"
                      placeholder = "Enter Quantity" />
                      <button className="mx-1 p-1 text-sm border border-gray-600 shadow-sm">Add Item</button>
                      <button className="mx-1 p-1 text-sm border border-gray-600 shadow-sm">Reset</button>
                  </fieldset>
                </form>
              </aside>
              <aside className = "basis-3/5 w-full text-black bg-white border border-solid border-black">
                Bookings
              </aside>
            </section>
          </div>
      </div>
    </div>
  );
}

export default page;
