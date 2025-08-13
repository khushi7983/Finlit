import express from 'express';
import FAQ from '../models/FAQ.js';

const router = express.Router();

// Get all active FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find({ active: true }).sort({ order: 1, createdAt: -1 });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get FAQs by category
router.get('/category/:category', async (req, res) => {
  try {
    const faqs = await FAQ.find({ 
      category: req.params.category, 
      active: true 
    }).sort({ order: 1, createdAt: -1 });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new FAQ
router.post('/', async (req, res) => {
  try {
    const faq = new FAQ(req.body);
    const savedFAQ = await faq.save();
    res.status(201).json(savedFAQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
