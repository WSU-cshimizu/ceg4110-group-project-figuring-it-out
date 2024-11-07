"use client";
import { useState } from "react";
import PageLayout from "../../components/pageLayout";


function page() {
  // Initial in-stock quantity
  const inStock = 10; // Set the in-stock quantity dynamically for each item

  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <h2 className="font-semibold text-xl">All Equipments</h2>
        <div className="flex flex-wrap gap-4 justify-start ">
          {[1, 1, 1, 1, 1].map((item, index) => {
            // State to handle the quantity
            const [quantity, setQuantity] = useState(0);

            const increaseQuantity = () => {
              if (quantity < inStock) {
                setQuantity(quantity + 1);
              }
            };

            const decreaseQuantity = () => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            };

            return (
              <div
                key={index}
                className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 border rounded-lg shadow-lg"
              >
                <img
                  className="rounded-xl mb-4"
                  height="80px"
                  width="200px"
                  src="https://img.freepik.com/premium-photo/illustrative-cat-bike-funny-animal-riding-cycle-generative-ai_116317-27258.jpg"
                  alt="Product"
                />
                <div className="flex flex-col items-center">
                  <h4 className="font-semibold text-lg">Bicycle</h4>
                  <p className="text-sm text-gray-600">In Stock: {inStock}</p>
                  <div className="flex justify-center items-center gap-2 w-full  p-2 rounded-lg my-2">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-1 bg-gray-400 text-white rounded"
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-1 bg-gray-400 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                  <MyCalendar />
                  <button className="px-4 py-2 border rounded border-[#026937] mt-4">
                    Book now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

const MyCalendar = () => {
  // Initialize state with both date and time (empty strings as default)
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: null,
    time: null,
  });

  const handleDateChange = (e) => {
    setSelectedDateTime({ ...selectedDateTime, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setSelectedDateTime({ ...selectedDateTime, time: e.target.value });
  };

  return (
    <div>
      <h3>Select Date and Time:</h3>

      {/* Date Picker */}
      <input
        type="date"
        value={selectedDateTime.date || ""}
        onChange={handleDateChange}
        className="mb-2"
      />

      {/* Time Picker */}
      <input
        type="time"
        value={selectedDateTime.time || ""}
        onChange={handleTimeChange}
        className="mb-2"
      />

      {/* Display selected date and time */}
      {/* <p>
        Selected Date: {selectedDateTime.date} <br />
        Selected Time: {selectedDateTime.time}
      </p> */}
    </div>
  );
};

export default page;
