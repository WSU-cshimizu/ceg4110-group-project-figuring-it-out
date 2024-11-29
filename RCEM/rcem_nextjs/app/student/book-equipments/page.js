"use client";
import { useEffect, useState } from "react";
import PageLayout from "../../components/pageLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

function Page() {
  const [bookedEquipments, setBookedEquipments] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [equipmentState, setEquipmentState] = useState({}); // State to manage quantities and selected date-time
  const [userID, setUser] = useState();

  useEffect(() => {
    // Get the user's authentication data from the cookie
    const authData = Cookies.get("authData");
    if (authData) {
      const parsedData = JSON.parse(authData);

      // Decode the token
      const token = parsedData.token; // Assuming the token is under `token` key
      try {
        const decoded = jwt.decode(token); // Decode the JWT token

        // Extract the studentId from the decoded token
        const id = decoded.id; // Assuming the `studentId` is in the payload
        setUser(id);
      } catch (err) {
        console.error("Error decoding the token", err);
      }
    }
  }, []);

  console.log(userID, "data");

  const handleBooking = async (equipmentId) => {
    const equipmentDetails = equipmentState[equipmentId];

    // Validate input
    if (!equipmentDetails || !equipmentDetails.date || !equipmentDetails.time) {
      toast.error("Please select both date and time!");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(equipmentDetails.date);
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      toast.error("Booking cannot be made for past dates!");
      return;
    }

    if (equipmentDetails.quantity === 0) {
      toast.error("Please select a quantity greater than 0!");
      return;
    }

    // Prepare data to send to backend
    const bookingData = {
      equipmentId,
      userId: userID,
      quantity: equipmentDetails.quantity,
      date: equipmentDetails.date,
      time: equipmentDetails.time,
    };

    try {
      // Make API request to book the equipment
      const response = await axios.post(
        "http://localhost:5000/api/equipment/bookEquipment",
        bookingData
      );

      if (response.status === 200) {
        toast.success(response.data.message); // Show the return time and fine information
        setBookedEquipments((prev) => [
          ...prev,
          { equipmentId, ...equipmentDetails },
        ]);
      }
    } catch (error) {
      console.error("Error booking equipment:", error);
      toast.error(error?.response?.data?.error);
    }
  };

  const fetchEquipments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/allEquipments"
      );
      setEquipments(response.data?.data || []); // Assume `data` contains the equipment array
    } catch (error) {
      console.error("Error fetching equipments:", error);
      toast.error("Failed to fetch equipment data.");
    }
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  const handleStateChange = (equipmentId, key, value) => {
    setEquipmentState((prev) => ({
      ...prev,
      [equipmentId]: {
        ...prev[equipmentId],
        [key]: value,
      },
    }));
  };

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
    <PageLayout>
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl text-center">Equipment Booking</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((equipment) => {
            const equipmentDetails = equipmentState[equipment._id] || {
              quantity: 0,
              date: "",
              time: "",
            };

            return (
              <div
                key={equipment._id}
                className="border border-gray-300 rounded-lg p-6 shadow-md bg-white flex flex-col gap-4"
              >
                <h3 className="font-semibold text-lg">{equipment.name}</h3>
                <p className="text-sm text-gray-500">
                  In Stock: {equipment.itemCount}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() =>
                      handleStateChange(
                        equipment._id,
                        "quantity",
                        Math.max(0, equipmentDetails.quantity - 1)
                      )
                    }
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
                  >
                    -
                  </button>
                  <p className="text-lg font-semibold">
                    {equipmentDetails.quantity}
                  </p>
                  <button
                    onClick={() =>
                      handleStateChange(
                        equipment._id,
                        "quantity",
                        Math.min(
                          equipment.itemCount,
                          equipmentDetails.quantity + 1
                        )
                      )
                    }
                    className="px-4 py-2 bg-green-600 text-white rounded"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Select Date</label>
                  <input
                    type="date"
                    value={equipmentDetails.date}
                    onChange={(e) =>
                      handleStateChange(equipment._id, "date", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2"
                    min={new Date().toISOString().split("T")[0]} // Prevent past dates
                  />

                  <label className="text-sm font-medium">Select Time</label>
                  <select
                    value={equipmentDetails.time}
                    onChange={(e) =>
                      handleStateChange(equipment._id, "time", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2"
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
                  className="w-full bg-green-600 text-white font-medium py-2 rounded mt-4"
                  onClick={() => handleBooking(equipment._id)}
                >
                  Book Now
                </button>
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
