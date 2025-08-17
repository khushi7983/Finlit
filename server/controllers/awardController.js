import Award from '../models/Award.js';

// Get all active awards
export const getAllAwards = async (req, res) => {
  try {
    const awards = await Award.find({ isActive: true })
      .sort({ order: 1, year: -1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: awards.length,
      data: awards
    });
  } catch (error) {
    console.error('Error fetching awards:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching awards',
      error: error.message
    });
  }
};

// Get single award by ID
export const getAwardById = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    
    if (!award) {
      return res.status(404).json({
        success: false,
        message: 'Award not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: award
    });
  } catch (error) {
    console.error('Error fetching award:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching award',
      error: error.message
    });
  }
};

// Create new award (admin only)
export const createAward = async (req, res) => {
  try {
    const award = await Award.create(req.body);
    
    res.status(201).json({
      success: true,
      data: award
    });
  } catch (error) {
    console.error('Error creating award:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating award',
      error: error.message
    });
  }
};

// Update award (admin only)
export const updateAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!award) {
      return res.status(404).json({
        success: false,
        message: 'Award not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: award
    });
  } catch (error) {
    console.error('Error updating award:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating award',
      error: error.message
    });
  }
};

// Delete award (admin only)
export const deleteAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndDelete(req.params.id);
    
    if (!award) {
      return res.status(404).json({
        success: false,
        message: 'Award not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Award deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting award:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting award',
      error: error.message
    });
  }
};
