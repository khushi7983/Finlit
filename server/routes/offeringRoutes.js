import express from 'express';
import Offering from '../models/Offering.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const offerings = await Offering.find();
    res.json(offerings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
