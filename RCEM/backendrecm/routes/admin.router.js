const express = require("express");
const adminRouter = express.Router();

const { 
    getAllEquipments,
    addEquipment, 
    getEquipmentById, 
    updateEquipment, 
    deleteEquipment 
} = require('../controllers/adminController');


adminRouter.post("/addEquipment", addEquipment);
adminRouter.get("/allEquipments", getAllEquipments);
adminRouter.get("/equipmentByID", getEquipmentById);
adminRouter.post("/updateEquipment", updateEquipment);
adminRouter.delete("/deleteEquipment", deleteEquipment);

module.exports = adminRouter;
