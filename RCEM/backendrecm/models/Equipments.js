const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  equipmentID: { type: String, required: true },
  itemCount: { type: String, required: true },
  availabilityStatus: { type: Boolean, default: true }, // true if available
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;
