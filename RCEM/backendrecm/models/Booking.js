const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student', // Reference to the User model
    required: true 
  },
  equipmentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Equipment', // Reference to the Equipment model
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true, 
    min: 1 // Ensure at least 1 item is selected
  },
  date: { 
    type: String, 
    required: false 
  },
  time: {   
    type: String, // Time stored as a string (e.g., '16:00')
    required: false 
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  returnBy: { 
    type: Date, 
    required: false 
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;