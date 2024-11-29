const express = require("express");
const {
  bookEquipment,
  approveBooking,
  rejectBooking,
} = require("../controllers/equipmentController");
const equipmentRouter = express.Router();

equipmentRouter.post("/bookEquipment", bookEquipment);

// Admin routes to approve/reject booking
equipmentRouter.put("/approve/:bookingId", approveBooking);
equipmentRouter.put("/reject/:bookingId", rejectBooking);

module.exports = equipmentRouter;
