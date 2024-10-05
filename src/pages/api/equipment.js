import dbConnect from '../../lib/mongodb';
import Equipment from '../../models/Equipment';
import User from '../../models/User';
import DamageReport from '../../models/DamageReport';

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db();

        const { method } = req;

        switch (method) {
            case 'GET':
                try {
                    const equipment = await Equipment.find({}).toArray();
                        //.populate('bookedBy')
                        //.populate('linkedDamageReport');
                    res.status(200).json({ success: true, data: equipment });
                } catch (error) {
                    res.status(400).json({ success: false, error: error.message });
                }
                break;

            case 'POST':
                try {
                    const equipment = await Equipment.create(req.body);
                    res.status(201).json({ success: true, data: equipment });
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
