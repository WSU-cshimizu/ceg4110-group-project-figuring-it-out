const equipment = require("../models/Equipments.js");

const getAllEquipments = async (req, res) => {
  try {
    const equipments = await equipment.find();

    res.status(200).json({
      success: true,
      data: equipments,
    });
  } catch (error) {
    console.error("Error fetching equipments:", error);

    res.status(500).json({
      success: false,
      messsage: "Server Error: Unable to fetch equipments",
    });
  }
};
