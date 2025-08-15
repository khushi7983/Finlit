import mongoose from "mongoose";

const mediaPresenceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: String, required: true }, // e.g., "12+ Features"
  iconType: { type: String, required: true }, // "Video", "Users", "Mic", "GraduationCap"
  link: { type: String, required: true }, // navigation link
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

const MediaPresence = mongoose.model("MediaPresence", mediaPresenceSchema);
export default MediaPresence;
