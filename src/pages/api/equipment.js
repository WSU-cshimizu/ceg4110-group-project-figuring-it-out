import dbConnect from '../../lib/mongodb';
import Equipment from '../../models/Equipment';

export default async function handler(req, res) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const equipment = await Equipment.find({})
                    .populate('bookedBy')
                    .populate('linkedDamageReport');
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
}
