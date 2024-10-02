import mongoose from 'mongoose';

const DamageReportSchema = new mongoose.Schema({
    damageReason: {
        type: String,
        required: true,
    },
    linkedEquipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipment',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    reportingUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    lastUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

export default mongoose.models.DamageReport || mongoose.model('DamageReport', DamageReportSchema);
