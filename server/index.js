import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], // <-- add this
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// NEW: Auth Routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);
