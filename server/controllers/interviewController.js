import Interview from '../models/Interview.js';

// Get all interviews
export const getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching interviews',
      error: error.message
    });
  }
};

// Get interview by ID
export const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      return res.status(404).json({
        success: false,
        message: 'Interview not found'
      });
    }
    res.status(200).json({
      success: true,
      data: interview
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching interview',
      error: error.message
    });
  }
};

// Create new interview
export const createInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    const savedInterview = await interview.save();
    res.status(201).json({
      success: true,
      message: 'Interview created successfully',
      data: savedInterview
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating interview',
      error: error.message
    });
  }
};

// Update interview
export const updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!interview) {
      return res.status(404).json({
        success: false,
        message: 'Interview not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Interview updated successfully',
      data: interview
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating interview',
      error: error.message
    });
  }
};

// Delete interview (soft delete)
export const deleteInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!interview) {
      return res.status(404).json({
        success: false,
        message: 'Interview not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Interview deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting interview',
      error: error.message
    });
  }
};

// Get interviews by category
export const getInterviewsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const interviews = await Interview.find({ 
      category: category, 
      isActive: true 
    }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching interviews by category',
      error: error.message
    });
  }
};

// Search interviews
export const searchInterviews = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const interviews = await Interview.find({
      $and: [
        { isActive: true },
        {
          $or: [
            { title: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } },
            { speaker: { $regex: q, $options: 'i' } },
            { tags: { $in: [new RegExp(q, 'i')] } }
          ]
        }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: interviews.length,
      data: interviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching interviews',
      error: error.message
    });
  }
};
