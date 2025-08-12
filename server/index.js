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

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);
