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

// GET lecture by ID
router.get('/:id', getLectureById);

// POST create new lecture
router.post('/', createLecture);

// PUT update lecture
router.put('/:id', updateLecture);

// DELETE lecture (soft delete)
router.delete('/:id', deleteLecture);

// GET lectures by category
router.get('/category/:category', getLecturesByCategory);

// GET search lectures
router.get('/search', searchLectures);

export default router;
