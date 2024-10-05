import dbConnect from '../../lib/mongodb';
import DamageReport from '../../models/DamageReport';
import User from '../../models/User';
import Equipment from '../../models/Equipment';

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db();

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
    } catch (error) {
        res.status(500).json({ success: false, error: 'Database connection failed' });
    }
}
