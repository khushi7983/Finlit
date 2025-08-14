import express from 'express';
import Video from '../models/Video.js';

const router = express.Router();

// Get all active videos
router.get('/', async (req, res) => {
  try {
    const { type, category } = req.query;
    let query = { active: true };
    
    if (type) {
      query.type = type;
    }
    
    if (category) {
      query.category = category;
    }
    
    const videos = await Video.find(query).sort({ order: 1, createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get videos by type
router.get('/type/:type', async (req, res) => {
  try {
    const videos = await Video.find({
      type: req.params.type,
      active: true
    }).sort({ order: 1, createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get videos by category
router.get('/category/:category', async (req, res) => {
  try {
    const videos = await Video.find({
      category: req.params.category,
      active: true
    }).sort({ order: 1, createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured videos
router.get('/featured', async (req, res) => {
  try {
    const videos = await Video.find({
      featured: true,
      active: true
    }).sort({ order: 1, createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new video
router.post('/', async (req, res) => {
  try {
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
