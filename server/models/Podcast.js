import mongoose from 'mongoose';

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  audioUrl: {
    type: String,
    required: [true, 'Audio URL is required'],
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
  listens: {
    type: String,
    required: [true, 'Listen count is required'],
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
  host: {
    type: String,
    required: [true, 'Host name is required'],
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

podcastSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('podcasts', podcastSchema);
