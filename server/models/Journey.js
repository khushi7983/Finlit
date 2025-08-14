import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  period: { type: String, required: true },
  order: { type: Number, default: 0 },
  isLatest: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
}, { timestamps: true });

const Journey = mongoose.model("Journey", journeySchema);
export default Journey;
