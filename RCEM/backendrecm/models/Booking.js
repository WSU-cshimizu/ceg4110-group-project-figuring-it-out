
const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'canceled'], default: 'confirmed' },
    createdAt: { type: Date, default: Date.now }
});


const Booking = mongoose.model('Booking', bookingSchema);