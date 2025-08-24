import express from 'express';
import {
    createHero,
    debugHero,
    deleteHero,
    getAllHero,
    getHero,
    toggleHeroStatus,
    updateHero
} from '../controllers/heroController.js';

const router = express.Router();

// Public routes
router.get('/', getHero);
router.get('/debug', debugHero);

// Admin routes (you can add authentication middleware here later)
router.post('/', createHero);
router.put('/:id', updateHero);
router.delete('/:id', deleteHero);
router.get('/all', getAllHero);
router.patch('/:id/toggle', toggleHeroStatus);

export default router;
