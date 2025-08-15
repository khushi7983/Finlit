import express from 'express';
import MediaPresence from '../models/MediaPresence.js';

const router = express.Router();

// GET all active media presence types (sorted by order)
router.get('/', async (req, res) => {
  try {
    const mediaTypes = await MediaPresence.find({ active: true }).sort({ order: 1 });
    res.json(mediaTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET featured media presence types only
router.get('/featured', async (req, res) => {
  try {
    const mediaTypes = await MediaPresence.find({ active: true, featured: true }).sort({ order: 1 });
    res.json(mediaTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new media presence type
router.post('/', async (req, res) => {
  try {
    const mediaType = new MediaPresence(req.body);
    const newMediaType = await mediaType.save();
    res.status(201).json(newMediaType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
