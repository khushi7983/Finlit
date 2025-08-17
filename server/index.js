import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

// Get __dirname equivalent for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection debugging
mongoose.connection.once('open', async () => {
  console.log('Connected to database. Listing collections...');
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    // Test direct access to your collection
    const nativeCount = await mongoose.connection.db.collection('FinTerm').countDocuments();
    console.log('FinTerm collection count (native):', nativeCount);
    
    // Test different collection names
    const testCollections = ['FinTerm', 'finterm', 'finterms', 'Finterm'];
    for (const collName of testCollections) {
      try {
        const count = await mongoose.connection.db.collection(collName).countDocuments();
        console.log(`Collection '${collName}' count:`, count);
      } catch (err) {
        console.log(`Collection '${collName}' error:`, err.message);
      }
    }
  } catch (err) {
    console.error('Error listing collections:', err);
  }
});

// Your existing routes
import exampleRoutes from './routes/exampleRoutes.js';
app.use('/api/example', exampleRoutes);
import offeringRoutes from "./routes/offeringRoutes.js";
app.use("/api/offerings", offeringRoutes);
import testimonialRoutes from "./routes/testimonialRoutes.js";
app.use("/api/testimonials", testimonialRoutes);
import faqRoutes from "./routes/faqRoutes.js";
app.use("/api/faqs", faqRoutes);
import supporterRoutes from "./routes/supporterRoutes.js";
app.use("/api/supporters", supporterRoutes);
import journeyRoutes from "./routes/journeyRoutes.js";
app.use("/api/journey", journeyRoutes);
import courseRoutes from "./routes/courseRoutes.js";
app.use("/api/courses", courseRoutes);
import videoRoutes from "./routes/videoRoutes.js";
app.use("/api/videos", videoRoutes);
import awardRoutes from "./routes/awardRoutes.js";
app.use("/api/awards", awardRoutes);

// NEW: Interview Routes
import interviewRoutes from "./routes/interviewRoutes.js";
app.use("/api/interviews", interviewRoutes);

// NEW: Podcast Routes
import podcastRoutes from "./routes/podcastRoutes.js";
app.use("/api/podcasts", podcastRoutes);

// NEW: Lecture Routes
import lectureRoutes from "./routes/lectureRoutes.js";
app.use("/api/lectures", lectureRoutes);

// AUTH Routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

// FinTerms Routes
import finTermRoutes from "./routes/finterms.js";
app.use("/api/finterms", finTermRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      message: 'File too large. Maximum size is 5MB.'
    });
  }
  
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: error.message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);
