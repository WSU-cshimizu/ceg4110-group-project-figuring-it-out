const adminModel = require("../models/User.js");
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
    const existingUser = await adminModel.findOne({ username: username });
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

module.exports = { signUp, login };
