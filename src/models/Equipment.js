import mongoose from 'mongoose';

const EquipmentSchema = new mongoose.Schema({
    equipmentName: {
        type: String,
        required: true,
    },
    equipmentType: {
        type: String,
        required: true,
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    bookedDate: {
        type: Date,
    },
    bDamaged: {
        type: Boolean,
        default: false,
    },
    linkedDamageReport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DamageReport',
    },
});

export default mongoose.models.Equipment || mongoose.model('Equipment', EquipmentSchema);
