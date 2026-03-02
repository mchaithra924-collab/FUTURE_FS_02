const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lead = require('./models/Lead');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mini-crm';

async function seed() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB for seeding');

  const sample = [
    { name: 'Alice Johnson', email: 'alice@example.com', source: 'website', status: 'New', notes: 'Interested in pricing' },
    { name: 'Bob Smith', email: 'bob@example.com', source: 'referral', status: 'Contacted', notes: 'Call scheduled' },
    { name: 'Carol White', email: 'carol@example.com', source: 'instagram', status: 'Converted', notes: 'Paid' }
  ];

  try {
    await Lead.deleteMany({});
    const created = await Lead.insertMany(sample);
    console.log('Seeded leads:', created.length);
  } catch (err) {
    console.error('Seeding error:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected. Seed complete.');
    process.exit(0);
  }
}

seed();
