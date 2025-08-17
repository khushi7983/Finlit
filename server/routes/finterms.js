import express from 'express';
import mongoose from 'mongoose'; // Add this import
import upload from '../middleware/upload.js';
import FinTerm from '../models/FinTerm.js'; // Add this import
import {
  getAllFinTerms,
  getFinTermById,
  createFinTerm,
  updateFinTerm,
  deleteFinTerm,
  getCategories
} from '../controllers/finTermController.js';

const router = express.Router();

// ADD THIS DEBUG ROUTE FIRST
router.get('/debug', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    // Test different collection names
    const testResults = {};
    for (const collectionName of collectionNames) {
      const count = await mongoose.connection.db.collection(collectionName).countDocuments();
      testResults[collectionName] = count;
    }
    
    res.json({
      database: mongoose.connection.db.databaseName,
      collections: collectionNames,
      modelCollection: FinTerm.collection.name,
      documentsPerCollection: testResults,
      totalInModel: await FinTerm.countDocuments({})
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET /api/finterms - Get all financial terms
router.get('/', getAllFinTerms);

// GET /api/finterms/categories - Get all categories
router.get('/categories', getCategories);

// GET /api/finterms/:id - Get single financial term
router.get('/:id', getFinTermById);

// POST /api/finterms - Create new financial term
router.post('/', upload.single('image'), createFinTerm);

// PUT /api/finterms/:id - Update financial term
router.put('/:id', upload.single('image'), updateFinTerm);

// DELETE /api/finterms/:id - Delete financial term
router.delete('/:id', deleteFinTerm);

export default router;
