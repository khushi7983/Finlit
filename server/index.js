import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // fixed path

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
import exampleRoutes from './routes/exampleRoutes.js'; // fixed path
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
import fraternityRoutes from "./routes/fraternityRoutes.js";
app.use("/api/fraternity", fraternityRoutes);
import mediaPresenceRoutes from "./routes/mediaPresenceRoutes.js";
app.use("/api/media-presence", mediaPresenceRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);
