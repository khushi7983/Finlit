import express from 'express';
import {
  getAllLectures,
  getLectureById,
  createLecture,
  updateLecture,
  deleteLecture,
  getLecturesByCategory,
  searchLectures
} from '../controllers/lectureController.js';

const router = express.Router();

// GET all lectures
router.get('/', getAllLectures);

// GET lectures by category (must come before /:id)
router.get('/category/:category', getLecturesByCategory);

// GET search lectures (must come before /:id)
router.get('/search', searchLectures);

// GET lecture by ID (must come after specific routes)
router.get('/:id', getLectureById);

// POST create new lecture
router.post('/', createLecture);

// PUT update lecture
router.put('/:id', updateLecture);

// DELETE lecture (soft delete)
router.delete('/:id', deleteLecture);

export default router;
