const Booking = require("../models/Booking");
const Equipment = require("../models/Equipments");
const mongoose = require("mongoose");

// Book equipment
const bookEquipment = async (req, res) => {
  try {
    const { userId, equipmentId, quantity, date, time } = req.body;

    // Validate input
    if (!userId || !equipmentId || !quantity || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Find equipment and validate available quantity
    const equipment = await Equipment.findById(equipmentId);
    if (!equipment) {
      return res.status(404).json({ error: "Equipment not found" });
    }

    if (quantity > equipment.itemCount) {
      return res.status(400).json({ error: "Not enough equipment in stock" });
    }

    // Set booking start and end time
    const bookingDate = new Date(date);
    const startDate = new Date(
      bookingDate.setHours(
        parseInt(time.split(":")[0]),
        parseInt(time.split(":")[1]),
        0
      )
    ); // Set start time from selected date and time

    let endDate = new Date(startDate);
    if (startDate.getDate() === new Date().getDate()) {
      endDate.setHours(18, 0, 0); // If booking for today, set to 6 PM today
    } else {
      endDate.setHours(18, 0, 0); // If not, set to 6 PM on the selected date
    }

    // Check if the user already has a booking for the same equipment and time slot
    const existingBooking = await Booking.findOne({
      userId,
      equipmentId,
    });

    if (existingBooking) {
      return res.status(400).json({
        error:
          "You have already booked this equipment for the selected time slot.",
      });
    }

    // Create booking
    const newBooking = new Booking({
      userId,
      equipmentId,
      quantity,
      startDate,
      endDate,
      status: "pending", // Initial status is pending
    });

    // Save booking
    await newBooking.save();

    // Return success response
    res.status(200).json({
      message: `Booking successful! Equipment must be returned by ${endDate.toLocaleTimeString()} on the selected day. Late returns will incur a fine of $20.`,
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error booking equipment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Approve booking
const approveBooking = async (req, res) => {
  try {
    const { bookingId } = req.params; // Get booking ID from params

    // Validate bookingId
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ error: "Invalid booking ID" });
    }

    // Find booking by ID
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // If the booking is already approved or rejected, prevent changes
    if (booking.status === "approved") {
      return res.status(400).json({ error: "Booking already approved" });
    }
    if (booking.status === "rejected") {
      return res.status(400).json({ error: "Booking already rejected" });
    }

    // Update booking status to approved
    booking.status = "approved";
    await booking.save();

    res.status(200).json({
      message: "Booking approved successfully",
      booking,
    });
  } catch (error) {
    console.error("Error approving booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Reject booking
const rejectBooking = async (req, res) => {
  try {
    const { bookingId } = req.params; // Get booking ID from params

    // Validate bookingId
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ error: "Invalid booking ID" });
    }

    // Find booking by ID
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // If the booking is already approved or rejected, prevent changes
    if (booking.status === "approved") {
      return res.status(400).json({ error: "Booking already approved" });
    }
    if (booking.status === "rejected") {
      return res.status(400).json({ error: "Booking already rejected" });
    }

    // Update booking status to rejected
    booking.status = "rejected";
    await booking.save();

    res.status(200).json({
      message: "Booking rejected successfully",
      booking,
    });
  } catch (error) {
    console.error("Error rejecting booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllBookings = async (req, res) => {
  try {
    // Get the 'status' query parameter from the request
    const { status } = req.query;

    // If a status is provided, filter the bookings by the status
    let filter = {};
    if (status) {
      filter.status = status;  // e.g., 'pending', 'confirmed', 'canceled'
    }

    // Find bookings with the filter applied
    const bookings = await Booking.find(filter);

    // Check if bookings are empty and send an appropriate message
    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for the specified status." });
    }

    // If bookings are found, send them in the response
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  bookEquipment,
  getAllBookings,
  approveBooking,
  rejectBooking,
};
