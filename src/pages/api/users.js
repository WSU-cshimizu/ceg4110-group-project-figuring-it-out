import clientPromise from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
    try {
        // Await the MongoDB connection
        const client = await clientPromise;
        const db = client.db();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await db.collection('users').find({}).toArray(); // Use collection from MongoDB
                res.status(200).json({ success: true, data: users });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;

        case 'POST':
            try {
                const newUser = req.body;
                const result = await db.collection('users').insertOne(newUser); // Insert a new user
                res.status(201).json({ success: true, data: result });
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
