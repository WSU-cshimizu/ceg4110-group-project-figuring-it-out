 const adminModel = require("../models/User.js");
const equipment = require('../models/Equipments.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SERCRET_KEY = "RCEM";

const signUp = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await adminModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this username",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const createdUser = await adminModel.create({
      username: username,
      password: hashedPassword,
      role: role,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: createdUser,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await adminModel.findOne({
      username: username,
      role: role,
    });
    if (!existingUser) {
      return res.json({ message: "User Not Found !!", success: false });
    }
    const authorizedUser = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!authorizedUser) {
      return res.json({ message: "Credentials Not Valid ", success: false });
    }

    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      SERCRET_KEY
    );
    res.json({ success: true, data: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false });
  }
};

const reset = async (req, res) => {
  const { username, password, newpassword } = req.body;

  try {
    const existingUser = await adminModel.findOne({ username: username });
    const authorizedUser = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (authorizedUser && existingUser) {
      const hasedPassword = await bcrypt.hash(newpassword, 10);
      await adminModel.findOneAndUpdate(
        { username: username },
        {
          $set: {
            password: hasedPassword,
          },
        }
      );
      res.json({ success: true, message: "Updated Succeessfully" });
    }
    if (!authorizedUser) {
      return res.json({
        message: "Provided Password Is Incorrect",
        success: false,
      });
    }
    if (!existingUser) {
      return res.json({
        message: "username not found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: error.message, success: false });
  }
};


const getAllEquipments = async (req, res) => {
  try {
    const equipments = await equipment.find();

    res.status(200).json({
      success: true,
      data: equipments
    });

  } catch (error) {
    console.error('Error fetching equipments:', error);

    res.status(500).json({
      success: false,
      messsage: "Server Error: Unable to fetch equipments"
    });
  }

};

const getEquipmentById = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Equipment ID is required.'
      });
    }

    const eqpmnt = await equipment.findById(id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Equipment not found.'
      });
    }

    res.status(200).json({
      success: true,
      data: eqpmnt
    });

  } catch(error){
    console.error('Error Fetching equipment by ID: ', error);

    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to fetch equipment by ID.'
    });
  }
};

const addEquipment = async (req, res) => {

  try {
    const { name, description, availabilityStatus } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name and description of the equipment.'
      });
    }

    const newEquipment = new equipment({
      name,
      description,
      availabilityStatus: availabilityStatus !== undefined ? availabilityStatus : true
    });

    const savedEquipment = await newEquipment.save();

    res.status(201).json({
      success: true,
      data: savedEquipment
    });

  } catch (error) {
    console.error('Error adding equipment:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to add Equipment.'
    });

  }

};

const updateEquipment = async (req, res) => {

  try{
    const { id, name, description, availabilityStatus } = req.body;

    if(!id){
      return res.status(400).json({
        success: false,
        message: 'Equipment ID is required.'
      });
    }

    const updateEquipment = await equipment.findByIdAndUpdate(
      id, 
      {
        name,
        description,
        availabilityStatus,
        updatedAt: Date.now()
      }, 
      {new: true, runValidators: true}
    );

    res.status(200).json({
      success: true,
      data: updateEquipment
    });

  } catch (error){

    console.error('Error updating equipment:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to update equipment.'
    });

  }

}

const deleteEquipment = async (req, res) => {
  try{
    const { id } = req.query;

    if(!id){
      res.status(400).json({
        succes: false,
        message: 'Equipment ID is required.'
      });
    }

    const deletedEquipment = await equipment.findByIdAndDelete(id);

    if (!deletedEquipment) {
      return res.status(404).json({
        success: false,
        message: 'Equipment not found.'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Equipment deleted successfully.',
      data: deletedEquipment
    });

  } catch (error) {
    console.error('Error deleting equipment:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error: Unable to delete equipment.'
    });
  }

};



module.exports = { 
  signUp, 
  login, 
  reset, 
  getAllEquipments, 
  getEquipmentById,
  addEquipment,
  updateEquipment,
  deleteEquipment
};
