import FinTerm from '../models/FinTerm.js';
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all financial terms
export const getAllFinTerms = async (req, res) => {
  try {
    console.log('🔍 API called: /api/finterms');
    console.log('📊 Database name:', mongoose.connection.db.databaseName);
    console.log('📋 Collection name:', FinTerm.collection.name);
    
    const { category, search, limit, page } = req.query;
    console.log('🔎 Query params:', { category, search, limit, page });
    
    // STEP 1: Test if ANY documents exist
    const totalDocs = await FinTerm.countDocuments({});
    console.log('🔢 Total documents in collection (no filter):', totalDocs);
    
    // STEP 2: Test with sample document
    const sampleDoc = await FinTerm.findOne({});
    console.log('📄 Sample document:', sampleDoc?.title || 'No docs found');
    
    // STEP 3: Try without isActive filter first
    let query = {}; // Remove isActive filter temporarily
    
    // Filter by category
    if (category && category !== 'All') {
      query.category = category;
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    console.log('🔍 Final query:', JSON.stringify(query, null, 2));
    
    // Pagination
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 20;
    const skip = (pageNum - 1) * limitNum;
    
    const finTerms = await FinTerm.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limitNum);
    
    console.log(`✅ Found ${finTerms.length} terms`);
    
    const total = await FinTerm.countDocuments(query);
    
    // Don't modify image URLs since you're using frontend paths
    res.json({
      success: true,
      data: finTerms,
      pagination: {
        current: pageNum,
        total: Math.ceil(total / limitNum),
        count: finTerms.length,
        totalItems: total
      }
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching financial terms',
      error: error.message
    });
  }
};

// Get single financial term
export const getFinTermById = async (req, res) => {
  try {
    const finTerm = await FinTerm.findById(req.params.id);
    
    if (!finTerm) {
      return res.status(404).json({
        success: false,
        message: 'Financial term not found'
      });
    }
    
    res.json({
      success: true,
      data: finTerm
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching financial term',
      error: error.message
    });
  }
};

// Create new financial term
export const createFinTerm = async (req, res) => {
  try {
    const { title, category, description, image, order } = req.body;
    
    const finTerm = new FinTerm({
      title,
      category,
      description,
      image,
      order: order || 0,
      isActive: true
    });
    
    await finTerm.save();
    
    res.status(201).json({
      success: true,
      message: 'Financial term created successfully',
      data: finTerm
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating financial term',
      error: error.message
    });
  }
};

// Update financial term
export const updateFinTerm = async (req, res) => {
  try {
    const { title, category, description, image, order, isActive } = req.body;
    
    const finTerm = await FinTerm.findById(req.params.id);
    
    if (!finTerm) {
      return res.status(404).json({
        success: false,
        message: 'Financial term not found'
      });
    }
    
    // Update fields
    if (title) finTerm.title = title;
    if (category) finTerm.category = category;
    if (description) finTerm.description = description;
    if (image) finTerm.image = image;
    if (order !== undefined) finTerm.order = order;
    if (isActive !== undefined) finTerm.isActive = isActive;
    
    await finTerm.save();
    
    res.json({
      success: true,
      message: 'Financial term updated successfully',
      data: finTerm
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating financial term',
      error: error.message
    });
  }
};

// Delete financial term
export const deleteFinTerm = async (req, res) => {
  try {
    const finTerm = await FinTerm.findById(req.params.id);
    
    if (!finTerm) {
      return res.status(404).json({
        success: false,
        message: 'Financial term not found'
      });
    }
    
    await FinTerm.findByIdAndDelete(req.params.id);
    
    res.json({
      success: true,
      message: 'Financial term deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting financial term',
      error: error.message
    });
  }
};

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await FinTerm.distinct('category');
    res.json({
      success: true,
      data: ['All', ...categories]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
};
