const Booking = require("../models/Booking");
const Equipment = require("../models/Equipments");

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
      bookingDate.setHours(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]), 0)
    ); // Set start time from selected date and time

    let endDate = new Date(startDate);
    if (startDate.getDate() === new Date().getDate()) {
      endDate.setHours(18, 0, 0); // If booking for today, set to 6 PM today
    } else {
      endDate.setHours(18, 0, 0); // If not, set to 6 PM on the selected date
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
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    booking.status = "confirmed";
    await booking.save();

    return res.status(200).json({ message: "Booking approved." });
  } catch (error) {
    console.error("Error approving booking:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Reject booking
const rejectBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    booking.status = "canceled";
    await booking.save();

    return res.status(200).json({ message: "Booking rejected." });
  } catch (error) {
    console.error("Error rejecting booking:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  bookEquipment,
  approveBooking,
  rejectBooking,
};
