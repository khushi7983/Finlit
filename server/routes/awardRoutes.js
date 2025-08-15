import express from 'express';
import { 
  getAllAwards, 
  getAwardById, 
  createAward, 
  updateAward, 
  deleteAward 
} from '../controllers/awardController.js';

const router = express.Router();

// Public routes
router.get('/', getAllAwards);
router.get('/:id', getAwardById);

// Admin routes (you can add middleware here later for authentication)
router.post('/', createAward);
router.put('/:id', updateAward);
router.delete('/:id', deleteAward);

export default router;
