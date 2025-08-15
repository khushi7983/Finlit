import express from 'express';
import Fraternity from '../models/Fraternity.js';

const router = express.Router();

// GET all active fraternity members (sorted by order)
router.get('/', async (req, res) => {
  try {
    const members = await Fraternity.find({ active: true }).sort({ order: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET featured fraternity members only
router.get('/featured', async (req, res) => {
  try {
    const members = await Fraternity.find({ active: true, featured: true }).sort({ order: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new fraternity member
router.post('/', async (req, res) => {
  try {
    const member = new Fraternity(req.body);
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
