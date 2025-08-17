import Lecture from '../models/Lecture.js';

// Get all lectures
export const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: lectures.length,
      data: lectures
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching lectures',
      error: error.message
    });
  }
};

// Get lecture by ID
export const getLectureById = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({
        success: false,
        message: 'Lecture not found'
      });
    }
    res.status(200).json({
      success: true,
      data: lecture
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching lecture',
      error: error.message
    });
  }
};

// Create new lecture
export const createLecture = async (req, res) => {
  try {
    const lecture = new Lecture(req.body);
    const savedLecture = await lecture.save();
    res.status(201).json({
      success: true,
      message: 'Lecture created successfully',
      data: savedLecture
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating lecture',
      error: error.message
    });
  }
};

// Update lecture
export const updateLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!lecture) {
      return res.status(404).json({
        success: false,
        message: 'Lecture not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Lecture updated successfully',
      data: lecture
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating lecture',
      error: error.message
    });
  }
};

// Delete lecture (soft delete)
export const deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!lecture) {
      return res.status(404).json({
        success: false,
        message: 'Lecture not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Lecture deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting lecture',
      error: error.message
    });
  }
};

// Get lectures by category
export const getLecturesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const lectures = await Lecture.find({ 
      category: category, 
      isActive: true 
    }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: lectures.length,
      data: lectures
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching lectures by category',
      error: error.message
    });
  }
};

// Search lectures
export const searchLectures = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const lectures = await Lecture.find({
      $and: [
        { isActive: true },
        {
          $or: [
            { title: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } },
            { instructor: { $regex: q, $options: 'i' } },
            { tags: { $in: [new RegExp(q, 'i')] } }
          ]
        }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: lectures.length,
      data: lectures
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching lectures',
      error: error.message
    });
  }
};
