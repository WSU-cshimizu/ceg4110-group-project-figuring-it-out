"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLayout from "@/app/components/pageLayout";

function Page() {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState(''); // State to track the selected status

  // Fetch bookings based on the selected status filter
  const fetchBookings = async (status) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/equipment/getAllBookings?status=${status}`);
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  };

  // Effect to fetch all bookings on page load or when the status changes
  useEffect(() => {
    fetchBookings(status); // Fetch bookings based on selected status
  }, [status]); // Dependency array ensures fetch is called when status changes

  // Approve booking
  const handleApprove = async (bookingId) => {
    try {
      await axios.put(`http://localhost:5000/api/equipment/approve/${bookingId}`);
      setBookings(bookings.map((booking) => 
        booking._id === bookingId ? { ...booking, status: 'confirmed' } : booking
      ));
    } catch (error) {
      console.error("Error approving booking", error);
    }
  };

  // Reject booking
  const handleReject = async (bookingId) => {
    try {
      await axios.put(`http://localhost:5000/api/equipment/reject/${bookingId}`);
      setBookings(bookings.map((booking) => 
        booking._id === bookingId ? { ...booking, status: 'canceled' } : booking
      ));
    } catch (error) {
      console.error("Error rejecting booking", error);
    }
  };

  return (
    <PageLayout>
      <div className="gap-4 flex flex-col border rounded-lg p-4">
        <h3 className="font-semibold text-lg">Equipment Bookings</h3>
        
        {/* Filter buttons */}
        <div className="flex border w-fit rounded-lg">
          <div 
            className="bg-[#026937] text-white px-4 py-2 cursor-pointer"
            onClick={() => setStatus('')} // All bookings
          >
            All Bookings
          </div>
          <div 
            className="px-4 py-2 hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all"
            onClick={() => setStatus('pending')} // Pending bookings
          >
            Pending Bookings
          </div>
          <div 
            className="px-4 py-2 hover:bg-[#026937] hover:text-white hover:cursor-pointer transition-all"
            onClick={() => setStatus('canceled')} // Canceled bookings
          >
            Canceled Bookings
          </div>
        </div>

        <div className="overflow-auto max-h-96">
          <table className="table table-xs w-full">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="w-1/4 px-2 py-1 text-left">Equipment Name</th>
                <th className="w-1/4 px-4 py-2 text-left">Equipment ID</th>
                <th className="w-1/4 px-4 py-2 text-left">Booked By</th>
                <th className="w-1/4 px-4 py-2 text-left">Booked On</th>
                <th className="w-1/4 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-2">No bookings found for the selected status.</td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="w-1/4 px-4 py-2">{booking.equipmentId.name}</td>
                    <td className="w-1/4 px-4 py-2">{booking.equipmentId._id}</td>
                    <td className="w-1/4 px-4 py-2">{booking.userId.name}</td>
                    <td className="w-1/4 px-4 py-2">{new Date(booking.createdAt).toLocaleString()}</td>
                    <td className="w-1/4 px-4 py-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            className="text-green-500 hover:text-green-700 mr-2"
                            onClick={() => handleApprove(booking._id)}
                          >
                            Approve
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleReject(booking._id)}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {booking.status === 'confirmed' && <span>Approved</span>}
                      {booking.status === 'canceled' && <span>Rejected</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}

export default Page;
