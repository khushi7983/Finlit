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

// GET podcast by ID
router.get('/:id', getPodcastById);

// POST create new podcast
router.post('/', createPodcast);

// PUT update podcast
router.put('/:id', updatePodcast);

// DELETE podcast (soft delete)
router.delete('/:id', deletePodcast);

// GET podcasts by category
router.get('/category/:category', getPodcastsByCategory);

// GET search podcasts
router.get('/search', searchPodcasts);

export default router;
