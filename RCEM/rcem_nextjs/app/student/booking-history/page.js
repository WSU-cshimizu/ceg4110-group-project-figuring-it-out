"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function page() {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState(""); // State to track the selected status
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

  // Fetch bookings based on the selected status filter
  const fetchBookings = async (status) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/equipment/getUserBookings/${userID}`
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  };

  console.log(bookings, "bookings");

  // Effect to fetch all bookings on page load or when the status changes
  useEffect(() => {
    fetchBookings(status); // Fetch bookings based on selected status
  }, [userID]); // Dependency array ensures fetch is called when status changes
  console.log(userID, "user id");

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                Equipment Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                Equipment ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings &&
              bookings?.map((item) => {
                return (
                  <tr>
                    <td className="px-6 py-4">{item?.equipmentId?.name}</td>
                    <td className="px-6 py-4">
                      {item?.equipmentId?.equipmentID}
                    </td>
                    <td className="px-6 py-4">2024-06-01</td>
                    <td className="px-6 py-4">2023-06-10</td>
                    <td className="px-6 py-4">{item?.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default page;
