const damageReportSchema = new mongoose.Schema({
    equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    reportStatus: { type: String, enum: ['reported', 'in progress', 'resolved'], default: 'reported' },
    reportedAt: { type: Date, default: Date.now }
});

const DamageReport = mongoose.model('DamageReport', damageReportSchema);