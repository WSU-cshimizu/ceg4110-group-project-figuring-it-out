const express = require("express");
const studentRouter = express.Router();

const {} = require("../controllers/studentController");
const { getAllEquipments } = require("../controllers/adminController");

studentRouter.get("/allEquipments", getAllEquipments);
// studentRouter.get("/bookEquipment", getEquipmentById);
// studentRouter.put("/reportEquipment", updateEquipment);

module.exports = studentRouter;
