const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student"], default: "student" },
  //   profileImage: { type: String }, // URL or path to the profile image
  createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
