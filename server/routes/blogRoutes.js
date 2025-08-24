// import express from 'express';
// import Blog from '../models/Blog.js';

// const router = express.Router();

// // Get all active blogs
// router.get('/:slug', async (req, res) => {
//   try {
//     const blog = await Blog.findOne({ slug: req.params.slug }); // Assuming you add a slug field
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
    
//     // Increment views
//     blog.views += 1;
//     await blog.save();
    
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get blogs by category
// router.get('/category/:category', async (req, res) => {
//   try {
//     const blogs = await Blog.find({
//       category: req.params.category,
//       active: true
//     }).sort({ order: 1, publishDate: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get featured blogs
// router.get('/featured', async (req, res) => {
//   try {
//     const blogs = await Blog.find({
//       featured: true,
//       active: true
//     }).sort({ order: 1, publishDate: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get blog by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
    
//     // Increment views
//     blog.views += 1;
//     await blog.save();
    
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add a new blog
// router.post('/', async (req, res) => {
//   try {
//     const blog = new Blog(req.body);
//     const savedBlog = await blog.save();
//     res.status(201).json(savedBlog);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update blog
// router.put('/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json(blog);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete blog
// router.delete('/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json({ message: 'Blog deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;

import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Get featured blogs
router.get('/featured', async (req, res) => {
  try {
    const blogs = await Blog.find({
      featured: true,
      active: true
    }).sort({ order: 1, publishDate: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get blogs by category
router.get('/category/:category', async (req, res) => {
  try {
    const blogs = await Blog.find({
      category: req.params.category,
      active: true
    }).sort({ order: 1, publishDate: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get blog by ID (explicit path to avoid conflict)
router.get('/id/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({ active: true }).sort({ order: 1, publishDate: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get blog by slug (must be last)
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new blog
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update blog
router.put('/id/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete blog
router.delete('/id/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
