import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

// Get all active courses
router.get('/', async (req, res) => {
  try {
    const { category, keyword } = req.query;
    let query = { active: true };
    
    if (category) {
      query.category = category;
    }
    
    if (keyword && keyword !== 'All') {
      query.keywords = { $in: [new RegExp(keyword, 'i')] };
    }
    
    const courses = await Course.find(query).sort({ order: 1, createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get courses by category
router.get('/category/:category', async (req, res) => {
  try {
    const courses = await Course.find({
      category: req.params.category,
      active: true
    }).sort({ order: 1, createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured courses
router.get('/featured', async (req, res) => {
  try {
    const courses = await Course.find({
      featured: true,
      active: true
    }).sort({ order: 1, createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
