import Podcast from '../models/Podcast.js';

// Get all podcasts
export const getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: podcasts.length,
      data: podcasts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching podcasts',
      error: error.message
    });
  }
};

// Get podcast by ID
export const getPodcastById = async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    if (!podcast) {
      return res.status(404).json({
        success: false,
        message: 'Podcast not found'
      });
    }
    res.status(200).json({
      success: true,
      data: podcast
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching podcast',
      error: error.message
    });
  }
};

// Create new podcast
export const createPodcast = async (req, res) => {
  try {
    const podcast = new Podcast(req.body);
    const savedPodcast = await podcast.save();
    res.status(201).json({
      success: true,
      message: 'Podcast created successfully',
      data: savedPodcast
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating podcast',
      error: error.message
    });
  }
};

// Update podcast
export const updatePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!podcast) {
      return res.status(404).json({
        success: false,
        message: 'Podcast not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Podcast updated successfully',
      data: podcast
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating podcast',
      error: error.message
    });
  }
};

// Delete podcast (soft delete)
export const deletePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!podcast) {
      return res.status(404).json({
        success: false,
        message: 'Podcast not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Podcast deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting podcast',
      error: error.message
    });
  }
};

// Get podcasts by category
export const getPodcastsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const podcasts = await Podcast.find({ 
      category: category, 
      isActive: true 
    }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: podcasts.length,
      data: podcasts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching podcasts by category',
      error: error.message
    });
  }
};

// Search podcasts
export const searchPodcasts = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const podcasts = await Podcast.find({
      $and: [
        { isActive: true },
        {
          $or: [
            { title: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } },
            { host: { $regex: q, $options: 'i' } },
            { tags: { $in: [new RegExp(q, 'i')] } }
          ]
        }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: podcasts.length,
      data: podcasts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error searching podcasts',
      error: error.message
    });
  }
};
