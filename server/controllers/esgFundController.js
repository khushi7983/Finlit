import ESGFund from '../models/ESGFund.js';
import mongoose from 'mongoose';

// Get all ESG funds
export const getAllESGFunds = async (req, res) => {
  try {
    console.log('🔍 API called: /api/esg-funds');
    console.log('📊 Database name:', mongoose.connection.db.databaseName);
    console.log('📋 Collection name:', ESGFund.collection.name);
    
    const { search, limit, page } = req.query;
    console.log('🔎 Query params:', { search, limit, page });
    
    // Build query
    let query = { isActive: true };
    
    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { subtitle: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    console.log('🔍 Final query:', JSON.stringify(query, null, 2));
    
    // Pagination
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 20;
    const skip = (pageNum - 1) * limitNum;
    
    const esgFunds = await ESGFund.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limitNum);
    
    console.log(`✅ Found ${esgFunds.length} ESG funds`);
    
    const total = await ESGFund.countDocuments(query);
    
    res.json({
      success: true,
      data: esgFunds,
      pagination: {
        current: pageNum,
        total: Math.ceil(total / limitNum),
        count: esgFunds.length,
        totalItems: total
      }
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching ESG funds',
      error: error.message
    });
  }
};

// Get all ESG funds (admin - including inactive)
export const getAllESGFundsAdmin = async (req, res) => {
  try {
    console.log('🔍 Admin API called: /api/esg-funds/admin');
    
    const { search, limit, page } = req.query;
    
    // Build query (no isActive filter for admin)
    let query = {};
    
    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { subtitle: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Pagination
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 20;
    const skip = (pageNum - 1) * limitNum;
    
    const esgFunds = await ESGFund.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limitNum);
    
    const total = await ESGFund.countDocuments(query);
    
    res.json({
      success: true,
      data: esgFunds,
      pagination: {
        current: pageNum,
        total: Math.ceil(total / limitNum),
        count: esgFunds.length,
        totalItems: total
      }
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching ESG funds',
      error: error.message
    });
  }
};

// Get single ESG fund
export const getESGFundById = async (req, res) => {
  try {
    const esgFund = await ESGFund.findById(req.params.id);
    
    if (!esgFund) {
      return res.status(404).json({
        success: false,
        message: 'ESG fund not found'
      });
    }
    
    res.json({
      success: true,
      data: esgFund
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching ESG fund',
      error: error.message
    });
  }
};

// Create new ESG fund
export const createESGFund = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      description,
      icon,
      color,
      bgColor,
      examples,
      impact,
      order
    } = req.body;
    
    // Validate required fields
    if (!title || !subtitle || !description || !icon || !color || !bgColor || !impact) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }
    
    // Create new ESG fund
    const newESGFund = new ESGFund({
      title,
      subtitle,
      description,
      icon,
      color,
      bgColor,
      examples: examples || [],
      impact,
      order: order || 0
    });
    
    const savedESGFund = await newESGFund.save();
    
    res.status(201).json({
      success: true,
      message: 'ESG fund created successfully',
      data: savedESGFund
    });
  } catch (error) {
    console.error('❌ Error creating ESG fund:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating ESG fund',
      error: error.message
    });
  }
};

// Update ESG fund
export const updateESGFund = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // Remove fields that shouldn't be updated
    delete updateData._id;
    delete updateData.createdAt;
    
    const updatedESGFund = await ESGFund.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedESGFund) {
      return res.status(404).json({
        success: false,
        message: 'ESG fund not found'
      });
    }
    
    res.json({
      success: true,
      message: 'ESG fund updated successfully',
      data: updatedESGFund
    });
  } catch (error) {
    console.error('❌ Error updating ESG fund:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating ESG fund',
      error: error.message
    });
  }
};

// Delete ESG fund
export const deleteESGFund = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedESGFund = await ESGFund.findByIdAndDelete(id);
    
    if (!deletedESGFund) {
      return res.status(404).json({
        success: false,
        message: 'ESG fund not found'
      });
    }
    
    res.json({
      success: true,
      message: 'ESG fund deleted successfully',
      data: deletedESGFund
    });
  } catch (error) {
    console.error('❌ Error deleting ESG fund:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting ESG fund',
      error: error.message
    });
  }
};

// Toggle active status
export const toggleActiveStatus = async (req, res) => {
  try {
    const { id } = req.params;
    
    const esgFund = await ESGFund.findById(id);
    
    if (!esgFund) {
      return res.status(404).json({
        success: false,
        message: 'ESG fund not found'
      });
    }
    
    esgFund.isActive = !esgFund.isActive;
    const updatedESGFund = await esgFund.save();
    
    res.json({
      success: true,
      message: `ESG fund ${updatedESGFund.isActive ? 'activated' : 'deactivated'} successfully`,
      data: updatedESGFund
    });
  } catch (error) {
    console.error('❌ Error toggling ESG fund status:', error);
    res.status(500).json({
      success: false,
      message: 'Error toggling ESG fund status',
      error: error.message
    });
  }
};

// Reorder ESG funds
export const reorderESGFunds = async (req, res) => {
  try {
    const { orders } = req.body; // Array of { id, order }
    
    if (!Array.isArray(orders)) {
      return res.status(400).json({
        success: false,
        message: 'Orders must be an array'
      });
    }
    
    // Update each ESG fund with new order
    const updatePromises = orders.map(({ id, order }) =>
      ESGFund.findByIdAndUpdate(id, { order }, { new: true })
    );
    
    const updatedESGFunds = await Promise.all(updatePromises);
    
    res.json({
      success: true,
      message: 'ESG funds reordered successfully',
      data: updatedESGFunds
    });
  } catch (error) {
    console.error('❌ Error reordering ESG funds:', error);
    res.status(500).json({
      success: false,
      message: 'Error reordering ESG funds',
      error: error.message
    });
  }
};
