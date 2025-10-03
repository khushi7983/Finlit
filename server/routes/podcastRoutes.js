import express from 'express';
import {
  getAllPodcasts,
  getPodcastById,
  createPodcast,
  updatePodcast,
  deletePodcast,
  getPodcastsByCategory,
  searchPodcasts
} from '../controllers/podcastController.js';

const router = express.Router();

// GET all podcasts
router.get('/', getAllPodcasts);

// GET podcasts by category (must come before /:id)
router.get('/category/:category', getPodcastsByCategory);

// GET search podcasts (must come before /:id)
router.get('/search', searchPodcasts);

// GET podcast by ID (must come after specific routes)
router.get('/:id', getPodcastById);

// POST create new podcast
router.post('/', createPodcast);

// PUT update podcast
router.put('/:id', updatePodcast);

// DELETE podcast (soft delete)
router.delete('/:id', deletePodcast);

export default router;
