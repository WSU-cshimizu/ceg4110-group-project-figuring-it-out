const express = require("express"); // Third-party module for building web applications
const mongoose = require("mongoose"); // Mongoose for MongoDB connection
require('dotenv').config(); // For environment variables

const app = express();
const port = 5000; // Define the port

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle requests
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });