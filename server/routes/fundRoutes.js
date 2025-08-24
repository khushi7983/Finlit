import express from 'express';
import {
  getFundData,
  createFundData,
  updateFundData,
  deleteFundData,
  getFundDataById,
  updateFundSection
} from '../controllers/fundController.js';

const router = express.Router();

// Get fund data (public route)
router.get('/', getFundData);

// Get fund data by ID (public route)
router.get('/:id', getFundDataById);

// Create new fund data (admin route)
router.post('/', createFundData);

// Update fund data (admin route)
router.put('/:id', updateFundData);

// Update specific section (admin route)
router.patch('/:id/section', updateFundSection);

// Delete fund data (admin route)
router.delete('/:id', deleteFundData);

export default router;
