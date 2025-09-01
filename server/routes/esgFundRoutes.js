import express from 'express';
import mongoose from 'mongoose';
import {
  getAllESGFunds,
  getAllESGFundsAdmin,
  getESGFundById,
  createESGFund,
  updateESGFund,
  deleteESGFund,
  toggleActiveStatus,
  reorderESGFunds
} from '../controllers/esgFundController.js';

const router = express.Router();

// Debug route to check database connection
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
      modelCollection: 'ESGFund',
      documentsPerCollection: testResults
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Public routes
// GET /api/esg-funds - Get all active ESG funds
router.get('/', getAllESGFunds);

// GET /api/esg-funds/:id - Get single ESG fund
router.get('/:id', getESGFundById);

// Admin routes
// GET /api/esg-funds/admin/all - Get all ESG funds (including inactive)
router.get('/admin/all', getAllESGFundsAdmin);

// POST /api/esg-funds - Create new ESG fund
router.post('/', createESGFund);

// PUT /api/esg-funds/:id - Update ESG fund
router.put('/:id', updateESGFund);

// DELETE /api/esg-funds/:id - Delete ESG fund
router.delete('/:id', deleteESGFund);

// PATCH /api/esg-funds/:id/toggle - Toggle active status
router.patch('/:id/toggle', toggleActiveStatus);

// POST /api/esg-funds/reorder - Reorder ESG funds
router.post('/reorder', reorderESGFunds);

export default router;
