import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';

// Get __dirname equivalent for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://finlit-six.vercel.app',
  'https://finlit-mu2k-jbzu30l6u-khushi-panwars-projects.vercel.app',
  'https://finlit-mu2k-pqu8t1r0v-khushi-panwars-projects.vercel.app',
   'https://finlit-frontend-njzg.onrender.com', 
  
  /^https:\/\/.*\.vercel\.app$/,  // Allow all Vercel subdomains
  /^https:\/\/.*\.onrender\.com$/,  // Allow all Render subdomains
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      // Check if origin is in allowedOrigins (string match)
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      
      // Check if origin matches any regex patterns
      for (const allowedOrigin of allowedOrigins) {
        if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
          return callback(null, true);
        }
      }
      
      callback(new Error('Not allowed by CORS'));
    },
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
import awardRoutes from "./routes/awardRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import exampleRoutes from './routes/exampleRoutes.js';
import faqRoutes from "./routes/faqRoutes.js";
import fraternityRoutes from "./routes/fraternityRoutes.js";
import journeyRoutes from "./routes/journeyRoutes.js";
import mediaPresenceRoutes from "./routes/mediaPresenceRoutes.js";
import offeringRoutes from "./routes/offeringRoutes.js";
import supporterRoutes from "./routes/supporterRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
app.use('/api/example', exampleRoutes);
app.use("/api/offerings", offeringRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/supporters", supporterRoutes);
app.use("/api/journey", journeyRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/fraternity", fraternityRoutes);
app.use("/api/media-presence", mediaPresenceRoutes);
app.use("/api/awards", awardRoutes);

// Fund Routes
import fundRoutes from "./routes/fundRoutes.js";
app.use("/api/fund", fundRoutes);

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

// Hero Routes
import heroRoutes from "./routes/heroRoutes.js";
app.use("/api/hero", heroRoutes);

// ESG Funds Routes
import esgFundRoutes from "./routes/esgFundRoutes.js";
app.use("/api/esg-funds", esgFundRoutes);

// Blog Routes
import blogRoutes from "./routes/blogRoutes.js";
app.use("/api/blogs", blogRoutes);

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
