import express from 'express';
import Journey from '../models/Journey.js';

const router = express.Router();

// Get all active journey items
router.get('/', async (req, res) => {
  try {
    const journeyItems = await Journey.find({ active: true }).sort({ order: 1, createdAt: -1 });
    res.json(journeyItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new journey item
router.post('/', async (req, res) => {
  try {
    const journeyItem = new Journey(req.body);
    const savedJourneyItem = await journeyItem.save();
    res.status(201).json(savedJourneyItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
