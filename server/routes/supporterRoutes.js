import express from 'express';
import Supporter from '../models/Supporter.js';

const router = express.Router();

// Get all active supporters
router.get('/', async (req, res) => {
  try {
    const supporters = await Supporter.find({ active: true }).sort({ order: 1, createdAt: -1 });
    res.json(supporters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get supporters by category
router.get('/category/:category', async (req, res) => {
  try {
    const supporters = await Supporter.find({ 
      category: req.params.category, 
      active: true 
    }).sort({ order: 1, createdAt: -1 });
    res.json(supporters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new supporter
router.post('/', async (req, res) => {
  try {
    const supporter = new Supporter(req.body);
    const savedSupporter = await supporter.save();
    res.status(201).json(savedSupporter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
