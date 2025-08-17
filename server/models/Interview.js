import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  youtubeUrl: {
    type: String,
    required: [true, 'YouTube URL is required'],
    trim: true
  },
  thumbnail: {
    type: String,
    required: [true, 'Thumbnail URL is required'],
    trim: true
  },
  color: {
    type: String,
    default: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  },
  bgHover: {
    type: String,
    default: "bg-white/95"
  },
  delay: {
    type: String,
    default: "0s"
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true
  },
  views: {
    type: String,
    required: [true, 'Views count is required'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  speaker: {
    type: String,
    required: [true, 'Speaker name is required'],
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
interviewSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Interview', interviewSchema);
