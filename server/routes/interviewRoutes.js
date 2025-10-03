import express from 'express';
import {
  getAllInterviews,
  getInterviewById,
  createInterview,
  updateInterview,
  deleteInterview,
  getInterviewsByCategory,
  searchInterviews
} from '../controllers/interviewController.js';

const router = express.Router();

// GET all interviews
router.get('/', getAllInterviews);

// GET interviews by category (must come before /:id)
router.get('/category/:category', getInterviewsByCategory);

// GET search interviews (must come before /:id)
router.get('/search', searchInterviews);

// GET interview by ID (must come after specific routes)
router.get('/:id', getInterviewById);

// POST create new interview
router.post('/', createInterview);

// PUT update interview
router.put('/:id', updateInterview);

// DELETE interview (soft delete)
router.delete('/:id', deleteInterview);

export default router;
