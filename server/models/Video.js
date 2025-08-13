import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  videoId: { type: String, required: true },
  topic: { type: String, required: true },
  duration: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true }, // "all" or "speaking"
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  description: { type: String, default: "" }
}, { timestamps: true });

const Video = mongoose.model("Video", videoSchema);
export default Video;
