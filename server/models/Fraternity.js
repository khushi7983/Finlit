import mongoose from "mongoose";

const fraternitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

const Fraternity = mongoose.model("Fraternity", fraternitySchema);
export default Fraternity;
