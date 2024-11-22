"use client";
import { useState } from "react";
import PageLayout from "../../components/pageLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [bookedEquipments, setBookedEquipments] = useState([]);

  const handleBooking = (equipment, quantity, selectedDateTime) => {
    if (!selectedDateTime.date || !selectedDateTime.time) {
      toast.error("Please select both date and time!");
      return;
    }

    // Check if the selected date is valid
    const today = new Date();
    const selectedDate = new Date(selectedDateTime.date);
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      toast.error("Booking cannot be made for past dates!");
      return;
    }

    if (quantity === 0) {
      toast.error("Please select a quantity greater than 0!");
      return;
    }

    // Add booking details to state
    setBookedEquipments((prev) => [
      ...prev,
      { ...equipment, quantity, ...selectedDateTime },
    ]);

    toast.success(`${equipment.name} booked successfully!`);
  };

  const equipments = [
    { id: 1, name: "Bicycle", image: "https://via.placeholder.com/200", inStock: 10 },
    { id: 2, name: "Helmet", image: "https://via.placeholder.com/150", inStock: 5 },
  ];

  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <h2 className="font-semibold text-xl">All Equipments</h2>
        <div className="flex flex-wrap gap-4 justify-start">
          {equipments.map((equipment, index) => {
            const [quantity, setQuantity] = useState(0);
            const [selectedDateTime, setSelectedDateTime] = useState({
              date: null,
              time: null,
            });

            const increaseQuantity = () => {
              if (quantity < equipment.inStock) {
                setQuantity(quantity + 1);
              }
            };

            const decreaseQuantity = () => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            };

            const handleDateChange = (e) => {
              setSelectedDateTime({ ...selectedDateTime, date: e.target.value });
            };

            const handleTimeChange = (e) => {
              setSelectedDateTime({ ...selectedDateTime, time: e.target.value });
            };

            // Generate time options between 8:00 AM and 4:00 PM
            const generateTimeOptions = () => {
              const times = [];
              for (let hour = 8; hour <= 16; hour++) {
                times.push(
                  `${hour.toString().padStart(2, "0")}:00`,
                  `${hour.toString().padStart(2, "0")}:30`
                );
              }
              return times;
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
                  src={equipment.image}
                  alt={equipment.name}
                />
                <div className="flex flex-col items-center">
                  <h4 className="font-semibold text-lg">{equipment.name}</h4>
                  <p className="text-sm text-gray-600">In Stock: {equipment.inStock}</p>
                  <div className="flex justify-center items-center gap-2 w-full p-2 rounded-lg my-2">
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
                  <div>
                    <h3>Select Date and Time:</h3>
                    <input
                      type="date"
                      value={selectedDateTime.date || ""}
                      onChange={handleDateChange}
                      className="mb-2"
                      min={new Date().toISOString().split("T")[0]} // Prevent past dates
                    />
                    <select
                      value={selectedDateTime.time || ""}
                      onChange={handleTimeChange}
                      className="mb-2"
                    >
                      <option value="" disabled>
                        Select Time
                      </option>
                      {generateTimeOptions().map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="px-4 py-2 border rounded border-[#026937] mt-4"
                    onClick={() =>
                      handleBooking(equipment, quantity, selectedDateTime)
                    }
                  >
                    Book now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </PageLayout>
  );
}

export default Page;
