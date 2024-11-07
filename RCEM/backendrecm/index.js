const express = require("express"); // Third-party module for building web applications
const mongoose = require("mongoose"); // Mongoose for MongoDB connection
require('dotenv').config(); // For environment variables
const cors = require("cors"); // Import cors

const app = express();
const port = 5000; // Define the port

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());
// Route to handle requests

app.use("/api", require("./routes/router"));


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
