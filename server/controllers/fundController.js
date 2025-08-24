import Fund from '../models/Fund.js';

// Get all fund data
export const getFundData = async (req, res) => {
  try {
    const fundData = await Fund.findOne({ isActive: true }).sort({ order: 1 });
    
    if (!fundData) {
      return res.status(404).json({
        success: false,
        message: 'Fund data not found'
      });
    }

    res.status(200).json({
      success: true,
      data: fundData
    });
  } catch (error) {
    console.error('Error fetching fund data:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Create new fund data
export const createFundData = async (req, res) => {
  try {
    const fundData = new Fund(req.body);
    const savedData = await fundData.save();

    res.status(201).json({
      success: true,
      message: 'Fund data created successfully',
      data: savedData
    });
  } catch (error) {
    console.error('Error creating fund data:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating fund data',
      error: error.message
    });
  }
};

// Update fund data
export const updateFundData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await Fund.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: 'Fund data not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Fund data updated successfully',
      data: updatedData
    });
  } catch (error) {
    console.error('Error updating fund data:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating fund data',
      error: error.message
    });
  }
};

// Delete fund data
export const deleteFundData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Fund.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({
        success: false,
        message: 'Fund data not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Fund data deleted successfully',
      data: deletedData
    });
  } catch (error) {
    console.error('Error deleting fund data:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting fund data',
      error: error.message
    });
  }
};

// Get fund data by ID
export const getFundDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const fundData = await Fund.findById(id);

    if (!fundData) {
      return res.status(404).json({
        success: false,
        message: 'Fund data not found'
      });
    }

    res.status(200).json({
      success: true,
      data: fundData
    });
  } catch (error) {
    console.error('Error fetching fund data by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching fund data',
      error: error.message
    });
  }
};

// Update specific section of fund data
export const updateFundSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { section, data } = req.body;

    const updateQuery = {};
    updateQuery[section] = data;

    const updatedData = await Fund.findByIdAndUpdate(
      id,
      updateQuery,
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: 'Fund data not found'
      });
    }

    res.status(200).json({
      success: true,
      message: `${section} section updated successfully`,
      data: updatedData
    });
  } catch (error) {
    console.error('Error updating fund section:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating fund section',
      error: error.message
    });
  }
};
