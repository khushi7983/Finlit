import Hero from '../models/Hero.js';

// @desc    Get hero data
// @route   GET /api/hero
// @access  Public
export const getHero = async (req, res) => {
  try {
    console.log('Fetching hero data...');
    
    // First try to find any hero data (without isActive filter)
    let hero = await Hero.findOne().sort({ createdAt: -1 });
    
    console.log('Found hero data:', hero ? 'Yes' : 'No');
    
    // If no hero data exists, create default data
    if (!hero) {
      console.log('Creating default hero data...');
      const defaultHeroData = Hero.getDefaultHero();
      hero = await Hero.create(defaultHeroData);
      console.log('Default hero data created:', hero._id);
    }
    
    console.log('Returning hero data with ID:', hero._id);
    
    res.status(200).json({
      success: true,
      data: hero
    });
  } catch (error) {
    console.error('Error fetching hero data:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching hero data',
      error: error.message
    });
  }
};

// @desc    Create new hero data
// @route   POST /api/hero
// @access  Private (Admin only)
export const createHero = async (req, res) => {
  try {
    const hero = await Hero.create(req.body);
    
    res.status(201).json({
      success: true,
      data: hero
    });
  } catch (error) {
    console.error('Error creating hero data:', error);
    res.status(400).json({
      success: false,
      message: 'Error creating hero data',
      error: error.message
    });
  }
};

// @desc    Update hero data
// @route   PUT /api/hero/:id
// @access  Private (Admin only)
export const updateHero = async (req, res) => {
  try {
    const { id } = req.params;
    
    const hero = await Hero.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!hero) {
      return res.status(404).json({
        success: false,
        message: 'Hero data not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: hero
    });
  } catch (error) {
    console.error('Error updating hero data:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating hero data',
      error: error.message
    });
  }
};

// @desc    Delete hero data
// @route   DELETE /api/hero/:id
// @access  Private (Admin only)
export const deleteHero = async (req, res) => {
  try {
    const { id } = req.params;
    
    const hero = await Hero.findByIdAndDelete(id);
    
    if (!hero) {
      return res.status(404).json({
        success: false,
        message: 'Hero data not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Hero data deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting hero data:', error);
    res.status(400).json({
      success: false,
      message: 'Error deleting hero data',
      error: error.message
    });
  }
};

// @desc    Get all hero data (for admin)
// @route   GET /api/hero/all
// @access  Private (Admin only)
export const getAllHero = async (req, res) => {
  try {
    console.log('Fetching all hero data...');
    const heroes = await Hero.find().sort({ createdAt: -1 });
    
    console.log('Total heroes found:', heroes.length);
    heroes.forEach((hero, index) => {
      console.log(`Hero ${index + 1}:`, {
        id: hero._id,
        title: hero.title,
        isActive: hero.isActive,
        createdAt: hero.createdAt
      });
    });
    
    res.status(200).json({
      success: true,
      count: heroes.length,
      data: heroes
    });
  } catch (error) {
    console.error('Error fetching all hero data:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching all hero data',
      error: error.message
    });
  }
};

// @desc    Toggle hero active status
// @route   PATCH /api/hero/:id/toggle
// @access  Private (Admin only)
export const toggleHeroStatus = async (req, res) => {
  try {
    const { id } = req.params;
    
    const hero = await Hero.findById(id);
    
    if (!hero) {
      return res.status(404).json({
        success: false,
        message: 'Hero data not found'
      });
    }
    
    // Toggle the active status
    hero.isActive = !hero.isActive;
    await hero.save();
    
    res.status(200).json({
      success: true,
      data: hero
    });
  } catch (error) {
    console.error('Error toggling hero status:', error);
    res.status(400).json({
      success: false,
      message: 'Error toggling hero status',
      error: error.message
    });
  }
};

// @desc    Debug database connection and collection
// @route   GET /api/hero/debug
// @access  Public
export const debugHero = async (req, res) => {
  try {
    console.log('=== HERO DEBUG INFO ===');
    
    // Check if model is connected
    console.log('Hero model name:', Hero.modelName);
    console.log('Hero collection name:', Hero.collection.name);
    
    // Check database connection
    const dbState = Hero.db.readyState;
    console.log('Database ready state:', dbState);
    
    // Try to count documents
    const count = await Hero.countDocuments();
    console.log('Total documents in heroes collection:', count);
    
    // List all collections
    const collections = await Hero.db.listCollections().toArray();
    console.log('All collections:', collections.map(c => c.name));
    
    // Try to find any document
    const anyDoc = await Hero.findOne();
    console.log('Any document found:', anyDoc ? 'Yes' : 'No');
    
    res.status(200).json({
      success: true,
      debug: {
        modelName: Hero.modelName,
        collectionName: Hero.collection.name,
        dbReadyState: dbState,
        documentCount: count,
        collections: collections.map(c => c.name),
        anyDocumentFound: !!anyDoc
      }
    });
  } catch (error) {
    console.error('Debug error:', error);
    res.status(500).json({
      success: false,
      message: 'Debug error',
      error: error.message
    });
  }
};
