import dbConnect from '../../lib/mongodb';
import DamageReport from '../../models/DamageReport';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const damageReports = await DamageReport.find({})
                    .populate('linkedEquipment')
                    .populate('reportingUser')
                    .populate('lastUser');
                res.status(200).json({ success: true, data: damageReports });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        case 'POST':
            try {
                const damageReport = await DamageReport.create(req.body);
                res.status(201).json({ success: true, data: damageReport });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}
