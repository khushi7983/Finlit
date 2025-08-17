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

// GET interview by ID
router.get('/:id', getInterviewById);

// POST create new interview
router.post('/', createInterview);

// PUT update interview
router.put('/:id', updateInterview);

// DELETE interview (soft delete)
router.delete('/:id', deleteInterview);

// GET interviews by category
router.get('/category/:category', getInterviewsByCategory);

// GET search interviews
router.get('/search', searchInterviews);

export default router;
